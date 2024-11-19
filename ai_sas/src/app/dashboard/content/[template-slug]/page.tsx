/* eslint-disable */
"use client"
import Template from "@/app/(data)/Template";
import { TEMPELATE } from "../../_components/Template";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import styles from "./content.module.scss";
import Link from "next/link";
import { ArrowLeft, CircleX, Recycle } from "lucide-react";
import { Model } from "../../../../utils/Aimodal";
import { useContext, useState } from "react";
import { db } from "../../../../utils/db";
import { Aioutput } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from 'moment';
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { UpdateUsageContext } from "@/app/(context)/UpdatUsageContext";

interface PROPS{
    params:{
      "template-slug":string 
    }
    
}
export default function CreateContend(props:PROPS){
    const [loading, setLoading] = useState(false);
    const [aioutput,setAioutput] = useState<string>('')
    const {user} = useUser();
    const router = useRouter()
    const {wordsUsed,setwordUsed} = useContext<any>(TotalUsageContext); // Words used
    const [showPopup, setShowPopup] = useState(false);
    const {userSubscription,setUserSubscription} = useContext<any>(UserSubscriptionContext)
    const {updateUsage,setupdateUsage} =useContext<any>(UpdateUsageContext)



    const GenerateAicontent = async (FormData: any) => {
      //  Update limit with subscription 
      if(wordsUsed >=100000 && userSubscription )
      {
        setShowPopup(true); 
        return;
      }
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAiprompt = `${JSON.stringify(FormData)} ${selectedPrompt}`; // Ensure this is a string
        console.log('FinalAiprompt:', FinalAiprompt); // Debugging log
        const result = await Model(FinalAiprompt);
        setAioutput(result.choices[0]?.message?.content || "");
        // console.log(result.choices[0]?.message?.content || "");
        await SaveInDb(FormData,selectedTemplate?.slug,result.choices[0]?.message?.content || "")
        setLoading(false)
        setupdateUsage(Date.now());
      };

    const handleNavigation = () =>{
      router.push('/dashboard/billing')
    }
    
    const SaveInDb = async(formData:any,slug:any,aiResp:any)=>{
       // @ts-ignore
            const result = await db.insert(Aioutput).values({
              formData:formData,
              templateSlug:slug,
              aiResponse:aiResp,
              createdBy:user?.primaryEmailAddress?.emailAddress,
              createdAt:moment().format('DD/MM/YYYY'), 

            })
            console.log(result)
    }
 
      
    const selectedTemplate: TEMPELATE | undefined = Template.find(
        (item) => item.slug === props.params["template-slug"]
      );
    return(
        <>
        <div>
            <Link href={"/dashboard"}>
            <button><ArrowLeft/> Go Back</button>
            </Link>
        </div>
        <div className={styles.Content}>
         <FormSection 
         selectedTemplate={selectedTemplate}
         userForminput={(v:any)=>{GenerateAicontent(v)}}
         loading={loading}
          />
         
         <OutputSection aioutput={aioutput}/>
         </div>
         {/* Popup Component */}
         {showPopup && (
        <div className={styles.PopupOverlay}>
          <div className={styles.Popup}>
            {/* Close Icon */}
            <div className={styles.PopHeader}>
              <button onClick={() => setShowPopup(false)}><CircleX color="black"/></button> 
            </div>
         
            <h2>Limit Reached</h2>
            <p>You have reached the word limit of 10,000. Upgrade for more.</p>
            <button onClick={() => handleNavigation()}>Upgrade</button>
          </div>
        </div>
      )}
        </>
    )
}
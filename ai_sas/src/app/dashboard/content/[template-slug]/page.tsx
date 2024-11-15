"use client"
import Template from "@/app/(data)/Template";
import { TEMPELATE } from "../../_components/Template";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import styles from "./content.module.scss";
import { generateKey } from "crypto";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Model } from "../../../../../utils/Aimodal";
import { useEffect, useState } from "react";
import { format } from "path";
import { db } from "../../../../../utils/db";
import { Aioutput } from "../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from 'moment';

interface PROPS{
    params:{
      "template-slug":string 
    }
    
}
export default function CreateContend(props:PROPS){
    const [loading, setLoading] = useState(false);
    const [aioutput,setAioutput] = useState<string>('')
    const {user} = useUser();


    const GenerateAicontent = async (FormData: any) => {
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAiprompt = `${JSON.stringify(FormData)} ${selectedPrompt}`; // Ensure this is a string
        console.log('FinalAiprompt:', FinalAiprompt); // Debugging log
        const result = await Model(FinalAiprompt);
        setAioutput(result.choices[0]?.message?.content || "");
        // console.log(result.choices[0]?.message?.content || "");
        await SaveInDb(FormData,selectedTemplate?.slug,result.choices[0]?.message?.content || "")
        setLoading(false)
      };
    
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
        </>
    )
}
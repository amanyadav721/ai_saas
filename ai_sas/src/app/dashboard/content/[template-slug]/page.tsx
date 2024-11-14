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
interface PROPS{
    params:{
      "template-slug":string 
    }
    
}
export default function CreateContend(props:PROPS){
    const [loading, setLoading] = useState(false);


    const GenerateAicontent = async (FormData: any) => {
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAiprompt = `${JSON.stringify(FormData)} ${selectedPrompt}`; // Ensure this is a string
        console.log('FinalAiprompt:', FinalAiprompt); // Debugging log
        const result = await Model(FinalAiprompt);
        console.log(result.choices[0]?.message?.content || "");
        
        setLoading(false)
      };
      
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
         
         <OutputSection />
         </div>
        </>
    )
}
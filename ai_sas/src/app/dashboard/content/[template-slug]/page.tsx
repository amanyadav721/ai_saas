"use client"
import Template from "@/app/(data)/Template";
import { TEMPELATE } from "../../_components/Template";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import styles from "./content.module.scss";
import { generateKey } from "crypto";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
interface PROPS{
    params:{
      "template-slug":string 
    }
    
}
export default function CreateContend(props:PROPS){

    const GenerateAicontent=(FormData:any)=>{

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
          />
         <div className={styles.outputSection}>
         <OutputSection />
         </div>
         </div>
        </>
    )
}
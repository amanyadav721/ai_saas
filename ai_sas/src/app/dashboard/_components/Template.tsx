import Template from "@/app/(data)/Template";  // Ensure Template is the correct imported data
import TemplateCard from "./TemplateCard";
import styles from "./main.module.scss"
import { useEffect, useState } from "react";


export interface TEMPELATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[]; 
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;  
}

export default function TemplateList({ userSearchInput}:any) { 
  const [templateList, settemplateList] = useState(Template)    
  useEffect(()=>{
   console.log(userSearchInput)
   if(userSearchInput)
   {
    const filterData=Template.filter(item=> item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
    settemplateList(filterData)
   }
   else{
    settemplateList(Template)
   }
  },[userSearchInput])
  return (
    <div className={styles.tempcard}>
      {templateList.map((item: TEMPELATE, index: number) => (
        <div key={index}> 
          <TemplateCard {...item} />  
        </div>
      ))}
    </div>
  );
}

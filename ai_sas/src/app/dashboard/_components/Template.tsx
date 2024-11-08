import Template from "@/app/(data)/Template";  // Ensure Template is the correct imported data
import TemplateCard from "./TemplateCard";
import styles from "./main.module.scss"


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

export default function TemplateList() {  
  return (
    <div className={styles.tempcard}>
      {Template.map((item: TEMPELATE, index: number) => (
        <div key={index}> 
          <TemplateCard {...item} />  
        </div>
      ))}
    </div>
  );
}

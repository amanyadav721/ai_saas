/* eslint-disable */
"use client"
import { Input } from "@/components/ui/input"
import { TEMPELATE } from "../../_components/Template";
import styles from "./main.module.scss"
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface PROPS{
    selectedTemplate?:TEMPELATE,
    userForminput:any,
    loading:boolean,
}

export default function FormSection({selectedTemplate, userForminput, loading}:PROPS){
    const [formData,setFormData] = useState<any>()
    const handleChange = (event:any) =>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})

    }
    const onSubmit = (e:any)=>{
        e.preventDefault();
        userForminput(formData)
    } 
    
    return <>
    <div className={styles.FormSection}>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt="icon" height={70} width={70}/>
        <h1>{selectedTemplate?.name}</h1>
        <p>{selectedTemplate?.desc}</p>
        <form onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
                <div className={styles.form}>
                    <label>{item.label}</label>
                    {item.field=='input'?<Input name={item.name} required={item?.required}
                    onChange={handleChange}/>
                    :item.field=="textarea" ? <Textarea
                    name={item.name} required={item?.required}
                    onChange={handleChange}
                    /> :null
                    }
                </div>
            ))}
            <button type="submit" disabled={loading}>
                {loading&&<Loader2Icon/>}
                Generate Content
                </button>
        </form>

    </div>
    </>
    
}
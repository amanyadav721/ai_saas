"use client"
import React, { useContext, useEffect, useState } from "react";
import styles from "./main.module.scss";
import { useUser } from "@clerk/nextjs";
import { db } from "../../../../utils/db";
import { Aioutput } from "../../../../utils/schema";
import {eq} from 'drizzle-orm';
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";


interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    slug:string,
    createdAt:string,
    createdBy:string
}
export default  function Creditusage () {
  
  const totalCredits = 10000; // Total user credits
  const {wordsUsed,setwordUsed} = useContext<any>(TotalUsageContext); // Words used
  const {user} = useUser();
  
  
  const getData = async()=>{
    // @ts-ignore
    const result: HISTORY[] = await db.select().from(Aioutput).where(eq(Aioutput.createdBy, user?.primaryEmailAddress?.emailAddress));

     getTotal(result)

  }

  useEffect(()=>{
        user && getData();

  },[user])

  const getTotal = (result:HISTORY[]) =>{
      let total:number=0;
      result.forEach(element=>{
        total=total+Number(element.aiResponse?.length)
      })
      setwordUsed(total)
      console.log(total)
  }

  // Calculate the percentage of credits used
  const creditsUsedPercentage = ( wordsUsed / totalCredits) * 100;

  return (
    <>
    <div className={styles.Credit}>
      <div>
        You have used <strong>{creditsUsedPercentage.toFixed(2)}%</strong> of your credits.
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${creditsUsedPercentage}%` }}
        >
          <span className={styles.percentage}>
            {creditsUsedPercentage.toFixed(2)}%
          </span>
        </div>
      </div>
     
    </div>
     <div className={styles.Upgrade}>
     <button>Upgrade</button>
    </div>
    </>
  );
}

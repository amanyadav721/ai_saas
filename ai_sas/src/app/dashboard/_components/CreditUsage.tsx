"use client"
import React, { useContext, useEffect, useState } from "react";
import styles from "./main.module.scss";
import { useUser } from "@clerk/nextjs";
import { db } from "../../../utils/db";
import { Aioutput, UserSubscription } from "../../../utils/schema";
import {eq} from 'drizzle-orm';
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";


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
  const {userSubscription,setUserSubscription} = useContext<any>(UserSubscriptionContext)
  const {user} = useUser();
  
  
  const getData = async()=>{
    // @ts-ignore
    const result: HISTORY[] = await db.select().from(Aioutput).where(eq(Aioutput.createdBy, user?.primaryEmailAddress?.emailAddress));

     getTotal(result)

  }

  useEffect(()=>{
        user && getData();
        user && IsUserSubscribe();

  },[user])

  const getTotal = (result:HISTORY[]) =>{
      let total:number=0;
      result.forEach(element=>{
        total=total+Number(element.aiResponse?.length)
      })
      setwordUsed(total)
      console.log(total)
  }

  const IsUserSubscribe = async() =>{
    // @ts-ignorea
    const result = await db.select().from( UserSubscription).where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress));

    if(result)
    {
      setUserSubscription(true)
    }
  }

  // Calculate the percentage of credits used
  
  const creditsUsedPercentage = ()=>{
    let creditRemaining:number=0;

    if(userSubscription){
     creditRemaining=( wordsUsed / 100000) * 100;
    }
    else{
      creditRemaining=( wordsUsed / 10000) * 100;

    }
    return creditRemaining
  }

  return (
    <>
    <div className={styles.Credit}>
      {/* <div>
        You have used <strong>{creditsUsedPercentage().toFixed(2)}%</strong> of your credits.
      </div> */}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${creditsUsedPercentage()}%` }}
        >
          <span className={styles.percentage}>
            {creditsUsedPercentage().toFixed(2)}%
          </span>
        </div>
      </div>
      <div>
        Your wordsUsed 
        <div>
          {wordsUsed} / {userSubscription?100000:10000} credits
        </div>
      </div>
     
    </div>
     <div className={styles.Upgrade}>
     <button>Upgrade</button>
    </div>
    </>
  );
}

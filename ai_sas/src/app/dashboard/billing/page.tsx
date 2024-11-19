"use client"
import { useContext, useState } from "react";
import styles from "./billing.module.scss";
import axios from 'axios';
import {  Loader2Icon } from "lucide-react";
import { db } from "../../../utils/db";
import { UserSubscription } from "../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";

export default function Billing() {
  const [selectedPlan] = useState();
  const {userSubscription} = useContext<any>(UserSubscriptionContext)
  const [loading,setloading] = useState(false);
  const {user}= useUser();
  const CreateSubscription = () =>{
    setloading(true)
    axios.post('/api/create-subscription',{})
    .then(resp=>{
      console.log(resp.data);
      OnPayment(resp.data.id)
    },(error)=>{
      setloading(false)
    })
  }
  const OnPayment=(subId:string)=>{
    const options = {
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":"Namah Ai",
      description:'Monthly Subscription',
      handler:async(resp:any)=>{
        console.log(resp)
        if(resp){
          SaveSubscription(resp?.razorpay_payment_id)
        }
        setloading(false)
      }
    }
    // @ts-ignore
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

   const SaveSubscription = async(paymentId:string)=>{
      const result = await db.insert(UserSubscription)
      .values({
        email:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        active:true,
        paymentId:paymentId,
        joinDate:moment().format('DD/MM/YYYY')
      });
      console.log(result)
   }

  return (
    <div className={styles.billingContainer}>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className={styles.heading}>Choose Your Subscription Plan</h1>
      <div className={styles.planContainer}>
        <div
          className={`${styles.plan} ${
            selectedPlan === "free" ? styles.selected : ""
          }`}
        >
          <h2>Free</h2>
          <p>$0 / month</p>
        </div>
        <div
          className={`${styles.plan} ${
            selectedPlan === "Gold" ? styles.selected : ""
          }`}
          onClick={() => CreateSubscription()}
        >
          <h2>Subscribed</h2>
          <p>$9.99 / month</p>
          <button
          disabled={loading}
          >
            <span className={styles.loaderspin} > {loading&&<Loader2Icon/>} </span>
            {userSubscription? 'ACITVE': 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
}  
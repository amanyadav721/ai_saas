"use client"
import { Children, useContext, useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import styles from "./global.module.scss"
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscription";
import { UpdateUsageContext } from "../(context)/UpdatUsageContext";

export default function dashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [wordsUsed,setwordUsed] = useState<any>(0);
    const [userSubscription,setUserSubscription] = useState<boolean>(false)
    const [updateUsage,setupdateUsage] = useState<any>()
    return (
        <>
        <TotalUsageContext.Provider value={{wordsUsed,setwordUsed}}>
          <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
          <UpdateUsageContext.Provider value={{updateUsage,setupdateUsage}}>
        <div className={styles.snav}><SideNav/></div>
       
       <div className={styles.main}>
        <Header/>
         {children} 
         </div>
         </UpdateUsageContext.Provider>
         </UserSubscriptionContext.Provider>
         </TotalUsageContext.Provider>
        </>
    )
}
// className={styles.snav}
// className={styles.main}
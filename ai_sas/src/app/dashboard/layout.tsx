"use client"
import { Children, useContext, useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import styles from "./global.module.scss"
import { TotalUsageContext } from "../(context)/TotalUsageContext";

export default function dashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [wordsUsed,setwordUsed] = useState<any>(0);
    return (
        <>
        <TotalUsageContext.Provider value={{wordsUsed,setwordUsed}}>
        <div className={styles.snav}><SideNav/></div>
       
       <div className={styles.main}>
        <Header/>
         {children} 
         </div>
         </TotalUsageContext.Provider>
        </>
    )
}
// className={styles.snav}
// className={styles.main}
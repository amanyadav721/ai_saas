"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import styles from "./main.module.scss"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Creditusage from "./CreditUsage";
import Link from "next/link";


export default function SideNav(){
  const path = usePathname();
  useEffect(()=>{
    console.log(path)

  },[])

  const MenuList=[
    {
      name:'Home',
      icone:Home,
      path:'/dashboard'
    },
    {
      name:'History',
      icone:FileClock,
      path:'/dashboard/history'
    },
    {
      name:'Billing',
      icone:WalletCards,
      path:'/dashboard/billing'
    },
    {
      name:'Setting',
      icone:Settings,
      path:'/dashboard/settings'
    },
  ]
    return (
        <>
        <div className={styles.main}>
          <Link href={"/"}>
        <div className={styles.logo}>
          <Image src="/logo.svg"  alt = "logo"  width={100} height={100}/>
        </div>
        </Link>
        <div className={styles.list}>
            {MenuList.map((item, index) => (
        <div key={index}
        className={`${styles.listItem} ${path === item.path ? styles.active : ""}`}
        >
        <div> 
        <Link  className={styles.links}  href={item.path}>
          <item.icone />
          <h1>{item.name}</h1>
        </Link>
        </div>
        </div>
        ))}
      </div>
      <div>
        <Creditusage/>
      </div>
      
        </div>
        </>
    )
}
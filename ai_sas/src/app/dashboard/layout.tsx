import { Children } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import styles from "./global.module.scss"

export default function dashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <>
        <div className={styles.snav}><SideNav/></div>
        {/* <div><Header/></div> */}
       <div className={styles.main}> {children} </div>
        </>
    )
}
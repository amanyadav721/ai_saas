import {  UserProfile } from "@clerk/nextjs";
import styles from "./settings.module.scss"
export default function Setting () {
    return <>
    <div className={styles.settings}>
    <span className={styles.settingsPage}>
    <UserProfile/>
    </span>
    </div>
    </>
}
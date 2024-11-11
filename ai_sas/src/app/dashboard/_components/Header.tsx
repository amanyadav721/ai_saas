import { Search } from "lucide-react";
import styles from "./main.module.scss"

export default function Header(){
    return (
        <>
        <div className={styles.HeaderContainer}>
        <div  className={styles.HeaderMain}>
           <Search/>
           <input type="text" placeholder="  Search.." className={styles.searchHeader} />
        </div>
        <div className={styles.Membership}>
            <h1>🔥Join Membership for $9.99/mo</h1>
        </div>
        </div>
        </>
    )
}
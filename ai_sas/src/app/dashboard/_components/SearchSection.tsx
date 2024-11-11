import { Search } from "lucide-react"
import styles from "./main.module.scss"
export default function SearchSection({onSearhcInput}:any){
    return (
        <>
        <div className={styles.SearchMain}>
            <h1>Browse All Tempelate</h1>
            <p>What would you like to Create today ?</p>
            <div className={styles.SearchSection}>
                <Search/>
                <input type="text" className={styles.search}
                onChange={(e)=>onSearhcInput(e.target.value)}
                />
            </div>
        </div>
        </>
    )
}
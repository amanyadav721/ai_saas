import { SignIn } from '@clerk/nextjs';
import styles from "./si.module.scss"

export default function Page() {
   return( <div className={styles.si}> 
    <SignIn />
    </div>);
}
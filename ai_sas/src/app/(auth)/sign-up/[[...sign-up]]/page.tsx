import { SignUp } from '@clerk/nextjs'
import styles from "./su.module.scss"

export default function Page() {
  return(
  <div className={styles.su}> 
  <SignUp />
  </div>
  );
}
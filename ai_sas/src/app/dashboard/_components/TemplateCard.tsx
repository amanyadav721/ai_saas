import { TEMPELATE } from "./Template";
import Image from "next/image";
import styles from "./main.module.scss"
export default function TemplateCard(item:TEMPELATE){
    return (
        <>
        <div className={styles.card}>
            <Image src={item.icon} alt="item icons" width={50} height={50}/>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
        </div>
        </>
    );

}
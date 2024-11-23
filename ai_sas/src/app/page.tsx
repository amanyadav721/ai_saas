"use client"
import React from "react";
import styles from "./main.module.scss";
import { useRouter } from "next/navigation";

export default function Mainpage() {
  const router = useRouter()
  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to AI Universe</h1>
        <p className={styles.subtitle}>
          Explore our 18+ powerful AI tools designed to boost your productivity and creativity.
        </p>
      </header>
      <button onClick={()=>{router.push("/dashboard")}}>Get Started</button>

      <section className={styles.carouselSection}>
        <h2 className={styles.carouselTitle}>Our AI Tools</h2>
        <div className={styles.carousel}>
          {Array.from({ length: 18 }).map((_, index) => (
            <div className={styles.carouselItem} key={index}>
              <h3>Tool {index + 1}</h3>
              <p>Discover the features of AI Tool {index + 1}.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 AI Universe | Empowering your journey with AI</p>
      </footer>
    </div>
  );
}

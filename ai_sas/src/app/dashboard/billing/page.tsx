"use client"
import { useState } from "react";
import styles from "./billing.module.scss";

export default function Billing() {
  const [selectedPlan, setSelectedPlan] = useState("free");

  return (
    <div className={styles.billingContainer}>
      <h1 className={styles.heading}>Choose Your Subscription Plan</h1>
      <div className={styles.planContainer}>
        <div
          className={`${styles.plan} ${
            selectedPlan === "free" ? styles.selected : ""
          }`}
          onClick={() => setSelectedPlan("free")}
        >
          <h2>Free</h2>
          <p>$0 / month</p>
        </div>
        <div
          className={`${styles.plan} ${
            selectedPlan === "basic" ? styles.selected : ""
          }`}
          onClick={() => setSelectedPlan("basic")}
        >
          <h2>Basic</h2>
          <p>$9.99 / month</p>
        </div>
        <div
          className={`${styles.plan} ${
            selectedPlan === "premium" ? styles.selected : ""
          }`}
          onClick={() => setSelectedPlan("premium")}
        >
          <h2>Premium</h2>
          <p>$19.99 / month</p>
        </div>
      </div>
    </div>
  );
}

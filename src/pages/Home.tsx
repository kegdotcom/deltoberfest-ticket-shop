import React from "react";
import styles from "./page-styles.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>Welcome to Deltoberfest Shop!</h3>
      <p className={styles.text}>Get ready for the event!</p>
    </div>
  );
}

import React from "react";
import RaffleItem from "../components/images/RaffleItem";
import styles from "./page-styles.module.css";

export default function Images() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>Raffle Items</h3>
      <p className={styles.text}>
        Here are some images of the items that will be in the raffle:
      </p>
    </div>
  );
}

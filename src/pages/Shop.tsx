import React, { useState } from "react";
import ShopItem from "../components/shop/ShopItem";
import styles from "./page-styles.module.css";

export default function Shop() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>Raffle Ticket Shop</h3>
      <h5 className={styles.subheader}>Buy some raffle tickets!</h5>
      <div className={styles.shopContainer}>
        <ShopItem
          id={1}
          name="Raffle Ticket"
          description="1 entry to the raffle for prizes!"
          price={5}
        />
        <ShopItem
          id={5}
          name="Five Raffle Tickets"
          description="5 entries to the raffle for prizes!"
          price={20}
        />
        <ShopItem
          id={10}
          name="Ten Raffle Tickets"
          description="10 entries to the raffle for prizes!"
          price={35}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./shop-item.module.css";

interface ShopItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function ShopItem({
  id,
  name,
  description,
  price,
}: ShopItemProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const baseServerURL = "http://localhost:8080";
  function checkout() {
    fetch(baseServerURL + "/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: id, quantity: quantity }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(res.json());
      })
      .then((url) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }

  return (
    <div className={styles.shopItem}>
      <h5 className={styles.subheader}>{name}</h5>
      <p className={styles.text}>{description}</p>
      <p className={styles.text}>${(price / id).toFixed(2)} per ticket</p>
      <h5 className={styles.subheader}>${price}</h5>
      <button className={styles.purchaseButton} onClick={checkout}>
        Buy {id}
      </button>
      <input
        type="number"
        min={1}
        max={20}
        onChange={(e) => {
          setQuantity(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

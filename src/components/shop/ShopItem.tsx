import React from "react";
import styles from "./shop-item.module.css";

interface ShopItemProps {
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

export default function ShopItem({
  name,
  description,
  imageURL,
  price,
}: ShopItemProps) {
  return (
    <div>
      <h3>
        Shop Item: {name} - {description} - ${price}
      </h3>
      <img src={imageURL} alt={name} />
    </div>
  );
}

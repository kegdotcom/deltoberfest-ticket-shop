import React from "react";
import styles from "./raffle-item.module.css";

interface RaffleItemProps {
  name: string;
  description: string;
  imageURL: string;
}

export default function RaffleItem({
  name,
  description,
  imageURL,
}: RaffleItemProps) {
  return (
    <div>
      <img src={imageURL} alt={name} />
      <div>
        <h3>{name}</h3>
        <h6>{description}</h6>
      </div>
    </div>
  );
}

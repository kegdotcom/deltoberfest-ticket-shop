import React from "react";
import ShopItem from "../components/shop/ShopItem";

export default function Shop() {
  return (
    <>
      <h3>Welcome to the shop!</h3>
      <ul>
        <li>
          <ShopItem
            name="Entrance Ticket"
            description="Your ticket to the event!"
            price={5}
            imageURL=""
          />
        </li>
        <li>
          <ShopItem
            name="Raffle Ticket"
            description="One entry to the raffle for prizes!"
            price={5}
            imageURL=""
          />
        </li>
        <li>
          <ShopItem
            name="Two Raffle Tickets"
            description="Two entries to the raffle for prizes!"
            price={8}
            imageURL=""
          />
        </li>
      </ul>
    </>
  );
}

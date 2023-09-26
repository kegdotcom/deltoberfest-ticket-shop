import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <span>
          <img />
        </span>
        <span>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/info">Info</Link>
        </span>
      </div>
    </nav>
  );
}

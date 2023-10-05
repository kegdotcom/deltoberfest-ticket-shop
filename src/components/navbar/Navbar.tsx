import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../images/logo.jpg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link className={styles.link} id={styles.logoLink} to="/">
          <img className={styles.icon} src={logo} />
        </Link>
        <span className={styles.linkContainer}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/shop">
            Shop
          </Link>
          <Link className={styles.link} to="/gallery">
            Raffle Items
          </Link>
        </span>
      </div>
    </nav>
  );
}

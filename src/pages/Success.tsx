import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./page-styles.module.css";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.header}>Success!</h3>
      <h5 className={styles.subheader}>
        Your purchase has been registered successfully.
      </h5>
      <p className={styles.text}>
        You will be redirected back to the shop shortly...
      </p>
    </div>
  );
}

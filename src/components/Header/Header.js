import React from "react";
import styles from "./styles.module.css";
import logo from "./logo.png";
import phone from "./phone-call.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.header_list}>
        <li className={styles.active}>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Grant Schemes</li>
        <li>News</li>
        <li>Contact</li>
        <button className={styles.contact_btn}>
          <img src={phone} alt="phone" /> (+123) 4567 8909
        </button>
      </ul>
    </div>
  );
}

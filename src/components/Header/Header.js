import React from "react";
import styles from "./styles.module.css";
import logo from "./logo.png";
import phone from "./phone-call.svg";
import white_logo from "./white_logo.png";

export default function Header() {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.white_logo}>
        <img src={white_logo} alt="logo" />
      </div>
      <ul className={styles.header_list}>
        <li id="header-welcome" className={styles.active}>
          <a href="#welcome">Home</a>
        </li>
        <li id="header-about">
          <a href="#about">About Us</a>
        </li>
        <li id="header-services">
          <a href="#services">Services</a>
        </li>
        <li id="header-testimonials">
          <a href="#testimonials">Grant Schemes</a>
        </li>
        <li id="header-blog">
          <a href="#blog">News</a>
        </li>
        <li id="header-contact">
          <a href="#contact">Contact</a>
        </li>
        <button className={styles.contact_btn}>
          <img src={phone} alt="phone" /> (+123) 4567 8909
        </button>
      </ul>
    </div>
  );
}

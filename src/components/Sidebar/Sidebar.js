import React from "react";
import styles from "./styles.module.css";
import header_styles from "../Header/styles.module.css";

export default function Sidebar() {
  function close_sidebar() {
    document.getElementById("sidebar").style.display = "none";
    document
      .getElementsByClassName(header_styles.bar1)[0]
      .classList.toggle(header_styles.bar1_open);
    document
      .getElementsByClassName(header_styles.bar2)[0]
      .classList.toggle(header_styles.bar2_open);
    document
      .getElementsByClassName(header_styles.bar3)[0]
      .classList.toggle(header_styles.bar3_open);
  }
  return (
    <div
      id="sidebar"
      className={styles.sidebar_overlay}
      onClick={() => close_sidebar()}
    >
      <div className={styles.sidebar_container}>
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
        </ul>
      </div>
    </div>
  );
}

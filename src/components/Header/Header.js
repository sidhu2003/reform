import React from "react";
import styles from "./styles.module.css";
import logo from "./logo.png";
import phone from "./phone-call.svg";
import white_logo from "./white_logo.png";
import sidebar_styles from "../Sidebar/styles.module.css";

export default function Header() {
  function changeLocation(id) {
    document
      .getElementsByClassName(styles.active)[0]
      .classList.remove(styles.active);
    document.getElementById(id).classList.add(styles.active);
  }
  function toogle_sidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 300);
      document
        .getElementById("sidebar-container")
        .classList.toggle(sidebar_styles.open_sidebar_container);
    } else {
      sidebar.style.display = "block";
      setTimeout(() => {
        document
          .getElementById("sidebar-container")
          .classList.toggle(sidebar_styles.open_sidebar_container);
      }, 50);
    }
    document
      .getElementsByClassName(styles.bar1)[0]
      .classList.toggle(styles.bar1_open);
    document
      .getElementsByClassName(styles.bar2)[0]
      .classList.toggle(styles.bar2_open);
    document
      .getElementsByClassName(styles.bar3)[0]
      .classList.toggle(styles.bar3_open);
  }
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
          <a onClick={(e) => changeLocation("header-welcome")} href="#welcome">
            Home
          </a>
        </li>
        <li id="header-about">
          <a onClick={(e) => changeLocation("header-about")} href="#about">
            About Us
          </a>
        </li>
        <li id="header-services">
          <a
            onClick={(e) => changeLocation("header-services")}
            href="#services"
          >
            Services
          </a>
        </li>
        <li id="header-testimonials">
          <a
            onClick={(e) => changeLocation("header-testimonials")}
            href="#testimonials"
          >
            Grant Schemes
          </a>
        </li>
        <li id="header-blog">
          <a onClick={(e) => changeLocation("header-blog")} href="#blog">
            News
          </a>
        </li>
        <li id="header-contact">
          <a onClick={(e) => changeLocation("header-contact")} href="#contact">
            Contact
          </a>
        </li>
        <button className={styles.contact_btn}>
          <img src={phone} alt="phone" /> (+123) 4567 8909
        </button>
      </ul>
      <div onClick={() => toogle_sidebar()} className={styles.menubar}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
}

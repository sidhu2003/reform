import React from "react";
import styles from "./styles.module.css";
import logo from "./footerimages/reform.jpg";
import fb from "./footerimages/facebook.svg";
import twitter from "./footerimages/twitter.svg";
import linkedin from "./footerimages/linkedin.svg";
import airb from "./footerimages/airb.svg";

export default function New_footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div>
            <img src={logo} alt="logo" className={styles.logo}></img>
          </div>
          <div className={styles.section}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className={styles.socials}>
            <img src={fb} alt="fb" className={styles.social_icon}></img>
            <img
              src={twitter}
              alt="twitter"
              className={styles.social_icon}
            ></img>
            <img
              src={linkedin}
              alt="insta"
              className={styles.social_icon}
            ></img>
            <img src={airb} alt="airbnb" className={styles.social_icon}></img>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>Quick Links</div>
          <div className={styles.footer_link}>Home</div>
          <div className={styles.footer_link}>About Us</div>
          <div className={styles.footer_link}>Services</div>
          <div className={styles.footer_link}>Grant Services</div>
          <div className={styles.footer_link}>News</div>
          <div className={styles.footer_link}>Contact</div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>Services</div>
          <div className={styles.footer_link}>Heat Contol</div>
          <div className={styles.footer_link}>Air Source</div>
          <div className={styles.footer_link}>Solar Panel</div>
          <div className={styles.footer_link}>Electric Storage Heater</div>
          <div className={styles.footer_link}>Under Floor Insulation</div>
          <div className={styles.footer_link}>Boiler Installation</div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>Contact Info</div>
          <div className={styles.contact_info}>
            <b>phone</b>: +1-234-567-8900
          </div>
          <div className={styles.contact_info}>
            <b>Fax</b>: 1(234)567-8900
          </div>
          <div className={styles.contact_info}>
            <b>Email</b>: info@loremipsum.com
          </div>
          <div className={styles.contact_info}>
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.23832C0 2.78842 2.88291 0 6.37008 0C9.86709 0 12.75 2.78842 12.75 6.23832C12.75 7.97677 12.1178 9.59072 11.0771 10.9587C9.9291 12.4676 8.51412 13.7823 6.92141 14.8143C6.55688 15.0528 6.22791 15.0708 5.82784 14.8143C4.22605 13.7823 2.81107 12.4676 1.67287 10.9587C0.631488 9.59072 0 7.97677 0 6.23832ZM4.27067 6.43258C4.27067 7.5883 5.21374 8.49727 6.37008 8.49727C7.52718 8.49727 8.47933 7.5883 8.47933 6.43258C8.47933 5.28586 7.52718 4.33264 6.37008 4.33264C5.21374 4.33264 4.27067 5.28586 4.27067 6.43258Z"
                fill="#7AD1A1"
              />
            </svg>
            1234 A Lorem ipsum street West Covina ,CA 12345,U.S
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.terms}>
        <div className={styles.term}>
          2024© All right reserved by{" "}
          <span style={{ color: "#7AD1A1" }}>REFORM</span>
        </div>
        <div className={styles.term}>Terms of Use | Privacy Policy</div>
      </div>
    </div>
  );
}

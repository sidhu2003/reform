import React from "react";
import styles from "./styles.module.css";
import logo from "./footerimages/reform.png";
import fb from "./footerimages/facebook.svg";
import twitter from "./footerimages/twitter.svg";
import linkedin from "./footerimages/linkedin.svg";
import airb from "./footerimages/airb.svg";
import { useSearchParams } from "react-router-dom";

export default function New_footer() {
  const [query, setQuery] = useSearchParams();
  document.addEventListener("click", function (event) {
    if (event.target.matches(".footer_link")) {
      event.preventDefault();
      const servicesElement = document.getElementById("services");
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  return (
    <div className={styles.footer_container}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div>
            <img src={logo} alt="logo" className={styles.logo}></img>
          </div>
          <div className={styles.section}>
            At Reform, we are committed to delivering innovative and sustainable
            solutions for all your energy needs. Our expert team is dedicated to
            providing exceptional service and ensuring customer satisfaction.
            Join us in our mission to create a greener, more efficient future.
            For any inquiries or to learn more about our services, connect with
            us through our social media channels or contact information
            provided.
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
          <a href="#welcome" className={styles.footer_link}>
            Home
          </a>
          <a href="#about" className={styles.footer_link}>
            About Us
          </a>
          <a href="#service" className={styles.footer_link}>
            Services
          </a>
          <a href="#testimonials" className={styles.footer_link}>
            Grant Services
          </a>
          <a href="#blog" className={styles.footer_link}>
            News
          </a>
          <a href="#contact" className={styles.footer_link}>
            Contact
          </a>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>Services</div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 1);
                return prev;
              });
            }}
            class="footer_link"
          >
            Heat Control
          </div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 2);
                return prev;
              });
            }}
            class="footer_link"
          >
            Air Source
          </div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 3);
                return prev;
              });
            }}
            class="footer_link"
          >
            Solar Panel
          </div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 4);
                return prev;
              });
            }}
            class="footer_link"
          >
            Electric Storage Heater
          </div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 5);
                return prev;
              });
            }}
            class="footer_link"
          >
            Under Floor Insulation
          </div>
          <div
            onClick={() => {
              setQuery((prev) => {
                prev.set("service", 6);
                return prev;
              });
            }}
            class="footer_link"
          >
            Boiler Installation
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_title}>Contact Info</div>
          <div className={styles.contact_info}>
            <b>phone</b>:{" "}
            <a href="tel:+442080409083" className={styles.center}>
              +44 208 040 9083
            </a>
          </div>
          <div className={styles.contact_info}>
            <b>Fax</b>: 1(234)567-8900
          </div>
          <div className={styles.contact_info}>
            <b>Email</b>:{" "}
            <a href="mailTo:support@reform-group.uk" className={styles.center}>
              support@reform-group.uk
            </a>
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
            <a
              href="https://www.google.com/maps/place/Temple+View,+High+St,+Templecombe+BA8+0JG,+UK/@50.9979328,-2.4206539,17z/data=!3m1!4b1!4m6!3m5!1s0x487237ce1f94da99:0xd27cb75370dc6adc!8m2!3d50.9979295!4d-2.415783!16s%2Fg%2F1th09w_g?entry=ttu"
              target="_blank"
              className={styles.center}
            >
              <span style={{ marginLeft: "10px" }}>
                Templeview, High Street, Templecombe,
                <br /> Somerset, BA8 0JG
              </span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.terms}>
        <div className={styles.term}>
          2024© All right reserved by{" "}
          <span style={{ color: "#7AD1A1" }}>REFORM</span>
        </div>
        <div className={styles.term}>
          <span
            onClick={() => {
              document.getElementById("terms_of_use_model").style.display =
                "flex";
            }}
          >
            Terms of Use
          </span>{" "}
          |{" "}
          <span
            onClick={() => {
              document.getElementById("privacy_policy_model").style.display =
                "flex";
            }}
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}

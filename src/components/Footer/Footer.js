import React from "react";
import Styles from "./footer.module.css";
import Reform from "./footerimages/reform.png";
const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.wrappest}>
        <div className={Styles.footerwrapper}>
          <div className={Styles.first}>
            <img src={Reform} className={Styles.reform}></img>
            <div className={Styles.content}>
              At Reform, we are committed to delivering innovative and
              sustainable solutions for all your energy needs. Our expert team
              is dedicated to providing exceptional service and ensuring
              customer satisfaction. Join us in our mission to create a greener,
              more efficient future. For any inquiries or to learn more about
              our services, connect with us through our social media channels or
              contact information provided.
            </div>
            <div className={Styles.logowrappers}>
              <svg
                className={Styles.logo}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M21.55 21.475H23.175L23.825 18.875H21.55V17.575C21.55 16.9055 21.55 16.275 22.85 16.275H23.825V14.091C23.6131 14.0631 22.8129 14 21.9679 14C20.2032 14 18.95 15.077 18.95 17.055V18.875H17V21.475H18.95V27H21.55V21.475Z"
                  fill="white"
                />
              </svg>
              <svg
                className={Styles.logo}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M26.5284 16.3058C26.0217 16.53 25.4844 16.6771 24.9342 16.7425C25.5141 16.3957 25.9482 15.8499 26.1554 15.2067C25.6112 15.5306 25.0145 15.7576 24.3926 15.8804C23.9749 15.4334 23.4212 15.137 22.8176 15.0372C22.214 14.9374 21.5944 15.0398 21.055 15.3285C20.5156 15.6172 20.0867 16.076 19.835 16.6336C19.5833 17.1911 19.5228 17.8163 19.663 18.4118C18.5593 18.3565 17.4796 18.0697 16.494 17.57C15.5083 17.0703 14.6388 16.3689 13.9418 15.5114C13.6951 15.9351 13.5655 16.4168 13.5661 16.9071C13.5661 17.8695 14.056 18.7197 14.8007 19.2175C14.36 19.2037 13.929 19.0846 13.5436 18.8704V18.9049C13.5437 19.5459 13.7655 20.167 14.1714 20.6631C14.5772 21.1592 15.1421 21.4997 15.7703 21.6268C15.3612 21.7377 14.9323 21.754 14.5159 21.6746C14.693 22.2263 15.0383 22.7088 15.5033 23.0545C15.9682 23.4003 16.5297 23.5919 17.109 23.6027C16.5333 24.0549 15.874 24.3892 15.1689 24.5864C14.4639 24.7837 13.7268 24.84 13 24.7522C14.2688 25.5682 15.7458 26.0014 17.2544 26C22.3603 26 25.1526 21.7702 25.1526 18.1018C25.1526 17.9824 25.1492 17.8616 25.1439 17.7434C25.6874 17.3506 26.1565 16.864 26.5291 16.3065L26.5284 16.3058Z"
                  fill="white"
                />
              </svg>
              <svg
                className={Styles.logo}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M15.8887 15.4451C15.8885 15.8282 15.7362 16.1955 15.4652 16.4662C15.1942 16.7369 14.8267 16.8889 14.4436 16.8887C14.0606 16.8885 13.6933 16.7362 13.4225 16.4652C13.1518 16.1942 12.9998 15.8267 13 15.4436C13.0002 15.0606 13.1525 14.6933 13.4236 14.4225C13.6946 14.1518 14.062 13.9998 14.4451 14C14.8282 14.0002 15.1955 14.1525 15.4662 14.4236C15.7369 14.6946 15.8889 15.062 15.8887 15.4451ZM15.9321 17.9583H13.0433V27H15.9321V17.9583ZM20.4963 17.9583H17.622V27H20.4674V22.2553C20.4674 19.6121 23.9122 19.3665 23.9122 22.2553V27H26.7648V21.2731C26.7648 16.8172 21.6662 16.9833 20.4674 19.1715L20.4963 17.9583Z"
                  fill="white"
                />
              </svg>
              <svg
                width="40"
                className={Styles.logo}
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M24.6929 20.2218C24.6396 19.1986 24.2837 18.2143 23.6704 17.3937C23.4835 17.5949 23.2838 17.7838 23.0724 17.9591C22.423 18.4985 21.6973 18.9388 20.9189 19.2656C21.0275 19.4931 21.1269 19.7135 21.2147 19.9215V19.9234C21.2395 19.9816 21.2633 20.0401 21.2862 20.0989C22.2703 19.9885 23.3077 20.0287 24.3132 20.1646C24.4472 20.1828 24.5732 20.2023 24.6929 20.2218ZM18.5926 15.3793C19.226 16.2719 19.8102 17.1984 20.3424 18.1548C21.1373 17.8415 21.7945 17.4463 22.3236 17.0062C22.5073 16.8549 22.6801 16.6909 22.841 16.5155C21.9056 15.7288 20.7222 15.2983 19.5 15.3C19.1958 15.2998 18.8922 15.3261 18.5926 15.3786V15.3793ZM14.4644 19.198C14.9072 19.1869 15.3495 19.1602 15.7905 19.1181C16.8562 19.0228 17.9129 18.8441 18.9507 18.5838C18.4083 17.6414 17.8227 16.7246 17.1957 15.8362C16.5261 16.168 15.9356 16.6399 15.4643 17.22C14.993 17.8 14.6521 18.4746 14.4644 19.198ZM15.4589 23.7727C15.7111 23.4042 16.0426 22.9895 16.4827 22.5384C17.4278 21.5699 18.5432 20.8159 19.8341 20.3999L19.8744 20.3882C19.7671 20.1516 19.6664 19.9404 19.565 19.7414C18.3716 20.0892 17.1145 20.3063 15.8619 20.4187C15.2509 20.474 14.703 20.498 14.3 20.5019C14.2988 21.6931 14.7084 22.8483 15.4596 23.7727H15.4589ZM21.4532 25.3197C21.2026 24.0557 20.8478 22.8145 20.3924 21.6089C19.0911 22.0814 18.0544 22.7724 17.253 23.5966C16.9295 23.9231 16.6425 24.2838 16.3969 24.6723C17.2931 25.3411 18.3818 25.7016 19.5 25.7C20.1694 25.701 20.8327 25.5723 21.4532 25.321V25.3197ZM22.6707 24.621C23.6855 23.8408 24.3768 22.7137 24.6122 21.4555C24.3912 21.4002 24.1111 21.345 23.803 21.3021C23.118 21.2035 22.4229 21.1962 21.736 21.2806C22.1228 22.3719 22.4351 23.4881 22.6707 24.6216V24.621ZM19.5 27C15.9101 27 13 24.0899 13 20.5C13 16.9101 15.9101 14 19.5 14C23.0899 14 26 16.9101 26 20.5C26 24.0899 23.0899 27 19.5 27Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className={Styles.quicklinks}>
            <div className={Styles.quicklink}>Quick Link</div>
            <div className={Styles.quickoptions}>
              <div className={Styles.home}>Home</div>
              <div className={Styles.aboutus}>About Us</div>
              <div className={Styles.services}>Services</div>
              {/* <div className={Styles.grantservices}>Grant Services</div>
              <div className={Styles.news}>News</div> */}
              <div className={Styles.contact}>Contact</div>
            </div>
          </div>
          <div className={Styles.quicklinks}>
            <div className={Styles.quicklink}>Services</div>
            <div className={Styles.quickoptions}>
              <div className={Styles.home}>Heat Contol</div>
              <div className={Styles.aboutus}>Air Source</div>
              <div className={Styles.services}>Solar Panel</div>
              <div className={Styles.grantservices}>
                Electric Storage Heater
              </div>
              <div className={Styles.news}>Under Floor Insulation</div>
              <div className={Styles.contact}>Boiler Installation</div>
            </div>
          </div>
          <div className={Styles.contacts}>
            <div className={Styles.contactinfo}>Contact Info</div>
            <div className={Styles.options}>
              <div className={Styles.phoneno}>
                <b>phone</b>: +1-234-567-8900
              </div>
              <div className={Styles.fax}>
                <b>Fax</b>: 1(234)567-8900
              </div>
              <div className={Styles.email}>
                <b>Email</b>: info@loremipsum.com
              </div>
              <div className={Styles.locationwrapper}>
                <svg
                  className={Styles.location}
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
                <div className={Styles.area}>
                  1234 A Lorem ipsum street West Covina ,CA 12345,U.S
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.line}></div>
        </div>
        <div className={Styles.lastcontainer}>
          <div className={Styles.lsttxt}>
            2024C All Right Reserved by{" "}
            <span className={Styles.colorchange}>Reform</span>
          </div>
          <div className={Styles.end}>
            <div className={Styles.term}>Terms Of Use | </div>
            <div className={Styles.term}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

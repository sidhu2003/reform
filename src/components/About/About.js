import React from "react";
import styles from "./About.module.css";
import hands from "./hands.svg";
import { IoMdCheckmark } from "react-icons/io";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles["left-container"]}>
        <button className={styles["abt-us"]}>ABOUT US</button>
        <div className={styles.title}>
          We Specialize In Quality Energy Solutions{" "}
        </div>
        <p>
          At Reform, we specialise in delivering quality energy solutions
          tailored to meet your specific needs. Our comprehensive range of
          services includes the installation of advanced renewable heating
          systems such as air source heat pumps, high-efficiency solar panels,
          and premium insulation—all designed to reduce your energy costs and
          enhance your home’s comfort.
        </p>
        <div className={styles.p2}>
          Air source heat pumps are a core part of our eco-friendly offerings,
          providing an efficient way to heat your home by extracting warmth from
          the air outside, even in colder temperatures. Alongside these, we
          offer a variety of other measures aimed at boosting your home’s energy
          efficiency and reducing your carbon footprint.
        </div>
        <div className={styles.p2}>
          We are committed to utilising only the best materials and the latest
          technologies to ensure maximum efficiency and sustainability. Whether
          you're looking to upgrade your current systems or are starting from
          scratch, our team of certified experts is here to guide you every step
          of the way. Trust Reform to power your home more effectively, helping
          you achieve a greener, more cost-effective living environment.
        </div>
        <div className={styles["check-div"]}>
          <IoMdCheckmark className={styles["check-box"]} />
          Outstanding Service
        </div>
        <div className={styles["check-div"]}>
          <IoMdCheckmark className={styles["check-box"]} />
          Professional and experienced Workers
        </div>
        <button className={styles["readmore-btn"]}>READ MORE</button>
      </div>
      <div className={styles["right-container"]}>
        <img
          src={hands}
          alt="Image 1"
          className={styles["right-container__img"]}
        />
      </div>
    </div>
  );
};

export default About;

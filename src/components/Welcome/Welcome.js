import React from "react";
import styles from "./styles.module.css";
import backdrop_img from "./backdrop.png";
import Questions from "./Questions/Questions";

export default function Welcome() {
  return (
    <div className={styles.welcome_page_container}>
      <img src={backdrop_img} alt="backdrop" className={styles.backdrop_img} />
      <div className={styles.left_container}>
        <h1 className={styles.welcome_text}>
          Welcome to{" "}
          <span className={styles.highlight}>REFORM ENERGY SOLUTIONS</span>
        </h1>
        <div className={styles.sub_text}>
          <div className={styles.hr_line}></div>
          <p>
            Reform your energy costs with our expert installations of efficient
            and renewable heating systems, solar panels, and insulation. At
            Reform, we navigate the complexities of UK energy grants to secure
            the best funding and benefits for you. With our expertise, we ensure
            your home is not just comfortable but also economical. Start your
            journey to smarter energy usage with Reform today!
          </p>
        </div>
        <button className={styles.contact_btn}>TALK TO US</button>
        <div className={styles.data}>
          <div className={styles.data_item}>
            12K+
            <span className={styles.data_item_text}>Renovation Project</span>
          </div>
          <div className={styles.data_item}>
            15K+
            <span className={styles.data_item_text}>Project Completed</span>
          </div>
          <div className={styles.data_item}>
            100+
            <span className={styles.data_item_text}>Satisfied Client</span>
          </div>
        </div>
      </div>
      <div className={styles.right_container}>
        <Questions />
      </div>
    </div>
  );
}

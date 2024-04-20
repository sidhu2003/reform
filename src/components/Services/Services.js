import React from "react";
import styles from "./styles.module.css";
import image1 from "./Images/place your image.png";
import image2 from "./Images/place your image (1).png";
import image3 from "./Images/place your image (2).png";
import image4 from "./Images/place your image (3).png";
import image5 from "./Images/place your image (4).png";
import image6 from "./Images/place your image (5).png";

export default function Services() {
  function slide(n) {
    let dot = document.getElementById(`service-dot${n}`);
    document
      .getElementsByClassName(styles.active)[0]
      .classList.remove(styles.active);
    dot.classList.add(styles.active);
    document
      .querySelectorAll("." + styles.service_block)
      .forEach((testimonial) => {
        testimonial.style.transform = `translateX(calc(-${3 * (n - 1)}00% - ${
          (n - 1) * 60
        }px)`;
      });
  }
  return (
    <div className={styles.testimonials_container}>
      <div className={styles.label}>OUR SERVICES</div>
      <h2 className={styles.title}>Our Best Services</h2>
      <div className={styles.services}>
        <div className={styles.service_block}>
          <div className={styles.service}>
            <img src={image1} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Heat Control</div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <img src={image2} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Air Source</div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <img src={image3} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Solar Panel</div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <img src={image4} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>
                  Electric Storage Heater
                </div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <img src={image5} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>Boiler Installation</div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <img src={image6} alt="service" />
            <div className={styles.service_details}>
              <div className={styles.details}>
                <div className={styles.service_title}>
                  Under Floor Insulation
                </div>
                <div className={styles.service_achievement}>
                  2K Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.controller}>
        <div
          id="service-dot1"
          onClick={() => slide(1)}
          className={`${styles.dot} ${styles.active}`}
        ></div>
        <div
          id="service-dot2"
          onClick={() => slide(2)}
          className={styles.dot}
        ></div>
        <div
          id="service-dot3"
          onClick={() => slide(3)}
          className={styles.dot}
        ></div>
      </div>
    </div>
  );
}

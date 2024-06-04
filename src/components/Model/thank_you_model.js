import React from "react";
import styles from "./styles.module.css";

export default function Thank_you_model() {
  function close_model() {
    document.getElementById("thank_you_model").style.display = "none";
  }
  return (
    <div
      onClick={() => close_model()}
      id="thank_you_model"
      className={styles.modal_overlay}
    >
      <div className={styles.model}>
        <div className={styles.title}>
          {/* <div className={styles.col}> */}
          <div>
            <strong>Thank You!</strong>
            <span onClick={() => close_model()} className={styles.close}>
              &times;
            </span>
          </div>
          {/* </div> */}
        </div>
        <hr />
        <div className={styles.content}>
          <p>Your information has been successfully submitted.</p>
          <p>
            One of our experts will review your details and reach out to you
            within 24 hours to discuss the next steps. We look forward to
            helping you with your home improvement grant.
          </p>
        </div>
      </div>
    </div>
  );
}

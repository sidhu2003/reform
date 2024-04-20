import React from "react";
import styles from "./styles.module.css";

export default function Questions() {
  return (
    <div className={styles.question_container}>
      <button className={styles.step_btn}>STEP 02</button>
      <div className={styles.question}>
        Are you or anyone else in your household in receipt of benefits? 
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="yes" name="yes" value="yes" /> YES
        </div>
        <div className={styles.hr_line}></div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="no" name="no" value="no" /> NO
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.options_title}>
          Please select benefits from below: *
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Child Tax Credits
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Child Benefit
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> ESA (Income Related)
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Pensions Savings Credit
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Pension Guarantee Credit
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Working Tax Credit
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Universal Credit
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> JSA (Income Based)
        </div>
        <div className={styles.option}>
          <input type="checkbox" name="option" /> Housing Benefits
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.back_btn}>PREV STEP</button>
        <button className={styles.next_btn}>NEXT STEP</button>
      </div>
    </div>
  );
}

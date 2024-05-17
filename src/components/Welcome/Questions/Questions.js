import React, { useState } from "react";
import styles from "./styles.module.css";
import { questions_list } from "./Questions_list";

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  return (
    <div className={styles.question_container}>
      <button className={styles.step_btn}>
        STEP {currentQuestion < 10 ? "0" + currentQuestion : currentQuestion}
      </button>
      <div className={styles.question}>
        {questions_list[currentQuestion - 1].title}
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input type="radio" id="yes" name="yes/no" value="yes" /> YES
        </div>
        <div className={styles.hr_line}></div>
        <div className={styles.checkbox}>
          <input type="radio" id="no" name="yes/no" value="no" /> NO
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.options_title}>
          Please select benefits from below: *
        </div>
        {questions_list[currentQuestion - 1].options.map((option, index) => {
          return (
            <div className={styles.option} key={index}>
              <input type="checkbox" name="option" /> {option}
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() =>
            setCurrentQuestion((prev) => {
              if (prev > 1) return prev - 1;
              return prev;
            })
          }
          className={styles.back_btn}
        >
          PREV STEP
        </button>
        <button
          className={styles.next_btn}
          onClick={() =>
            setCurrentQuestion((prev) => {
              if (prev < questions_list.length) return prev + 1;
              return prev;
            })
          }
        >
          NEXT STEP
        </button>
      </div>
    </div>
  );
}

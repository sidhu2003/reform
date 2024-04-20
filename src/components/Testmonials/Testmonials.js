import React from "react";
import styles from "./styles.module.css";
import quote from "./quote.png";
import star from "./star.svg";
import user1 from "./user_profile1.png";

export default function Testmonials() {
  function slide(n) {
    let dot = document.getElementById(`dot${n}`);
    document
      .getElementsByClassName(styles.active)[0]
      .classList.remove(styles.active);
    dot.classList.add(styles.active);
    document
      .querySelectorAll("." + styles.testimonial)
      .forEach((testimonial) => {
        testimonial.style.transform = `translateX(calc(-${3 * (n - 1)}00% - ${
          (n - 1) * 60
        }px)`;
      });
  }
  return (
    <div className={styles.testimonials_container}>
      <div className={styles.label}>TESTIMONIALS</div>
      <h2 className={styles.title}>
        What they're saying about our work feedback
      </h2>
      <div className={styles.testimonials} id="testimonials">
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quote}>
            <img src={quote} alt="quote" />
          </div>
          <div className={styles.feedback}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </div>
          <div className={styles.user}>
            <div className={styles.user_img}>
              <img src={user1} alt="user_profile" />
            </div>
            <div className={styles.user_details}>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_position}>Sales Manager, Envato</div>
            </div>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <img src={star} alt="star" />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.controller}>
        <div
          id="dot1"
          onClick={() => slide(1)}
          className={`${styles.dot} ${styles.active}`}
        ></div>
        <div id="dot2" onClick={() => slide(2)} className={styles.dot}></div>
        <div id="dot3" onClick={() => slide(3)} className={styles.dot}></div>
      </div>
    </div>
  );
}

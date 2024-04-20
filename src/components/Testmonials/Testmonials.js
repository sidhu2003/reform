import React, { useState } from "react";
import styles from "./styles.module.css";
import quote from "./quote.png";
import star from "./star.svg";
import user1 from "./user_profile1.png";

export default function Testmonials() {
  const [no_of_testimonials, setNo_of_testimonials] = useState(9);

  function slide(n) {
    let dot = document.getElementById(`dot${n}`);
    document
      .getElementsByClassName(styles.active)[0]
      .classList.remove(styles.active);
    dot.classList.add(styles.active);
    if (window.innerWidth < 550)
      document
        .querySelectorAll("." + styles.testimonial)
        .forEach((testimonial) => {
          testimonial.style.transform = `translateX(calc(-${1 * (n - 1)}00%`;
        });
    else if (window.innerWidth < 900)
      document
        .querySelectorAll("." + styles.testimonial)
        .forEach((testimonial) => {
          testimonial.style.transform = `translateX(calc(-${2 * (n - 1)}00% - ${
            (n - 1) * 40
          }px)`;
        });
    else
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
        {console.log(
          window.innerWidth < 550
            ? no_of_testimonials
            : window.innerWidth < 900
            ? no_of_testimonials / 2
            : no_of_testimonials / 3
        )}
        {[
          ...Array(
            window.innerWidth < 550
              ? no_of_testimonials
              : window.innerWidth < 900
              ? Math.ceil(no_of_testimonials / 2)
              : Math.ceil(no_of_testimonials / 3)
          ),
        ].map((_, i) => (
          <div
            id={`dot${i + 1}`}
            onClick={() => slide(i + 1)}
            className={`${styles.dot} ${i === 0 ? styles.active : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import styles from "./styles.module.css";

export default function Privacy_policy_model() {
  function close_model() {
    document.getElementById("privacy_policy_model").style.display = "none";
  }
  return (
    <div
      id="privacy_policy_model"
      onClick={() => close_model()}
      className={styles.modal_overlay}
    >
      <div className={styles.model}>
        <div className={styles.title}>
          <div className={styles.col}>
            <div>
              <strong>Privacy Policy</strong>
            </div>
            <div className={styles.updated_on}>
              <span> Last Updated: 21st May 2024</span>
            </div>
          </div>
          <br />
          <span onClick={() => close_model()} className={styles.close}>
            &times;
          </span>
        </div>
        <hr />
        <div className={styles.content}>
          Reform ("we", "our", or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and share
          information about you when you visit our website.
          <ol>
            <li>
              <b>Information We Collect</b> We may collect information you
              provide directly to us, such as your name, email address, phone
              number, and other contact details. We also collect information
              automatically, including your IP address, browser type, operating
              system, and browsing behaviour on our site.
            </li>
            <li>
              <b>How We Use Your Information</b> We use the information to:
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>
                  Communicate with you, including responding to your enquiries
                </li>
                <li>Personalise your experience on our site</li>
                <li>Analyse usage and trends to enhance our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </li>
            <li>
              <b>Sharing Your Information</b> We do not share your personal
              information with third parties except:
              <ul>
                <li>With your consent</li>
                <li>For processing payments</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and property</li>
              </ul>
            </li>
            <li>
              <b>Cookies and Tracking Technologies</b> We use cookies and
              similar technologies to collect information about your browsing
              activities. You can control cookies through your browser settings.
            </li>
            <li>
              <b>Data Security</b> We implement security measures to protect
              your information from unauthorised access, use, or disclosure.
              However, no method of transmission over the internet or electronic
              storage is completely secure.
            </li>
            <li>
              <b>Your Rights</b> You have the right to access, correct, or
              delete your personal information. You may also object to the
              processing of your data or request data portability.
            </li>
            <li>
              <b>Third-Party Links</b> Our site may contain links to third-party
              websites. We are not responsible for the privacy practices or
              content of these sites. We encourage you to read their privacy
              policies.
            </li>
            <li>
              <b>Changes to This Policy</b> We may update this Privacy Policy
              from time to time. We will notify you of any changes by posting
              the new policy on our site. Your continued use of the site after
              changes have been posted constitutes your acceptance of the new
              policy.
            </li>
            <li>
              <b>Contact Us</b> If you have any questions or concerns about this
              Privacy Policy, please contact us at:
              <ul>
                <li>
                  Phone: <a href="tel:+442080409083">+44 208 040 9083</a>
                </li>
                <li>
                  Email:{" "}
                  <a href="mailTo:support@reform-group.uk">
                    support@reform-group.uk
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Temple+View,+High+St,+Templecombe+BA8+0JG,+UK/@50.9979328,-2.4206539,17z/data=!3m1!4b1!4m6!3m5!1s0x487237ce1f94da99:0xd27cb75370dc6adc!8m2!3d50.9979295!4d-2.415783!16s%2Fg%2F1th09w_g?entry=ttu"
                    target="_blank"
                  >
                    Templeview, High Street, Templecombe,
                    <br /> Somerset, BA8 0JG
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

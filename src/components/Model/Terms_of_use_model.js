import React from "react";
import styles from "./styles.module.css";

export default function Terms_of_use_model() {
  function close_model() {
    document.getElementById("terms_of_use_model").style.display = "none";
  }
  return (
    <div
      onClick={() => close_model()}
      id="terms_of_use_model"
      className={styles.modal_overlay}
    >
      <div className={styles.model}>
        <div className={styles.title}>
          <div className={styles.col}>
            <div>
              <strong>Terms of Use</strong>
            </div>
            <div className={styles.updated_on}>
              <span> Last Updated: 21st May 2024</span>
            </div>
          </div>
          <span onClick={() => close_model()} className={styles.close}>
            &times;
          </span>
        </div>
        <hr />
        <div className={styles.content}>
          Welcome to Reform. By accessing or using our website, you agree to
          comply with and be bound by the following terms and conditions. Please
          review them carefully.
          <ol>
            <li>
              <b>Acceptance of Terms</b> By using this site, you agree to these
              Terms of Use. If you do not agree, please do not use the site.
            </li>
            <li>
              <b>Modifications</b> Reform reserves the right to modify these
              terms at any time. Changes will be effective immediately upon
              posting. Continued use of the site after changes indicates
              acceptance of the new terms.
            </li>
            <li>
              <b>Use of the Site</b> You agree to use the site for lawful
              purposes only. You may not use the site in any way that could
              damage, disable, overburden, or impair it.
            </li>
            <li>
              <b>Intellectual Property</b> All content on this site, including
              text, graphics, logos, and images, is the property of Reform and
              protected by intellectual property laws. Unauthorized use is
              prohibited.
            </li>
            <li>
              <b>User Conduct</b> Users must not engage in any activity that is
              harmful, fraudulent, or illegal. This includes, but is not limited
              to, transmitting viruses, spam, or malicious software.
            </li>
            <li>
              <b>Privacy Policy</b> Our use of your personal information is
              governed by our Privacy Policy. By using the site, you consent to
              our collection and use of information as described in the Privacy
              Policy.
            </li>
            <li>
              <b>Third-Party Links</b> This site may contain links to
              third-party websites. Reform is not responsible for the content or
              practices of these sites. Access them at your own risk.
            </li>
            <li>
              <b>Disclaimer of Warranties</b> The site is provided "as is"
              without warranties of any kind. Reform does not guarantee the
              accuracy, completeness, or reliability of any content.
            </li>
            <li>
              <b>Limitation of Liability</b> Reform will not be liable for any
              damages arising from the use or inability to use the site,
              including but not limited to direct, indirect, incidental,
              punitive, and consequential damages.
            </li>
            <li>
              <b>Indemnification</b> You agree to indemnify and hold harmless
              Reform, its affiliates, and its employees from any claims, losses,
              or damages arising from your use of the site.
            </li>
            <li>
              <b>Governing Law</b> These terms will be governed by and construed
              in accordance with the laws of [Your Country/State], without
              regard to its conflict of law principles.
            </li>
            <li>
              <b>Contact Information</b> For any questions or concerns about
              these Terms of Use, please contact us at:
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

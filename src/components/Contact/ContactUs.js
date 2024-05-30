import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoToggle } from "react-icons/io5";
import { PiToggleLeftFill } from "react-icons/pi";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [toggleOn, setToggleOn] = useState(false);
  const [showToggleMessage, setShowToggleMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [highlightToggle, setHighlightToggle] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleToggle = () => {
    setToggleOn(!toggleOn);
    setShowToggleMessage(false);
  };

  const handleSubmit = () => {
    if (firstName && email && toggleOn) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        toggleOn: toggleOn,
      };
      console.log(JSON.stringify(formData));
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setToggleOn(false);
      setHighlightToggle(false);
    } else {
      if (!toggleOn) {
        setHighlightToggle(true);
        setShowToggleMessage(true);
        alert("Please toggle the Terms and Conditions!");
      } else {
        console.log("Validation failed. Please fill in all required fields.");
      }
    }
  };

  return (
    <div className={styles.contactus}>
      <div className={styles.leftContact}>
        <div className={styles.contactTitle}>Contact Us</div>
        <p>
          We are here to assist you with any inquiries or support you may need.
          Our team is dedicated to providing exceptional service and prompt
          responses. Whether you have a question about our services, need
          technical assistance, or want to learn more about how we can help you
          achieve your goals, please don't hesitate to reach out. We look
          forward to connecting with you and helping you succeed.
        </p>
        <div className={styles.details}>
          <a href="tel:+442080409083" className={styles.center}>
            <IoCallOutline className={styles.contactIcon} />
            +44 208 040 9083
          </a>
          <a href="mailTo:support@reform-group.uk" className={styles.center}>
            <MdOutlineEmail className={styles.contactIcon} />
            support@reform-group.uk
          </a>
          <a
            href="https://www.google.com/maps/place/Temple+View,+High+St,+Templecombe+BA8+0JG,+UK/@50.9979328,-2.4206539,17z/data=!3m1!4b1!4m6!3m5!1s0x487237ce1f94da99:0xd27cb75370dc6adc!8m2!3d50.9979295!4d-2.415783!16s%2Fg%2F1th09w_g?entry=ttu"
            target="_blank"
            className={styles.center}
          >
            <HiOutlineLocationMarker className={styles.contactIcon} />
            Templeview, High Street, Templecombe,
            <br /> Somerset, BA8 0JG
          </a>
        </div>
      </div>
      <div className={styles.rightContact}>
        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            className={styles.inputField}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className={styles.inputField}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone No"
          value={phone}
          onChange={handlePhoneChange}
          className={styles.inputField}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          className={styles.textareaInput}
        ></textarea>
        <div className={styles.row2}>
          {/* {toggleOn ? (
            <IoToggle className={styles.toggleon} onClick={handleToggle} />
          ) : (
            <PiToggleLeftFill
              className={`${styles.toggleon} ${
                highlightToggle ? styles.highlight : ""
              }`}
              onClick={handleToggle}
            />
          )} */}
          <div className={styles.agree}>
            <input type="checkbox" id="i-agree" />I agree to the Terms and
            Conditions of this Website
          </div>
          <button
            className={`${styles.submitBtn} ${
              !toggleOn ? styles.disabled : ""
            }`}
            onClick={handleSubmit}
            disabled={!toggleOn}
          >
            SUBMIT
          </button>
          {showToggleMessage && (
            <p className={styles.toggleMessage}>
              Please toggle the Terms and Conditions
            </p>
          )}
        </div>
        {submitted && (
          <p
            className={styles.submitSuccessMessage}
            role="img"
            aria-label="success"
          >
            &#x1F389; Form submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

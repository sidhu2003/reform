import React, { useRef } from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";
import Testmonials from "../../components/Testmonials/Testmonials";
import Services from "../../components/Services/Services";
import ContactUs from "../../components/Contact/ContactUs";
import About from "../../components/About/About";
import Blogs from "../../components/Blog/Blogs";
import styles from "../../components/Header/styles.module.css";
import Partner from "../../components/Partner/Partner";
import Footer from "../../components/Footer/Footer";
import New_footer from "../../components/Footer/New_footer";

export default function Home() {
  const scroll = useRef(null);

  const handleScroll = () => {
    if (scroll.current) {
      const { scrollTop, scrollLeft } = scroll.current;
      if (scrollTop > 1000) {
        document.getElementById("header").classList.add(styles.header_scroll);
      } else {
        document
          .getElementById("header")
          .classList.remove(styles.header_scroll);
      }
    }
  };

  return (
    <div>
      <Header />
      <div
        ref={scroll}
        id="container"
        onScroll={handleScroll}
        style={{
          marginTop: "100px",
          height: "calc(100vh - 100px",
          overflow: "scroll",
        }}
      >
        <section id="welcome">
          <Welcome />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="blog">
          <Blogs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testmonials />
        </section>
        <Partner />
        <section id="contact">
          <ContactUs />
        </section>
        <New_footer />
      </div>
    </div>
  );
}

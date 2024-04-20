import React from "react";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";
import Testmonials from "../../components/Testmonials/Testmonials";
import Services from "../../components/Services/Services";
import ContactUs from "../../components/Contact/ContactUs";
import About from "../../components/About/About";
import Blogs from "../../components/Blog/Blogs";

export default function Home() {
  return (
    <div>
      <Header />
      <div
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
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
}

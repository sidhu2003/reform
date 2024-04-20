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
      <Welcome />
      <About />
      <Blogs />
      <Services />
      <Testmonials />
      <ContactUs />
    </div>
  );
}

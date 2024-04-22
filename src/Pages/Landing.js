import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Roadmap from "../sections/Roadmap";
import Showcase from "../sections/Showcase";
import Faq from "../sections/Faq";
import Footer from "../sections/footer";
export default function Landing() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Roadmap />
      <Showcase />
      <Faq />
      <Footer />
    </>
  );
}

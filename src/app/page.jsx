import React from "react";


import { Footer } from "./components";


import Hero from "./pages/Hero";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Testimonial from "./pages/testimonial";
import ContactForm from "./pages/contact-form";


export default function Home() {
  return (
    <div className="font-sans gap-2">
      <Hero />
      <Skills />
      <Projects />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}

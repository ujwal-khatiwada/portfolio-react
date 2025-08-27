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
      <h1 className="text-3xl font-bold text-center mt-6 mb-1 text-[var(--foreground)]">
        Contact me
      </h1>
      <p className="text-center mb-3 text-[var(--foreground)]">
        don't
      </p>
      <ContactForm />
      <Footer />
      {/* <UsersPage /> */}
    </div>
  );

}

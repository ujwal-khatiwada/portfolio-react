import React from 'react'
import { Footer, Navbar } from "../components";
import ContactForm from '../pages/contact-form';

const ContactPage = () => {
  return (
    <div className=" min-h-[100dvh] flex flex-col justify-between">
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default ContactPage
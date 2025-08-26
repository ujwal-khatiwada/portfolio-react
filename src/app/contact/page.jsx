import React from 'react'
import { Footer, Navbar } from "../components";
import ContactForm from '../pages/contact-form';

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default ContactPage
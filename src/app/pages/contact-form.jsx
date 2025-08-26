"use client";
import React from 'react'
import ContactFormComp from '../components/contact-form'
import { SessionProvider } from 'next-auth/react'

const ContactForm = ({session}) => {
  return (
    <div>
      <SessionProvider session={session}>
        <ContactFormComp />
      </SessionProvider>
    </div>
  )
}

export default ContactForm
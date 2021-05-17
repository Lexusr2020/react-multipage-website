import React from 'react'
import './Contact.css'
import ContactBody from './ContactComponents/ContactBody'
import ContactForm from './ContactComponents/ContactForm'
import Footer from './FooterComponents/Footer'


export default function Contact() {
  return (
    <>
      <div className="Contact">
      <ContactBody/>
      <ContactForm/>
      </div>
      <Footer/>
     </>
  )
}
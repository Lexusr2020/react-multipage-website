
import React from 'react'
import '../FooterComponents/Footer.css'
import Card from '../FooterComponents/Card'
import Button from 'react-bootstrap/Button'


export default function Footer() {
  return (
    <>
    <div className="Footer">
    
      
      <Card pic="Card Pic1"/> 
      <Card pic="Card Pic2"/> 
      <Card pic="Card Pic3"/> 
      <Card pic="Card Pic4"/>
      
     
      


      </div>
      <div id="cardHolder">
      
      <Button variant="info" active href="/contact"  >Get in touch</Button>
      <p style={{marginTop:'1rem'}}>&copy; 2021 cryptoLEAD</p>
      
    </div>
    
    
    
    </>
  )
}

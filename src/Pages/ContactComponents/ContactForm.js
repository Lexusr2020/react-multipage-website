import React from 'react'
import './ContactForm.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
    return (
        <div className="ContactForm">
          <div id="FormContainer"> 
            <Form style={{zIndex:'2', width:'50%', marginLeft:'25%', marginTop:'2%'}}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{color:'whitesmoke', fontWeight:'500', fontSize:'120%'}} >Please enter your email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label style={{color:'whitesmoke'}}> Please type your inquiry below</Form.Label>
          
              </Form.Group>
           
              <Form.Group controlId="exampleForm.ControlTextarea1" >
               
                <Form.Control as="textarea" rows={3} style={{height:'10%'}} />
              </Form.Group>
              <Button variant="primary" type="submit" style={{marginTop:'1%'}}>
                Submit
              </Button>
            </Form>
            </div>
        </div>
    )
}

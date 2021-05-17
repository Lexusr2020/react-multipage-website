import React from 'react'
import '../ContactComponents/ContactHeader.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img6 from '../../images/bkgs/Network.jpg'
import img7 from '../../images/bkgs/inquiries.jpg'
import img8 from '../../images/bkgs/FAQs.jpg'

export default function ContactHeader() {
    return (
        <>
        <div className="ContactHeader">
            <div id="ContentContainder">
            <CardDeck style={{zIndex:'2', display:'inline-flex', background:'transparent', marginTop:'3%'}}>
                <Card style={{width:'25%', height:'30rem', marginLeft:'6%', backgroundColor:'rgba(245, 245, 245, 0.74)', borderRadius:'40px'}}>
                    <Card.Img variant="top" src={img6} style={{width:'80%', marginLeft:'10%', marginTop:'10%', borderRadius:'40px'}} />
                    <Card.Body>
                    <Card.Title>Want to Join the LEAD Network?</Card.Title>
                    <Card.Text>
                        Speak with a member of our sales team.
                    </Card.Text>
                    </Card.Body>
                    <Button variant="primary" active href="/network" style={{zIndex:'2', marginBottom:'10%', width:'100%'}} >Contact Sales</Button>
                </Card>
                <Card style={{width:'25%', height:'30rem', marginLeft:'6%', backgroundColor:'rgba(245, 245, 245, 0.74)', borderRadius:'40px'}}>
                <Card.Img variant="top" src={img7} style={{width:'80%', marginLeft:'10%', marginTop:'10%', borderRadius:'40px'}} />
                    <Card.Body>
                    <Card.Title>Have Press Inquiries?</Card.Title>
                    <Card.Text>
                        Contact us with press requests.
                    </Card.Text>
                    </Card.Body>
                    <Button variant="primary" active href="/network" style={{zIndex:'2', marginBottom:'10%', width:'100%'}} >Contact Press</Button>
                </Card>
                <Card style={{width:'25%', height:'30rem', marginLeft:'6%', backgroundColor:'rgba(245, 245, 245, 0.74)', borderRadius:'40px'}}>
                <Card.Img variant="top" src={img8} style={{width:'80%', marginLeft:'10%', marginTop:'10%', borderRadius:'40px'}} />
                    <Card.Body>
                    <Card.Title>Questions about cryptoLEAD?</Card.Title>
                    <Card.Text>
                        For the fastest answers, check our FAQs.
                    </Card.Text>
                    </Card.Body>
                    <Button variant="primary" active href="/network" style={{zIndex:'2', marginBottom:'10%', width:'100%'}} >See all FAQs</Button>
                </Card>
                </CardDeck>
                </div>   
        </div>
        </>
    )
}

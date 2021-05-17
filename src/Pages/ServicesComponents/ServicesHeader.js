import React from 'react'
import './ServicesHeader.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img4 from '../../images/logo/cryptoLEAD3.png'

export default function ServicesHeader() {
    return (
        <>
        <div className="ServicesHeader">
            <Card style={{ width: '65%', zIndex:'2', height:'40vh', backgroundColor:'transparent',marginTop:'8%', alignItems:'left', border:'hidden' }}>
                <Card.Body style={{zIndex:'2'}}>
                    <Card.Title style={{ color:'whitesmoke', zIndex:'2'}}>The Financial Network of the Future</Card.Title>
                    <Card.Text style={{color:'whitesmoke'}}>
                    Easily run a high-performance global payments business.
                    </Card.Text>
                    <Button variant="primary" active href="/network" style={{zIndex:'2'}} >Join the LEAD Network</Button>
                </Card.Body>
                </Card>
                <Card.Img variant="top" src={img4} style={{ width: '35%', height:'48%', float:'left', borderRadius:'15px', zIndex:'1', marginTop:'6%', marginRight:'9%'}} />
        </div>
       
        </>
    )
}

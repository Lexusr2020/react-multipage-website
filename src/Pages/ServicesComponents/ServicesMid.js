import React from 'react'
import './ServicesMid.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default function ServicesMid() {
    return (
        <>
        <div className="ServicesMid">
            <CardDeck style={{width:'30%', marginLeft:'35%', backgroundColor:'transparent', zIndex:'2'}}>
                <Card style={{float:'left', backgroundColor:'transparent', border:'hidden'}}>
                    <Card.Body style={{float:'left'}}>
                    <Card.Title style={{fontSize:'30px', color:'whitesmoke'}}>Superior Customer Experience</Card.Title>
                    <Card.Text style={{color:'whitesmoke'}}>
                        Improve loyalty for your business by offering the best-in-market payments experience to your customers.
                    </Card.Text>
                    </Card.Body>
 
                </Card>
                <Card style={{float:'left', backgroundColor:'transparent', border:'hidden'}}>
                    <Card.Body style={{float:'left', backgroundColor:'transparent'}}>
                    <Card.Title style={{fontSize:'30px', color:'whitesmoke'}}>Modern Infrastructure</Card.Title>
                    <Card.Text style={{color:'whitesmoke'}}>
                        Leverage cutting-edge blockchain technology to streamline payments services and reduce costs.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{float:'left', backgroundColor:'transparent', border:'hidden'}}>
                    <Card.Body style={{float:'left', backgroundColor:'transparent'}}>
                    <Card.Title style={{fontSize:'30px', color:'whitesmoke'}}>Unique Liquidity Solutions</Card.Title>
                    <Card.Text style={{color:'whitesmoke'}}>
                        Eliminate pre-funding and free working capital with On-Demand Liquidity.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>

        </div>
    
        </>
    )
}

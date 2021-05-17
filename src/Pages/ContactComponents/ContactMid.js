import React from 'react'
import '../ContactComponents/ContactMid.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ContactMid() {
    return (
        <>
        <div className="ContactMid">
            <div id="MidContent">
            <Card className="text-center" style={{zIndex:'3', height:'98%', paddingTop:'3%', backgroundColor:'transparent', border:'hidden'}}>
            <Card.Title>Additional Resources</Card.Title>
                <Card.Body>
                <Button variant="link">Careers at cryptoLEAD</Button>
                    <Card.Text>
                    Help us build the Internet of Value.
                    </Card.Text>
                    <Button variant="link">LEAD Ledger</Button>
                    <Card.Text>
                    Learn more about XRP’s open source technology.
                    </Card.Text>
                    <Button variant="link">Content Library</Button>
                    <Card.Text>
                    See the latest reports, videos, case studies and more.
                    </Card.Text>

                    
                </Card.Body>
                </Card>
            </div>   
        </div>
        </>
    )
}

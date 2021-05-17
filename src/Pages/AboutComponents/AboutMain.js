import React from 'react'
import '../AboutComponents/AboutMain.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../../images/logo/crptoLEAD.png'



export default function AboutMain() {
    return (
        <>
        <div className="AboutMain">
        <Card style={{ width: '60%', display:'inline', height:'48vh', marginTop:'3%',  marginLeft:'20%', zIndex:'2', backgroundColor:'whitesmoke' }}>
            <Card.Img variant="top" src={img} style={{ width:'100px'}} />
            <Card.Body>
                <Card.Title>Download the Future of CBDC report.</Card.Title>
                <Card.Text>
                CBDCS will play a critical role in the new, modern global financial infrastructure blockchain technologies will undoubtedly underpin. cryptLEAD’s new report provides Central Banks with the framework for implementing CBDCs and guidance for ensuring global interoperability—the cornerstone of success for CBDCs.
                </Card.Text>
                <Button variant="primary" active href="/skills" style={{marginTop:'1rem'}} >Go somewhere</Button>
             
            </Card.Body>
            </Card>
        </div>
        <div id="iFrame">
        <iframe width="560" height="315"  src="https://www.youtube.com/embed/RplnSVTzvnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius:'20px', border:'1px solid white'}}></iframe>
        </div>
        
            
        </>
    )
}

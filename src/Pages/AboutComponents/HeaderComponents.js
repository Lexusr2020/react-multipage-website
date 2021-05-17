import React from 'react'
import '../AboutComponents/HeaderComponents.css'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import img1 from '../../images/bkgs/redLaptop.jpg'
import img2 from '../../images/bkgs/diffAproach.jpg'
import img3 from '../../images/bkgs/security.jpg'


export default function HeaderComponents() {
    return (
        <div className="HeaderConponents">
            <CardGroup style={{height:'55vh', width:'100%'}} >
                <Card style={{backgroundColor:'rgb(4, 36, 61)', borderRadius:'0', border:'hidden'}}>
                    <Card.Img variant="top" src={img1} style={{marginLeft:'21%' , width:'55%', borderRadius:'20%', height:'40%', backgroundSize:'cover'}} />
                    <Card.Body>
                    <Card.Title style={{color:'whitesmoke'}}>A New Era of Finance</Card.Title>
                    <Card.Text style={{color:'whitesmoke', fontSize:'13px'}}>
                    cryptoLEAD's open source developer platform enables developers and entrepreneurs to build real-world payment solutions on the LEAD Ledger.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor:'rgb(4, 36, 61)', borderRadius:'0', border:'hidden'}}>
                <Card.Img variant="top" src={img2}style={{marginLeft:'21%' , width:'60%', borderRadius:'20%', height:'40%', backgroundSize:'cover'}} />
                    <Card.Body>
                    <Card.Title style={{color:'whitesmoke'}}>Taking a different Approach</Card.Title>
                    <Card.Text style={{color:'whitesmoke', fontSize:'13px'}}>
                    With the most advanced blockchain technology for global payments, financial institutions are able to expand into new markets around the world and even eliminate pre-funding by leveraging the power of LEAD through the blockchain On-Demand Liquidity service.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor:'rgb(4, 36, 61)', borderRadius:'0', border:'hidden'}}>
                <Card.Img variant="top" src={img3} style={{marginLeft:'21%' , width:'60%', borderRadius:'20%', height:'40%', backgroundSize:'cover'}} />
                    <Card.Body>
                    <Card.Title style={{color:'whitesmoke'}}>Enabling the Internet of Value</Card.Title>
                    <Card.Text style={{color:'whitesmoke', fontSize:'13px'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi perspiciatis esse debitis, dolorum officia in voluptatibus sapiente ducimus omnis ea, itaque dicta voluptates quod? Minus voluptatum soluta iusto quis fuga.
                    </Card.Text>
                    </Card.Body>
                </Card>
    </CardGroup>
            
        </div>
    )
}

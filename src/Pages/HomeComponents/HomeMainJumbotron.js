import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'


export default function HomeMainJumbotron() {
    return (
        <>
        <div className="HomeMainJumbotron">
            
        <Jumbotron fluid id="jumbo" 
            style={{marginTop: '10px'}}>
            <Container id="container">
                <h1 style={{ fontSize: '35px', marginTop:'20px', color:'darkslategray'}}  >Blockchain Redefined </h1>
                <div></div>
                <div></div>
                <div></div>
                <h7 style={{ marginTop: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis officia accusamus veritatis alias amet culpa? Rerum, et, quod tempora iusto molestias nostrum harum nobis veniam suscipit incidunt sequi ullam?. Nulla blanditiis officia accusamus veritatis alias amet culpa? Rerum, et, quod tempora iusto molestias nostrum harum nobis veniam suscipit incidunt sequi ullam?.
                </h7>
            </Container>
        </Jumbotron>
        </div>
        </>
    )
}

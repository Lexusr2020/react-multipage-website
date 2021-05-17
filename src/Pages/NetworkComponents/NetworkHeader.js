import React from 'react'
import './NetworkHeader.css'
import Image from 'react-bootstrap/Image'
import img9 from '../../images/bkgs/underConstruction.jpg'

export default function NetworkHeader() {
    return (
        <>
        <div className="NetworkHeader">
        <div id="Content">
        <h1>We're working on it</h1>
        <h5>Please check back later</h5>
        </div>  
        </div>
        <Image src={img9} fluid style={{zIndex:'2', width:'80%'}}/>
        </>
    )
}

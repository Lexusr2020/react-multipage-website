import React from 'react'
import './ServicesMain.css'
import img5 from '../../images/bkgs/r-rn-map-2020.png'

export default function ServicesMain() {
    return (
        <div className="ServicesMain">
            <div id="Title">
                <h1>Get the LEAD Advantage</h1>
                <p>Across 55+ Countries and 120+ Currency Pairs</p>
            </div>
            <img src={img5} alt="" style={{zIndex:'1', width:'60%', height:'80%'}} />
            
        </div>
    )
}

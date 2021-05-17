import React from 'react'
import ServicesHeader from './ServicesHeader'
import ServicesMain from './ServicesMain'
import ServicesMid from './ServicesMid'
import ServicesTitle from './ServicesTitle'




export default function ServicesBody() {
    return (
        <>
        <div className="ServicesBody">
        <ServicesTitle/>
        <ServicesHeader/>
        <ServicesMain/>
        <ServicesMid/>


        </div>
        </>
    )
}

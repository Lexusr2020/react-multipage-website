import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderComponents from './HeaderComponents'
import AboutMain from './AboutMain'

export default function AboutBody() {
    return (
        <>
        <div className="AboutBody">
        <HeaderTitle/>
        <HeaderComponents/>
        <AboutMain/>  
        </div>
        </>
    )
}

import React from 'react'
import './Home.css'
import '../Pages/HomeComponents/HomeHeader.css'
import HomeHeader from '../Pages/HomeComponents/HomeHeader'
import HomeMain from './HomeComponents/HomeMain'
import Button from 'react-bootstrap/Button'
import Footer from './FooterComponents/Footer'


export default function Home() {
  return (
    <>
      <div className="Home">
        
        <HomeHeader/>

        <HomeMain/>
        <div className="EmptyBlock">
            <Button variant="primary" size="md" active href="/about"  style={{marginTop: '120px'}}>
            Click to learn more
            </Button>
        </div>
        <div className="EmptyBlock">
        </div>
        
        

      <Footer/>
      </div>
    </>
  )
}
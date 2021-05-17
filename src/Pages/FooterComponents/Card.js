import React from 'react'
import '../FooterComponents/Card.css'
import CardTitle from '../FooterComponents/CardTitle'
import CardText from '../FooterComponents/CardText'


export default function Card(props) {
    return (
        <>
        <div className={props.pic}>
        <CardText desc={props.desc} />
        <CardTitle text={props.text} />
        
      </div>
      </>
    )
}

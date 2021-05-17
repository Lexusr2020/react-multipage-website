import React from 'react'
import'../FooterComponents/CardText'

export default function CardText(props) {
    return (
        <>
    <p className="CardText">
      {props.desc}
    </p>
    </>
    )
}

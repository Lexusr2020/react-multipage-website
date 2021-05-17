import React from 'react'
import ContactHeader from './ContactHeader'
import ContactMid from './ContactMid'
import ContactTitle from './ContactTitle'

export default function ContactBody() {
    return (
        <div className="ContactBody">
            <ContactTitle/>
            <ContactHeader/>
            <ContactMid/>

        </div>
    )
}

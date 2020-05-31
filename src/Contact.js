import React from 'react'
import './Contact.css'


function Contact() {
    return (
        <li>
            <div className='contact__info'>
                <img src='images/man.svg' className='contact__image' />
                <div className='contact__name'><p>Some man</p></div>
            </div>
        </li>
    )
}

export default Contact
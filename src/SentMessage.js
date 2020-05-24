import React from 'react'
import './SentMessage.css'

function SentMessage({text}) {
    return (
        <div className='message'>
            <span className='textOfMesssage'>
                <p>{text}</p>
            </span>
        </div>
    )
}

export default SentMessage

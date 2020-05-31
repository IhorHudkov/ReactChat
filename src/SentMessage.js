import React from 'react'
import './SentMessage.css'

function SentMessage({text, flag}) {

    let style = {message: '', textOfMessage: ''}

    if (!flag.includes('Other')){
        style.message = 'myMessage'
        style.textOfMessage = 'textOfMessage'
    }else{
        style.message = 'messageFromOther'
        style.textOfMessage ='textOfMessageFromOther'
    }

    return (
        <div className={style.message}>
            <span className={style.textOfMessage}>
                <p>{text}</p>
            </span>
        </div>
    )
}

export default SentMessage

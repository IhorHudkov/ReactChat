import React, {useState} from 'react'
import './InputForMessage.css'

function InputForMesssage() {

    const [myMessage, setMyMessage] = useState('')

    return (
       
            <form>
                <textarea maxLength='255' rows='3' placeholder='Type your message here...'></textarea>
                <button type='submit'>Send</button>
            </form>
       
    )
}

export default InputForMesssage
import React, {useState} from 'react'
import './InputForMessage.css'
import './ListOfMessages.css'


function InputForMessage({onToggle}) {

    const [myMessage, setMyMessage] = useState('')
   

    function onSubmit(event){
        event.preventDefault()
        if (myMessage.trim()) {
            onToggle(myMessage)
        }
        setMyMessage('')
    }
     
    return (
       
            <form onSubmit={onSubmit}>
                <textarea maxLength='255' rows='3' placeholder='Type your message here...' value={myMessage} onChange={(event)=>{setMyMessage(event.target.value)}}></textarea>
                <button type='submit'>Send</button>
            </form>
       
    )
}

export default InputForMessage
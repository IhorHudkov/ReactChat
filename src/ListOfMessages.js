import React from 'react'
import SentMessage from './SentMessage'
import './ListOfMessages.css'


function ListOfMessages()
{
    return(
        <div className='list-of-messages'>
            <SentMessage></SentMessage>
            <p>1</p>
            <SentMessage></SentMessage>
            <p>2</p>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>
            <SentMessage></SentMessage>

        
        </div>
    )
}

export default ListOfMessages
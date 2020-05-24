import React from 'react'
import SentMessage from './SentMessage'
import App from './App'
import './ListOfMessages.css'



function ListOfMessages({redrawList})
{
    return(
        <div className='list-of-messages'>

            {redrawList().map(message =>{
                return(<SentMessage text={message}></SentMessage>)
            })}
            
                    
        </div>
    )
}

export default ListOfMessages
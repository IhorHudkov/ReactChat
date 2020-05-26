import React from 'react'
import SentMessage from './SentMessage'
import './ListOfMessages.css'



class ListOfMessages extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        
    }

    componentDidUpdate(){
        this.ref.current.scrollTop = this.ref.current.scrollHeight
    } 

    render() {
        return (
            <div className='wrapper-for-list-of-messages' >
                <div className='list-of-messages' ref={this.ref}>
                    {this.props.redrawList().map(message => {
                        return (<SentMessage text={message}></SentMessage>)
                    })}
                </div>
            </div>
        )
    }
}

export default ListOfMessages
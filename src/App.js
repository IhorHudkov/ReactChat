import React, {useState} from 'react';
import ListOfContacts from './ListOfContacts';
import InputForMessage from './InputForMessage';
import ListOfMessages from './ListOfMessages';


function App() {

  let [arrOfMessages, setArrOfMessages] = useState([])

  function onToggleHandler(textOfMessage){
    setArrOfMessages(arrOfMessages.concat(textOfMessage))
  }

  function returnNewArrOfMessages(){
      return arrOfMessages
  }

  return (
    <div className='main-wrapper'>
      <header></header>
      <div className='wrapper'>
        <aside>
          <div className='search-contact'>
            <input type='search'></input>
            <button>Search</button>
          </div>
          <ListOfContacts></ListOfContacts>
        </aside>
        <main>
          <div className='main'>
            <InputForMessage onToggle={onToggleHandler}></InputForMessage>
            <ListOfMessages redrawList={returnNewArrOfMessages}></ListOfMessages>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;

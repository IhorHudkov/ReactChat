import React from 'react';
import ListOfContacts from './ListOfContacts';
import InputForMessage from './InputForMessage';
import ListOfMessages from './ListOfMessages';


function App() {
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
            <InputForMessage></InputForMessage>
            <ListOfMessages></ListOfMessages>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;

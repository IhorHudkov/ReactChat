import React, { useState } from 'react';
import ListOfContacts from './ListOfContacts';
import InputForMessage from './InputForMessage';
import ListOfMessages from './ListOfMessages';
import L from 'leaflet';


function App() {

  let [arrOfMessages, setArrOfMessages] = useState([])
  let [mapState, setMapState] = useState({
    map: undefined,
    latitude: undefined,
    longitude: undefined,
    isMapObjectExist: false
  })

  function onToggleHandler(textOfMessage) {
    const newMessage = { textOfMessage, id: Date.now(), flag: 'myMessage' }
    setArrOfMessages(arrOfMessages.concat(newMessage))
  }

  //Next function for future use
  function addNewMessageFromOtherSide(textOfMessage) {
    const newMessage = { textOfMessage, id: Date.now(), flag: 'messageFromOther' }
    setArrOfMessages(arrOfMessages.concat(newMessage))
  }

  function returnNewArrOfMessages() {
    return arrOfMessages
  }



  function closureForShowMap() {
    let counter = 0
    
    return function () {

      const mapElement = document.getElementById('map')
      const mapButtonElement = document.getElementById('map_btn')


      if (counter % 2 === 0) {
        mapElement.style.zIndex = 5
        mapButtonElement.setAttribute('src', 'images/back_white.svg')
      } else {
        mapElement.style.zIndex = 0
        mapButtonElement.setAttribute('src', 'images/map_white.svg')
      }


      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        mapState.map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapState.map);

        L.marker([latitude, longitude]).addTo(mapState.map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();

        setMapState(mapState)

      }
      if (!mapState.map){
        navigator.geolocation.getCurrentPosition(success);
      }
        
      counter++
    }
  }

  const showMap = closureForShowMap()

  return (
    <div className='main-wrapper'>

      <header>
        <div className='header__inner'>
          <button className='menu__btn'></button>
          <img src='images/geo_chat_logo.png' height='50px' />
          <img src='images/map_white.svg' id='map_btn' height='40px' onClick={showMap} />
        </div>
      </header>

      <div className='wrapper'>
        <aside>
          <div className='search-contact'>
            <input type='search'></input>
            <button>Search</button>
          </div>
          <ListOfContacts></ListOfContacts>
        </aside>
        <main>
          <div id="map"></div>
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



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
//import { useNavigate } from "react-router-dom";
import SongList from './Songlist.jsx';
import BandInfo from './Intro';
import Form from './form.jsx';
import './App.css';


export default function App() {
  const [showing,setshow] = useState(false);
  //const showing = false

  const showSongs = (e) => {
    e.preventDefault();
    setshow(!showing)
    if (showing){
      //div.classList.toggle("visible");
      const songs = ReactDOM.createRoot(document.getElementById('songlist'));
      songs.render(<SongList/>);
    }
  }
  return (
    <>
      <BandInfo />
      <button onClick = {showSongs}>Show Songs</button>
      <div id ="songlist"></div>
      <Form />
    </>
  )
}

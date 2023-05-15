

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
//import { useNavigate } from "react-router-dom";
import SongList from './Songlist.jsx';
import BandInfo from './Intro';
import './App.css'

export default function App() {
  const [showing,setshow] = useState(false);
  //const showing = false

  const showSongs = (e) => {
    e.preventDefault();
    setshow(!showing)
    if (showing ){
      const songs = ReactDOM.createRoot(document.getElementById('songlist'));
      songs.render(<SongList/>);
    }else{
      //document.getElementById("songlist").remove()
    }
  }
  return (
    <>
      <BandInfo />
      <button onClick = {showSongs}>Show Songs</button>
      <div id ="songlist">

      </div>
    </>
  )
}

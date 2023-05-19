

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
//import { useNavigate, useParams } from "react-router-dom";
import {SongList} from '../';
import './style.css'

export default function ShowSongs() {
  const [showing,setshow] = useState(false);

  const showSongs = (e) => {
    e.preventDefault();
    setshow(!showing)
    if (showing){
      //const songs = ReactDOM.createRoot(document.getElementById('songlist'));
      document.getElementById('btn').style.visibility = "hidden";
      document.getElementById('songlist').style.visibility= "visible";
    }
  }
  return(
    <> 
        <button id = "btn" onClick = {showSongs}>Show Songs</button>
         <div id ="songlist">
          <SongList />
         </div>
    </>
   
  )
}

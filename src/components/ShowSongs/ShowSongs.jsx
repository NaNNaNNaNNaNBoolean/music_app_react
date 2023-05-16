

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
//import { useNavigate } from "react-router-dom";
import {SongList} from '../';


export default function ShowSongs() {
  const [showing,setshow] = useState(false);
  //const showing = false

  const showSongs = (e) => {
    e.preventDefault();
    setshow(!showing)
    if (showing){
      //div.classList.toggle("visible");
      const songs = ReactDOM.createRoot(document.getElementById('songlist'));
      document.getElementById('btn').style.display = "none";
      songs.render(<SongList/>);
    }
  }
  return(
    <> 
        <button id = "btn" onClick = {showSongs}>Show Songs</button>
         <div id ="songlist"></div>
    </>
   
  )
}

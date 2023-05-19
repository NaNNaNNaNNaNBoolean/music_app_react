//////////////////////////////////////////////////////
// import  Witl from './images/whereisthelove.jpg'
// import  Igf from './images/igottafeeling.jpg'
// import  Pi from './images/pumpit.jpg'
// import  Mmh from './images/meetmehalfway.jpg'
// import  Lgis from './images/letsgetitstarted.jpg'
// import  Bbp from './images/boomboompow.jpg'
//import Albums from '../DataSet/index'
/////////////////////////////////////////////////////
//import ReactDOM from 'react-dom/client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './songlist.css'
import {Liked} from '../'


export default function SongList() {
  const { id } = useParams()
  const [song, setSong] = useState([]);

  useEffect(() => {
    fetchSonglist()
  }, [])

  const fetchSonglist = async () => {
    const response = await fetch(`https://myapi4testingma.onrender.com/albums/${id}`)
    const songData = await response.json()
    setSong(songData.songs)
  }
 //console.log(song)
  const songlist = song.map(s => (
    <div id="list" key={s.id}>
      <div id ="songname">
        <dt>Song: {s.song}</dt> 
      </div>
      <Liked />
    </div> 
  ));

  return (
    <div id= 'song-container'>
      <h2>Songs</h2>
    <dl>{songlist}</dl>
    </div>
   
  );

}

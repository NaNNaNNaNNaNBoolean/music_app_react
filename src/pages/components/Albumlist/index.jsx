import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import './style.css'
import Liked from '../Liked/index'
/////////////////////////////////////////////////////

export default function Albumlist() {
  const [albums,setAlbums] = useState([])

  useEffect(() => {fetchAlbums()}, [])

  const fetchAlbums = async () => {
    const response = await fetch('https://myapi4testingma.onrender.com/albums')
    const albumData = await response.json()
    setAlbums(albumData) 
  }

  const albumlist = albums.map((al) => (
      <div id="Albumlist" key={al.id}>
        {/* <img id ="cover" src ={song.img}></img> */}
        <div id ="albumInfo"> 
        <Link to={`/Albums/${al.id}`}>
            <div className="songs">Album: {al.name}</div>
          </Link>
            <dt> Release date: {al.ReleaseDate} </dt>
         
        </div>
        <Liked />
      </div>
    ));

  return (
    <div id = 'Album-container'>
      <h2>Albums</h2>
      <dl>{albumlist}</dl>
    </div>
   
  );

}

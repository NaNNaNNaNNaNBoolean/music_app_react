import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
import './songlist.css'
//////////////////////////////////////////////////////
import  Witl from './assets/images/whereisthelove.jpg'
import  Igf from './assets/images/igottafeeling.jpg'
import  Pi from './assets/images/pumpit.jpg'
import  Mmh from './assets/images/meetmehalfway.jpg'
import  Lgis from './assets/images/letsgetitstarted.jpg'
import  Bbp from './assets/images/boomboompow.jpg'
///////////////////////////////////////////////////
import NotLiked from './assets/images/heart.png'
import Liked from './assets/images/heartfull.png'

function LikeState (){
  const [isLiked,setIsLiked] = useState()
 const likeMeHandler = () => {
 setIsLiked(previsLiked => !previsLiked);
 //e.target.
 }
 return(
   <button  selected = {isLiked} onClick={likeMeHandler}>
   {isLiked ? (<img id = "heart" src ={Liked}></img>) : (<img id="heart" src ={NotLiked}></img>)}
   </button>
 )
}

export default function SongList() {
  const songs = [
    { id: 1, img: Witl,name:"Where is the love?", relDate:2003, album: "Elephunk"},
    {id: 2, img: Igf,  name:"I gotta feeling", relDate:2009, album: "The E.N.D", liked: false },
    {id: 3,img: Pi,  name:"pump it", relDate:2005, album: "Monkey Business", liked: false },
    {id: 4,img: Mmh,  name:"Meet me halfway", relDate:2009, album: "The E.N.D", liked: false },
    {id: 5,img: Lgis,  name:"let's get it started", relDate:2004, album: "", liked: false },
    {id: 6,img: Bbp,  name:"Boon boom pow", relDate:2009, album: "The E.N.D", liked: false },
  ];
 
 
 

  const songlist = songs.map(song =>
    <div id="list" key={song.id}>
      <img id ="cover" src ={song.img}></img>
      <div id ="songinfo">
        <dt>Song: {song.name}</dt> 
          <dd > Release date:{song.relDate} Album:{song.album}</dd>
      </div>
      <LikeState />
    </div>
  );

  return (
    <dl>{songlist}</dl>
  );

}

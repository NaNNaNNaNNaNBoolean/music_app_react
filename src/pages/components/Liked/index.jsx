import React,{useState} from 'react';
//import ReactDOM from 'react-dom/client'
import './liked.css'
///////////////////////////////////////////////////
import NotLiked from './images/heart.png'
import Liked from './images/heartfull.png'

export default function LikeState(){
    const [isLiked,setIsLiked] = useState()
   const likeMeHandler = () => {
   setIsLiked(previsLiked => !previsLiked);
   //e.target.
   }
   return(
     <button id ="likebtn" selected = {isLiked} onClick={likeMeHandler}>
     {isLiked ? (<img id = "heart" src ={Liked}></img>) : (<img id="heart" src ={NotLiked}></img>)}
     </button>
   )
  }

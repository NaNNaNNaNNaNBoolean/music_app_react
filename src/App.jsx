

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
//import { useNavigate } from "react-router-dom";
import {ShowSongs} from './components';
import {BGChange} from './components'
import BandInfo from './components/BandInfo/Intro';
//import {Form} from './components';
import './App.css';


export default function App() {
  
  return (
    <>
      <BandInfo />
      <ShowSongs />
      {/* <Form /> */}
      <BGChange />
    </>
  )
}



import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import {NavBar} from './layout';
import * as Pages from './pages'
import {BGChange} from './pages/components';
//import {Form} from './components';
import './App.css';


export default function App() {
  
  return (
    <>
         <Routes>
            <Route path ="/" element ={<NavBar />}>
              <Route index element ={<Pages.Home />}/>
              <Route path ="/About" element ={<Pages.About />}/>
              <Route path ="/Albums" element ={<Pages.Songlist />}/>
              {/*to do later when I catch up with the tasks*/}

            {/* <Route path = "/Album"> 
                  <Route index element ={<Pages.Albums />}/>
                  <Route path ="/Album/:id" element ={<Pages.Songlist />}/>
                </Route>
                <Route path ="/Form" element ={<Pages.Form/>}/>*/}

            <Route path ="*" element ={<Pages.NotFound/>}/> 
           </Route>
        </Routes>
        <BGChange />
    </>
  )
}

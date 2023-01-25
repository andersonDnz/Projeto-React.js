import React from "react";

import { 
    BrowserRouter, 
    Routes,
    Route } from 'react-router-dom';

import Today from '../pages/Today';
import Inbox from '../pages/Inbox';
import Navbar from '../pages/Navbar';
import Website from '../pages/WebSiteRedesign';
import Shopping from '../pages/Shopping';
import Denamark from '../pages/Denamark';
import Container from '../components/Container';


function Home() {
 return(
    <>
      <BrowserRouter>
        <Container customClass="min-height">
        <Navbar/>
          <Routes>
           <Route exact path='Today' element={<Today/>}/>
           <Route path='Inbox' element={<Inbox/>}/>
           <Route path='Website' element={<Website/>}/>
           <Route path='Shopping' element={<Shopping/>}/>
           <Route path='Denamark' element={<Denamark/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
 )
}

export default Home;
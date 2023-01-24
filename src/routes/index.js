import React from "react";

import { 
    BrowserRouter, 
    Routes,
    Route } from 'react-router-dom';

import Today from '../Pages/Today';
import Inbox from '../Pages/Inbox';
import Navbar from '../Pages/Navbar';
import Website from '../Pages/Website';
import Shopping from '../Pages/Shopping';
import Denamark from '../Pages/Denamark';
import Container from '../routes/Container';



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
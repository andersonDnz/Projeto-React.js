import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Today from './Components/Pages/Today';
import Inbox from './Components/Pages/Inbox';
import Navbar from './Components/Pages/Navbar';
import Web from './Components/Pages/Web';
import Shopping from './Components/Pages/Shopping';
import Denamark from './Components/Pages/Denamark';
import Container from './Components/Pages/Container';



function App() {
  return (
      <BrowserRouter>
        <Container customClass="min-height">
        <Navbar/>
          <Routes>
           <Route exact path='Today' element={<Today/>}/>
           <Route path='Inbox' element={<Inbox/>}/>
           <Route path='Web' element={<Web/>}/>
           <Route path='Shopping' element={<Shopping/>}/>
           <Route path='Denamark' element={<Denamark/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
  );
};

export default App;

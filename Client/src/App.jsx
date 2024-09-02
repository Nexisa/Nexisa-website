// import React from 'react';
import Navbar from './components/Nav';
import Landing from './pages/Landing';
import { Route, Routes } from "react-router-dom"
import PortfolioPage from './pages/PortfolioPage';
<<<<<<< HEAD
import TeamPage from './pages/TeamPage';
=======
// import AboutUs from './components/AboutUs';
>>>>>>> 9d5ed9af87b3d5027d580ce4b4313507b03f55f2

function App() {
  return (
    <div className='flex min-h-screen max-w-screen flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>} />
        <Route path='/team' element={<TeamPage/>} />
      </Routes>
    </div>
  );
}

export default App;

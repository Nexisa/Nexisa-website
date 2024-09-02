// import React from 'react';
import Navbar from './components/Nav';
import Landing from './pages/Landing';
import { Route, Routes } from "react-router-dom"
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <div className='flex min-h-screen max-w-screen flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

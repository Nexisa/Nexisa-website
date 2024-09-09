// import React from 'react';
import Navbar from './components/Nav';
import Landing from './pages/Landing';
import { Route, Routes } from "react-router-dom"
import PortfolioPage from './pages/PortfolioPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import CareerPage from './pages/CareerPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='flex min-h-screen max-w-screen flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/career' element={<CareerPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

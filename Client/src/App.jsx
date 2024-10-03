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
import Signin from './pages/Signin';
import UserDashBoard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import LeaveApplication from './pages/User/LeaveApplication';
import SalarySlip from './pages/User/SalarySlip';
import AccountInfo from './pages/User/AccountInfo';
import PrivateRoute from './components/PrivateRoute';
import Leave from './pages/Admin/Leave';
import Employees from './pages/Admin/Employees';

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
        <Route path='/signin' element={<Signin />} />
        <Route path='/user' element={
          <PrivateRoute>
            <UserDashBoard />
          </PrivateRoute>
        } />
        <Route path='user/leave-application' element={
          <PrivateRoute>
            <LeaveApplication />
          </PrivateRoute>
        } />
        <Route path='user/salary-slip' element={
          <PrivateRoute>
            <SalarySlip />
          </PrivateRoute>
        } />
        <Route path='user/account-info' element={
          <PrivateRoute>
            <AccountInfo />
          </PrivateRoute>
        } />
        <Route path='/admin' element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path='/admin/leave-applications' element={
          <PrivateRoute>
            <Leave />
          </PrivateRoute>
        } />
        <Route path='/admin/employees' element={
          <PrivateRoute>
            <Employees />
          </PrivateRoute>
        } />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

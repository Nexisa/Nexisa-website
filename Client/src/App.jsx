// import React from 'react';
import Navbar from "./components/Nav";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import CareerPage from "./pages/CareerPage";
import ErrorPage from "./pages/ErrorPage";
import Signin from "./pages/Signin";
import UserDashBoard from "./pages/User/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LeaveApplication from "./pages/User/LeaveApplication";
import SalarySlip from "./pages/User/SalarySlip";
import AccountInfo from "./pages/User/AccountInfo";
// import PrivateRoute from './components/PrivateRoute';
import Leave from "./pages/Admin/Leave";
import Employees from "./pages/Admin/Employees";
import UserProtection from "./components/UserProtection";
import AdminProtection from "./components/AdminProtection";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen max-w-screen flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/user"
            element={
              <UserProtection>
                <UserDashBoard />
              </UserProtection>
            }
          />
          <Route
            path="user/leave-application"
            element={
              <UserProtection>
                <LeaveApplication />
              </UserProtection>
            }
          />
          <Route
            path="user/salary-slip"
            element={
              <UserProtection>
                <SalarySlip />
              </UserProtection>
            }
          />
          <Route
            path="user/account-info"
            element={
              <UserProtection>
                <AccountInfo />
              </UserProtection>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminProtection>
                <AdminDashboard />
              </AdminProtection>
            }
          />
          <Route
            path="/admin/leave-applications"
            element={
              <AdminProtection>
                <Leave />
              </AdminProtection>
            }
          />
          <Route
            path="/admin/employees"
            element={
              <AdminProtection>
                <Employees />
              </AdminProtection>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

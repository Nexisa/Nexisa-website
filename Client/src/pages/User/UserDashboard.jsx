// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/Logo/about.jpg";
// import axios from "../../api/axios";
// import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
const UserDashBoard = () => {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, logout } = useAuth(); // Get authentication state and logout function

  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      // Call logout function from AuthContext
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally, handle the error (e.g., show a notification)
    }
  };
  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">
        Dashboard
      </h2>
      <div className="bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8"></div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 md:mr-5 w-11/12 mx-auto">
          <img src={image} alt="image" />
        </div>
        <div className="md:w-1/2 w-11/12 mx-auto flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-semibold text-left">Welcome User,</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
            <Link to="/user/leave-application">
              <div className="bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer">
                Leave Application
              </div>
            </Link>
            <Link to="/user/salary-slip">
              <div className="bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer">
                Salary Slip
              </div>
            </Link>
            <Link to="/user/account-info">
              <div className="bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer">
                Account Information
              </div>
            </Link>
            <button
              className="bg-[#5846F9] text-white p-4 rounded-xl text-center cursor-pointer"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;

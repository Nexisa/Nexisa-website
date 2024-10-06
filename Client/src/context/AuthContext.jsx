// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "../api/axios"; // Adjust the import path according to your project structure
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  // Login function that takes formData for authentication
  const login = async (formData) => {
    try {
      const response = await axios.post("/auth/signin", formData);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Store token
        localStorage.setItem("role", response.data.role); // Store role
        setIsAuthenticated(true); // Set authenticated state
        return { success: true, role: response.data.role }; // Return success and role
      } else {
        toast.error(response.data.message); // Show error message
        return { success: false, message: response.data.message }; // Return failure message
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred."); // Handle unexpected errors
      return { success: false, message: "An unexpected error occurred." }; // Return error message
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Ensure token is removed
    localStorage.removeItem("role"); // Optionally remove role as well
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

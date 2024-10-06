import { createContext, useContext, useState } from "react";
import axios from "../api/axios"; // Adjust the import path according to your project structure
import { toast } from "react-hot-toast";

// Create AuthContext to manage authentication globally
const AuthContext = createContext();

// AuthProvider component that wraps around the app to provide auth functionality
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // State to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Check localStorage for token to determine initial state
  );

  // Login function for authenticating users
  const login = async (formData) => {
    try {
      // Send request to server for authentication
      const response = await axios.post("/auth/signin", formData);

      // Check if the authentication was successful
      if (response.data.success) {
        // Store the received token and role in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        // Update authentication state to true
        setIsAuthenticated(true);

        // Show a success message to the user
        toast.success("Logged in successfully!");

        // Optionally return success and role, though this can be handled separately in components
        return { success: true, role: response.data.role };
      } else {
        // If login fails, show an error message
        toast.error(response.data.message);
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      // Handle any unexpected errors (like network issues)
      console.error("Login error:", error);
      // toast.error("An unexpected error occurred.");
      return { success: false, message: "An unexpected error occurred." };
    }
  };

  // Logout function for logging out users
  const logout = () => {
    // Update authentication state to false
    setIsAuthenticated(false);

    // Remove token and role from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Optionally display a logout success message
    toast.success("Logged out successfully!");
  };

  // AuthContext.Provider passes down the auth state and functions (login, logout)
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the AuthContext
export const useAuth = () => useContext(AuthContext);

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo/nexisa.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth(); // Use the authentication state from context
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  // Function to handle the opening and closing of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Check and set user role on component mount
  useEffect(() => {
    const role = localStorage.getItem("role"); // Assuming the role is stored in localStorage
    setUserRole(role); // Set the role in state
  }, []); // Only run once on mount

  // Handle redirection based on user role
  const handleDashboardClick = () => {
    if (userRole === "admin") {
      navigate("/admin");
    } else if (userRole === "employee") {
      navigate("/user");
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-xl">
      <div className="w-11/12 container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Nexisa Logo" className="h-10 w-36" />
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {["/", "/portfolio", "/career", "/team", "/contact"].map(
            (path, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-xl transition-colors duration-300 ${
                      isActive ? "text-[#5846F9]" : "hover:text-[#5846F9]"
                    }`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </NavLink>
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#5846F9] transition-all duration-300 group-hover:w-full"></div>
              </li>
            )
          )}
        </ul>

        {/* Sign In / Dashboard Button */}
        <div>
          {isAuthenticated ? ( // Use isAuthenticated from context
            <button
              onClick={handleDashboardClick}
              className="bg-[#5846F9] text-white px-4 py-2 rounded-lg hover:bg-[#3f38e7] transition-colors duration-300 md:block hidden"
            >
              Dashboard
            </button>
          ) : (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `text-xl transition-colors duration-300 md:block hidden ${
                  isActive ? "text-[#5846F9]" : "hover:text-[#5846F9]"
                }`
              }
            >
              Sign In
            </NavLink>
          )}
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="text-gray-800 font-medium px-6 py-4 space-y-4">
            {["/", "/portfolio", "/career", "/team", "/contact"].map(
              (path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block text-xl ${
                        isActive ? "text-[#5846F9]" : "hover:text-[#5846F9]"
                      }`
                    }
                    onClick={closeMenu} // Close the menu when a link is clicked
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </NavLink>
                </li>
              )
            )}

            {/* Sign In / Dashboard Button in Mobile Menu */}
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleDashboardClick();
                    closeMenu(); // Close menu when dashboard is clicked
                  }}
                  className="block text-xl text-[#5846F9] w-full text-left"
                >
                  Dashboard
                </button>
              ) : (
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `block text-xl ${
                      isActive ? "text-[#5846F9]" : "hover:text-[#5846F9]"
                    }`
                  }
                  onClick={closeMenu} // Close menu when Sign In is clicked
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { useAuthStore } from "../store/authStore";

// const Navbar = () => {
//   const { user, logout } = useAuthStore(); // Access authentication state
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Toggle mobile menu

//   const handleLogout = () => {
//     logout(); // Handle logout
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
//   };

//   return (
//     <nav className="bg-green-600 rounded-lg p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">Biker</div>

//         {/* Desktop links */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="text-white hover:text-green-300">Home</a>
//           <a href="#" className="text-white hover:text-green-300">About</a>
//           <a href="#" className="text-white hover:text-green-300">Services</a>
//           <a href="#" className="text-white hover:text-green-300">Profile</a>
//         </div>

//         {/* Account and login/logout button */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <div className="text-white flex items-center space-x-2">
//               <span>{user.name}</span>
//               <span>({user.email})</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded transition hover:bg-red-500 ease-in-out duration-300"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => console.log("Login logic here")}
//               className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-500 transition hover:text-white ease-in-out duration-300"
//             >
//               Login
//             </button>
//           )}
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-white"
//           onClick={toggleMobileMenu}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-4">
//           <a href="#" className="block text-white hover:text-green-300 py-2">Home</a>
//           <a href="#" className="block text-white hover:text-green-300 py-2">About</a>
//           <a href="#" className="block text-white hover:text-green-300 py-2">Services</a>
//           <a href="#" className="block text-white hover:text-green-300 py-2">Profile</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai"; // Importing icons

const Navbar = () => {
  const { user, logout } = useAuthStore(); // Access authentication state
  const [isProfileOpen, setProfileOpen] = useState(false); // Toggle profile dropdown

  const handleLogout = () => {
    logout(); // Handle logout
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!isProfileOpen); // Toggle profile dropdown visibility
  };

  return (
    <nav className="bg-deep-greenish-blue rounded-lg p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Biker</div>

        {/* Right-side actions */}
        <div className="relative flex items-center space-x-4 ml-auto">
          {/* Profile Dropdown */}
          <button
            className="text-white hover:text-green-300 flex items-center relative"
            onClick={toggleProfileDropdown}
          >
            <AiOutlineUser className="mr-1" /> {/* Profile icon */}
            Profile
          </button>

          <div
            className={`absolute right-0 mt-2 w-64 bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 transition-all duration-300 ease-in-out transform ${
              isProfileOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
            }`}
            style={{ top: "100%", right: "0" }}
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-500 mb-3">Profile Information</h3>
              <p className="text-white">Name: {user.name}</p>
              <p className="text-white">Email: {user.email}</p>
            </div>
            <div className="p-4 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-green-500 mb-3">Account Activity</h3>
              <p className="text-white">
                <span className="font-bold">Joined: </span>
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-white">
                <span className="font-bold">Last Login: </span>
                {new Date(user.lastLogin).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-white flex items-center hover:text-red-300 transition duration-300"
            >
              <AiOutlineLogout className="mr-1" /> {/* Logout icon */}
              Logout
            </button>
          ) : (
            <button
              onClick={() => console.log("Login logic here")}
              className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-500 transition hover:text-white ease-in-out duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

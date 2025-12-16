// import React from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   return (
//     <div className="bg-white shadow p-3 flex justify-between items-center">
//       <div className="font-bold">LMS Admin</div>
//       <div className="flex gap-3 items-center">
//         <button onClick={handleLogout} className="px-3 py-1 border rounded">Logout</button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function Navbar({ setSidebarOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin-login");
  };

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center z-20 relative">
      
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-3">
        {/* Hamburger menu (mobile only) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <HiMenu />
        </button>

        <h1 className="font-bold text-lg sm:text-xl">
          LMS Admin
        </h1>
      </div>

      {/* Right: Logout */}
      <button
        onClick={handleLogout}
        className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
      >
        Logout
      </button>

    </header>
  );
}

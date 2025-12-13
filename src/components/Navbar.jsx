import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-white shadow p-3 flex justify-between items-center">
      <div className="font-bold">LMS Admin</div>
      <div className="flex gap-3 items-center">
        <button onClick={handleLogout} className="px-3 py-1 border rounded">Logout</button>
      </div>
    </div>
  );
}

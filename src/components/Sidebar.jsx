import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const active = "block px-4 py-2 rounded bg-blue-100";
  const normal = "block px-4 py-2 rounded hover:bg-gray-100";

  return (
    <aside className="w-60 bg-white p-3 h-screen border-r">
      <nav className="space-y-1">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? active : normal}>Dashboard</NavLink>
        <NavLink to="/create-lead" className={({isActive}) => isActive ? active : normal}>Create Lead</NavLink>
        <NavLink to="/metrics" className={({isActive}) => isActive ? active : normal}>Metrics</NavLink>
      </nav>
    </aside>
  );
}

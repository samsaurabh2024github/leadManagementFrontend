// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const active = "block px-4 py-2 rounded bg-blue-100";
//   const normal = "block px-4 py-2 rounded hover:bg-gray-100";

//   return (
//     <aside className="w-60 bg-white p-3 h-screen border-r">
//       <nav className="space-y-1">
//         <NavLink to="/dashboard" className={({isActive}) => isActive ? active : normal}>Dashboard</NavLink>
//         <NavLink to="/create-lead" className={({isActive}) => isActive ? active : normal}>Create Lead</NavLink>
//         <NavLink to="/metrics" className={({isActive}) => isActive ? active : normal}>Metrics</NavLink>
//       </nav>
//     </aside>
//   );
// }
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const active = "block px-4 py-2 rounded bg-blue-100";
  const normal = "block px-4 py-2 rounded hover:bg-gray-100";

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Overlay – only for mobile */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky
          top-0
          h-screen w-64
          bg-white border-r
          z-40
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <nav className="space-y-2 p-4 mt-14 md:mt-0">
          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/create-lead"
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Create Lead
          </NavLink>

          <NavLink
            to="/metrics"
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Metrics
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

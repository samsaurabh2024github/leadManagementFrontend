// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setFilters, setPage } from "../leads/leadsSlice";

// export default function LeadFilters() {
//   const dispatch = useDispatch();
//   const [local, setLocal] = useState({ search: "", source: "", status: "" });

//   const apply = () => {
//     dispatch(setFilters(local));
//     dispatch(setPage(1)); // reset page
//   };

//   const clear = () => {
//     setLocal({ search: "", source: "", status: "" });
//     dispatch(setFilters({ search: "", source: "", status: "" }));
//     dispatch(setPage(1));
//   };

//   return (
//     <div className="bg-white p-3 rounded flex gap-2 items-center">
//       <input
//         value={local.search}
//         onChange={(e) => setLocal({ ...local, search: e.target.value })}
//         placeholder="Search name, email, phone"
//         className="border p-2 rounded flex-1"
//       />
//       <select value={local.source} onChange={(e) => setLocal({ ...local, source: e.target.value })} className="border p-2 rounded">
//         <option value="">All sources</option>
//         <option value="website">Website</option>
//         <option value="meta">Meta</option>
//         <option value="google">Google</option>
//         <option value="manual">Manual</option>
//       </select>
//       <select value={local.status} onChange={(e) => setLocal({ ...local, status: e.target.value })} className="border p-2 rounded">
//         <option value="">All status</option>
//         <option value="new">new</option>
//         <option value="contacted">contacted</option>
//         <option value="qualified">qualified</option>
//         <option value="lost">lost</option>
//       </select>

//       <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={apply}>Apply</button>
//       <button className="px-3 py-1 rounded border" onClick={clear}>Clear</button>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilters, setPage } from "../leads/leadsSlice";
import useDebounce from "../../hooks/useDebounce";

export default function LeadFilters() {
  const dispatch = useDispatch();

  const [local, setLocal] = useState({
    search: "",
    source: "",
    status: ""
  });

  // Debounced search for live filtering
  const debouncedSearch = useDebounce(local.search, 400);

  // Auto-apply when search changes (debounced)
  useEffect(() => {
    dispatch(setFilters({ ...local, search: debouncedSearch }));
    dispatch(setPage(1));
  }, [debouncedSearch]);

  // Auto-apply on dropdown change (no Apply button needed)
  useEffect(() => {
    dispatch(setFilters(local));
    dispatch(setPage(1));
  }, [local.source, local.status]);

  const clearAll = () => {
    const empty = { search: "", source: "", status: "" };
    setLocal(empty);
    dispatch(setFilters(empty));
    dispatch(setPage(1));
  };

  return (
    <div className="bg-white p-4 rounded flex flex-col gap-3">

      <div className="flex gap-2">
        <input
          value={local.search}
          onChange={(e) => setLocal({ ...local, search: e.target.value })}
          placeholder="Search name, email, phone"
          className="border p-2 rounded flex-1"
        />

        <select
          value={local.source}
          onChange={(e) => setLocal({ ...local, source: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All sources</option>
          <option value="website">Website</option>
          <option value="meta">Meta</option>
          <option value="google">Google</option>
          <option value="manual">Manual</option>
        </select>

        <select
          value={local.status}
          onChange={(e) => setLocal({ ...local, status: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All status</option>
          <option value="new">new</option>
          <option value="contacted">contacted</option>
          <option value="qualified">qualified</option>
          <option value="lost">lost</option>
        </select>
      </div>

      <button
        className="self-start px-3 py-1 border rounded"
        onClick={clearAll}
      >
        Clear Filters
      </button>
    </div>
  );
}

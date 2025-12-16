import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads, setPage } from "./leadsSlice";
import { Link } from "react-router-dom";
import LeadFilters from "../leads/LeadFilters";
import Pagination from "../../components/Pagination";   // ✔ FIXED

import FilterChips from "../../components/FilterChips";
// import { exportLeadsCSV } from "../../../../backend/controllers/leadController";


export default function LeadsPage() {
  const dispatch = useDispatch();
  const { list, loading, total, page, limit, filters } = useSelector((s) => s.leads);

  const exportCSV = () => {
  const params = new URLSearchParams({
    search: filters.search || "",
    source: filters.source || "",
    status: filters.status || ""
  });

//   const url = `${import.meta.env.VITE_API_URL}/leads/export/csv?${params}`;
  // const url = `http://localhost:5007/api/leads/export/csv?${params}`;
  const url = `https://leadmanagementbackend2.onrender.com/api/leads/export/csv?${params}`;
  // Force browser download
  window.location.href = url;
};


 const exportExcel = () => {
  const params = new URLSearchParams({
    search: filters.search || "",
    source: filters.source || "",
    status: filters.status || ""
  });

//   const url = `${import.meta.env.VITE_API_URL}/leads/export/excel?${params}`;
    // const url = `http://localhost:5007/api/leads/export/excel?${params}`;
    const url = `https://leadmanagementbackend2.onrender.com/api/leads/export/excel?${params}`;
  window.location.href = url;
};


const exportPDF = () => {
  const params = new URLSearchParams({
    search: filters.search || "",
    source: filters.source || "",
    status: filters.status || ""
  });

//   const url = `${import.meta.env.VITE_API_URL}/leads/export/pdf?${params}`;
    // const url = `http://localhost:5007/api/leads/export/pdf?${params}`;
    const url = `https://leadmanagementbackend2.onrender.com/api/leads/export/pdf?${params}`;
  window.location.href = url;
};


  useEffect(() => {
    dispatch(
      fetchLeads({
        page,
        limit,
        search: filters.search || "",
        source: filters.source || "",
        status: filters.status || "",
      })
    );
  }, [dispatch, page, limit, filters]);

  return (
    <div className="p-6">
     <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-4">
        <h1 className="text-2xl font-bold">Leads</h1>
        <div className="flex flex-wrap gap-2">
          <Link to="/create-lead" className="bg-green-600 text-white px-4 py-2 rounded">
            + Create Lead
          </Link>
          <Link to="/metrics" className="px-4 py-2 border rounded">
            Metrics
          </Link>

          <button
  onClick={exportCSV}
  className="px-4 py-2 border bg-white rounded"
>
  Export CSV
</button>

<button
  onClick={exportExcel}
  className="px-4 py-2 border rounded bg-white"
>
  Export Excel
</button>

<button
  onClick={exportPDF}
  className="px-4 py-2 border rounded bg-white"
>
  Export PDF
</button>



        </div>
      </div>

      <LeadFilters />
      <FilterChips />

      <div className="mt-4">
        {loading && <div>Loading...</div>}
        {!loading && list.length === 0 && (
          <div className="p-4 bg-white rounded">No leads found</div>
        )}

        <div className="grid gap-4 mt-4">
          {list.map((l) => (
            <Link
              key={l._id}
              to={`/lead/${l._id}`}
              className="p-4 bg-white rounded shadow hover:bg-gray-50"
            >
             <div className="flex flex-col sm:flex-row sm:justify-between gap-2">

                <div>
                  <div className="font-bold">{l.name || "—"}</div>
                  <div className="text-sm">
                    {l.email} • {l.phone}
                  </div>
                  <div className="text-xs text-gray-500">
                    {l.source} • {new Date(l.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="text-sm">{l.status}</div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination
          page={page}
          total={total}
          limit={limit}
          onChange={(p) => dispatch(setPage(p))}
        />
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads, setPage } from "./leadsSlice";
import { Link } from "react-router-dom";
import LeadFilters from "../leads/LeadFilters";
import Pagination from "../../components/Pagination";   // ✔ FIXED

import FilterChips from "../../components/FilterChips";


export default function LeadsPage() {
  const dispatch = useDispatch();
  const { list, loading, total, page, limit, filters } = useSelector((s) => s.leads);

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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Leads</h1>
        <div className="flex gap-2">
          <Link to="/create-lead" className="bg-green-600 text-white px-4 py-2 rounded">
            + Create Lead
          </Link>
          <Link to="/metrics" className="px-4 py-2 border rounded">
            Metrics
          </Link>
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
              <div className="flex justify-between">
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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeads, fetchLeadStats } from "../leads/leadsSlice";

export default function MetricsPage() {
  const dispatch = useDispatch();
  const { list, stats, loading, total } = useSelector(s => s.leads);

  useEffect(() => {
    dispatch(fetchLeads({ limit: 1000 })); // load data for quick aggregations (or use backend stats)
    // try fetchLeadStats if backend supports it
    // dispatch(fetchLeadStats());
  }, [dispatch]);

  // compute simple metrics from list if stats endpoint not available
  const todayCount = list.filter(l => {
    const d = new Date(l.createdAt);
    const t = new Date();
    return d.toDateString() === t.toDateString();
  }).length;

  const bySource = list.reduce((acc, cur) => {
    acc[cur.source] = (acc[cur.source] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Metrics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Total Leads</div>
          <div className="text-2xl font-bold">{total || list.length}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Leads Today</div>
          <div className="text-2xl font-bold">{todayCount}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Sources</div>
          <div className="mt-2">
            {Object.entries(bySource).map(([k,v]) => (
              <div key={k} className="flex justify-between">
                <div className="capitalize">{k}</div>
                <div>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeadById, deleteLead } from "./leadsSlice";

export default function LeadDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, loading } = useSelector(s => s.leads);

  useEffect(() => {
    if (id) dispatch(fetchLeadById(id));
  }, [id, dispatch]);

  const handleDelete = async () => {
    if (!confirm("Delete this lead?")) return;
    const res = await dispatch(deleteLead(id));
    if (res.meta.requestStatus === "fulfilled") navigate("/dashboard");
  };

  if (loading || !current) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{current.name || "—"}</h1>
          <p className="text-sm text-gray-500">Source: {current.source} • {new Date(current.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
          <Link to={`/edit-lead/${current._id}`} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</Link>
          <button onClick={handleDelete} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p>{current.email || "—"}</p>
          <p>{current.phone || "—"}</p>
        </div>

        <div>
          <h4 className="font-semibold">Service / Status</h4>
          <p>{current.service || "—"}</p>
          <p className="mt-2">Status: <span className="font-medium">{current.status}</span></p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Metadata</h4>
        <pre className="bg-gray-50 p-3 rounded text-sm overflow-auto max-h-48">{JSON.stringify(current.meta || {}, null, 2)}</pre>
      </div>
    </div>
  );
}

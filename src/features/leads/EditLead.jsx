import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeadById, updateLead } from "./leadsSlice";

export default function EditLead() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current, loading } = useSelector(s => s.leads);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", status: "" });

  useEffect(() => {
    if (!current || current._id !== id) dispatch(fetchLeadById(id));
    if (current && current._id === id) {
      setForm({
        name: current.name || "",
        email: current.email || "",
        phone: current.phone || "",
        service: current.service || "",
        status: current.status || ""
      });
    }
  }, [id, current, dispatch]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await dispatch(updateLead({ id, data: form }));
    if (res.meta.requestStatus === "fulfilled") navigate(`/lead/${id}`);
  };

  if (loading || !current) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Edit Lead</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Name" />
        <input name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Email" />
        <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Phone" />
        <input name="service" value={form.service} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Service" />
        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select status</option>
          <option value="new">new</option>
          <option value="contacted">contacted</option>
          <option value="qualified">qualified</option>
          <option value="lost">lost</option>
        </select>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">{loading ? "Saving..." : "Save"}</button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLead } from "./leadsSlice";
import { useNavigate } from "react-router-dom";

export default function CreateLead() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((s) => s.leads);

  const [form, setForm] = useState({
    source: "manual",
    name: "",
    email: "",
    phone: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createLead(form)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Create Lead</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            name="name"
            type="text"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            name="phone"
            type="text"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Service</label>
          <input
            name="service"
            type="text"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded mt-3"
        >
          {loading ? "Saving..." : "Create Lead"}
        </button>

      </form>
    </div>
  );
}

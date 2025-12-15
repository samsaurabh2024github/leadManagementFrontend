import UserNavbar from "../userview/UserNavbar";
import { useState } from "react";
import api from "../api/axios";

import {
  FiPhone,
  FiMail,
  FiMapPin
} from "react-icons/fi";
import Footer from "./Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccess(false); // reset previous success
  setError("");      // reset previous error

  try {
    await api.post("/integrations/website", form);
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
    });
  } catch (err) {
    console.error(err);
    setError("Submission failed. Please try again.");
  }
};


  return (
    <div className="bg-white">
      <UserNavbar />

      {/* HERO */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-green-600 to-green-800 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact Urban Cruise
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto">
          Have questions or need a custom travel solution? We’re here to help.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <FiPhone className="mx-auto text-green-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-1">Call Us</h3>
            <p className="text-gray-600">+91 XXX XXX XXXX</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <FiMail className="mx-auto text-green-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-gray-600">info@urbancruise.com</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
            <FiMapPin className="mx-auto text-green-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-1">Location</h3>
            <p className="text-gray-600">Mumbai, India</p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Let’s Plan Your Journey
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fill out the enquiry form and our team will reach out to you
              with the best travel solution tailored to your needs.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Corporate & Employee Transport</li>
              <li>✔ Wedding & Event Travel</li>
              <li>✔ Airport Transfers</li>
              <li>✔ Outstation & Group Trips</li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-6">
              Enquiry Form
            </h3>

           {success && (
  <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
    Thank you! We will contact you soon.
  </div>
)}

{error && (
  <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
    {error}
  </div>
)}

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Service Interested (coorporate, wedding, traveling etc.)"
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

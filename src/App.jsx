import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./features/auth/Login";
import LeadsPage from "./features/leads/LeadsPage";
import LeadDetails from "./features/leads/LeadDetails";
import CreateLead from "./features/leads/CreateLead";
import EditLead from "./features/leads/EditLead";
import MetricsPage from "./features/leads/MetricsPage"; 
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>


            <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicesPage  />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="admin-login" element={<Login />} />

        {/* <Route path="/dashboard" element={
          <PrivateRoute>
            <div className="min-h-screen flex bg-gray-50">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <LeadsPage />
              </div>
            </div>
          </PrivateRoute>
        }/> */}
   <Route
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<LeadsPage />} />
          <Route path="/create-lead" element={<CreateLead />} />
          <Route path="/lead/:id" element={<LeadDetails />} />
          <Route path="/edit-lead/:id" element={<EditLead />} />
          <Route path="/metrics" element={<MetricsPage />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./userview/HomePage";import ContactPage from "./userview/ContactPage";
import ServicesPage from "./userview/Service";
import AdminLayout from "./layouts/AdminLayout";


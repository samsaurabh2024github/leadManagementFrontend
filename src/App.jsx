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
        <Route path="/dashboard" element={
          <PrivateRoute>
            <div className="min-h-screen flex bg-gray-50">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <LeadsPage />
              </div>
            </div>
          </PrivateRoute>
        }/>
        <Route path="/create-lead" element={<PrivateRoute><div className="min-h-screen flex"><Sidebar /><div className="flex-1"><Navbar /><CreateLead /></div></div></PrivateRoute>} />
        <Route path="/lead/:id" element={<PrivateRoute><div className="min-h-screen flex"><Sidebar /><div className="flex-1"><Navbar /><LeadDetails /></div></div></PrivateRoute>} />
        <Route path="/edit-lead/:id" element={<PrivateRoute><div className="min-h-screen flex"><Sidebar /><div className="flex-1"><Navbar /><EditLead /></div></div></PrivateRoute>} />
        <Route path="/metrics" element={<PrivateRoute><div className="min-h-screen flex"><Sidebar /><div className="flex-1"><Navbar /><MetricsPage /></div></div></PrivateRoute>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./userview/HomePage";import ContactPage from "./userview/ContactPage";
import ServicesPage from "./userview/Service";


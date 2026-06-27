import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import ServiceDetails from "./pages/ServiceDetails";

// Admin
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import ProtectedRoute from "./admin/Routes/ProtectedRoute";
import Jobs from "./admin/pages/Jobs";
import AddJob from "./admin/pages/AddJob";
import EditJob from "./admin/pages/EditJob";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Website */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        
        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />

        <Route path="/industries" element={<Industries />} />

        <Route path="/careers" element={<Careers />} />

        <Route
  path="/careers/:jobId"
  element={<JobDetails />}
/>
<Route
  path="/careers/:jobId/apply"
  element={<ApplyJob />}
/>

<Route
  path="/success"
  element={<Success />}
/>

        <Route path="/contact" element={<Contact />} />

        {/* ===================== */}

        {/* Admin */}

        <Route
          path="/admin/login"
          element={<Login />}
        />
        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs/add"
          element={
            <ProtectedRoute>
              <AddJob />
            </ProtectedRoute>
          }
        />
          <Route
            path="/admin/jobs/edit/:id"
            element={
               <ProtectedRoute>
                  <EditJob />
               </ProtectedRoute>
         }   
/>

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
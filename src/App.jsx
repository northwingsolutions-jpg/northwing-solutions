import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./admin/Routes/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Website Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const ApplyJob = lazy(() => import("./pages/ApplyJob"));
const Success = lazy(() => import("./pages/Success"));

// Admin Pages
const Login = lazy(() => import("./admin/pages/Login"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const Jobs = lazy(() => import("./admin/pages/Jobs"));
const AddJob = lazy(() => import("./admin/pages/AddJob"));
const EditJob = lazy(() => import("./admin/pages/EditJob"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#071B4A] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-lg font-semibold text-[#071B4A]">
                Loading...
              </p>
            </div>
          </div>
        }
      >
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

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Admin */}

          <Route
            path="/admin/login"
            element={<Login />}
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
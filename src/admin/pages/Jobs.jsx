import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, MapPin, Briefcase } from "lucide-react";

import AdminLayout from "../layout/AdminLayout";
import { getJobs, removeJob } from "../../services/jobService";

export default function Jobs() {

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadJobs();

  }, []);

  const loadJobs = async () => {

    try {

      const data = await getJobs();

      setJobs(data);

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this job?"
  );

  if (!confirmDelete) return;

  try {

    await removeJob(id);

    alert("Job deleted successfully!");

    loadJobs();

  } catch (error) {

    console.error(error);

    alert("Failed to delete job.");

  }

};

  return (

    <AdminLayout>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

        <div>

          <h1 className="text-4xl font-bold text-[#071B4A]">

            Jobs

          </h1>

          <p className="text-gray-500 mt-2">

            Manage recruitment openings

          </p>

        </div>

        <Link
          to="/admin/jobs/add"
          className="bg-[#071B4A] hover:bg-[#0E2F6B] text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >

          <Plus size={20} />

          Add Job

        </Link>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow mt-8 p-5">

        <div className="relative">

          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            placeholder="Search Jobs..."
            className="w-full border rounded-xl py-3 pl-12 pr-5 outline-none"
          />

        </div>

      </div>

      <div className="mt-8 space-y-6">        {loading ? (

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h2 className="text-xl font-semibold text-gray-600">
              Loading jobs...
            </h2>

          </div>

        ) : jobs.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold text-[#071B4A]">
              No Jobs Available
            </h2>

            <p className="text-gray-500 mt-4">
              Click "Add Job" to create your first vacancy.
            </p>

          </div>

        ) : (

          jobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

                <div>

                  <h2 className="text-2xl font-bold text-[#071B4A]">
                    {job.title}
                  </h2>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-600">

                    <div className="flex items-center gap-2">

                      <MapPin size={18} />

                      {job.location}

                    </div>

                    <div className="flex items-center gap-2">

                      <Briefcase size={18} />

                      {job.employmentType}

                    </div>

                    <div>

                      {job.experience}

                    </div>

                  </div>

                  <p className="mt-4 text-gray-700">

                    {job.salary}

                  </p>

                </div>

                <div className="flex flex-col items-start lg:items-end gap-4">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      job.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {job.status}
                  </span>

                  <div className="flex gap-3">

                    <Link
                    to={`/admin/jobs/edit/${job.id}`}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                   Edit
                    </Link>

                    <button
                    onClick={() => handleDelete(job.id)}
                    className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                    Delete
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </AdminLayout>

  );

}

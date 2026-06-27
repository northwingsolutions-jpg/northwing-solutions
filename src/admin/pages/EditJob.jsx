import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../Layout/AdminLayout";

import {
  getJobById,
  updateJob,
} from "../../services/jobService";

export default function EditJob() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [job, setJob] = useState({
    title: "",
    department: "",
    location: "",
    experience: "",
    employmentType: "",
    salary: "",
    skills: "",
    description: "",
    status: "Published",
  });

  useEffect(() => {

    loadJob();

  }, []);

  const loadJob = async () => {

    try {

      const data = await getJobById(id);

      if (data) {

        setJob(data);

      }

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  const handleChange = (e) => {

    setJob({

      ...job,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateJob(id, {
        title: job.title,
        department: job.department,
        location: job.location,
        experience: job.experience,
        employmentType: job.employmentType,
        salary: job.salary,
        skills: job.skills,
        description: job.description,
        status: job.status,
      });

      alert("Job Updated Successfully!");

      navigate("/admin/jobs");

    } catch (error) {

      console.error(error);

      alert("Failed to update job.");

    }

  };

  if (loading) {

    return (

      <AdminLayout>

        <div className="bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-2xl font-semibold">
            Loading Job...
          </h2>

        </div>

      </AdminLayout>

    );

  }

  return (

    <AdminLayout>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-[#071B4A]">
          Edit Job
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Update job information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block font-semibold mb-2">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={job.department}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={job.location}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={job.experience}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Employment Type
            </label>

            <select
              name="employmentType"
              value={job.employmentType}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            >
              <option value="">Select</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Salary
            </label>

            <input
              type="text"
              name="salary"
              value={job.salary}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Required Skills
            </label>

            <input
              type="text"
              name="skills"
              value={job.skills}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Job Description
            </label>

            <textarea
              rows="6"
              name="description"
              value={job.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Status
            </label>

            <select
              name="status"
              value={job.status}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
            >
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>          <div className="md:col-span-2 flex gap-4 mt-4">

            <button
              type="submit"
              className="bg-[#071B4A] hover:bg-[#0E2F6B] text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/jobs")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-xl font-semibold transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </AdminLayout>

  );

}
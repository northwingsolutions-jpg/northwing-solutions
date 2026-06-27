import { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import { addJob } from "../../services/jobService";

export default function AddJob() {

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

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addJob(job);

      alert("Job Added Successfully!");

      setJob({
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

    } catch (error) {
  console.error("Firebase Error:", error);
  alert(error.message);
}
  };

  return (
    <AdminLayout>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-[#071B4A]">
          Add New Job
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Create a new job opening.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >          <div>
            <label className="block font-semibold mb-2">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
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
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
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
              required
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#071B4A] outline-none"
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
              placeholder="e.g. 2-4 Years"
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
              placeholder="e.g. ₹6 LPA"
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
              placeholder="React, Java, AWS..."
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
          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-[#071B4A] hover:bg-[#0E2F6B] text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Save Job
            </button>

          </div>

        </form>

      </div>

    </AdminLayout>
  );
}
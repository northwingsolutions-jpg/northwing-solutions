import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getJobById } from "../services/jobService";

import {
  MapPin,
  Briefcase,
  Clock,
  IndianRupee,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function JobDetails() {

  const { jobId } = useParams();

  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadJob();

  }, []);

  const loadJob = async () => {

    try {

      const data = await getJobById(jobId);

      setJob(data);

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  if (loading) {

    return (

      <>

        <Navbar />

        <div className="max-w-7xl mx-auto py-24 text-center">

          <h2 className="text-3xl font-bold">

            Loading Job...

          </h2>

        </div>

        <Footer />

      </>

    );

  }

  if (!job) {

    return (

      <>

        <Navbar />

        <div className="max-w-7xl mx-auto py-24 text-center">

          <h2 className="text-4xl font-bold text-red-600">

            Job Not Found

          </h2>

        </div>

        <Footer />

      </>

    );

  }

  return (

    <>

      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">

            {job.title}

          </h1>

          <div className="flex flex-wrap gap-8 mt-8 text-lg">

            <div className="flex items-center gap-2">

              <MapPin size={20} />

              {job.location}

            </div>

            <div className="flex items-center gap-2">

              <Briefcase size={20} />

              {job.employmentType}

            </div>

            <div className="flex items-center gap-2">

              <Clock size={20} />

              {job.experience}

            </div>

          </div>

        </div>

      </section>

      {/* Job Details */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-10">
                              <h2 className="text-3xl font-bold text-[#071B4A]">
                Job Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div className="flex items-center gap-3">

                  <Building2 className="text-[#071B4A]" />

                  <div>

                    <p className="text-gray-500 text-sm">
                      Department
                    </p>

                    <p className="font-semibold">
                      {job.department}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <IndianRupee className="text-[#071B4A]" />

                  <div>

                    <p className="text-gray-500 text-sm">
                      Salary
                    </p>

                    <p className="font-semibold">
                      {job.salary}
                    </p>

                  </div>

                </div>

              </div>

              <h3 className="text-2xl font-bold text-[#071B4A] mt-12">

                Required Skills

              </h3>

              <p className="mt-4 text-gray-700 leading-8">

                {job.skills}

              </p>

              <h3 className="text-2xl font-bold text-[#071B4A] mt-12">

                Job Description

              </h3>

              <p className="mt-4 text-gray-700 leading-8 whitespace-pre-line">

                {job.description}

              </p>

            </div>

            {/* Apply Card */}

            <div>

              <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-28">

                <CheckCircle
                  className="text-green-600"
                  size={60}
                />

                <h2 className="text-3xl font-bold text-[#071B4A] mt-6">

                  Interested?

                </h2>

                <p className="text-gray-600 mt-4 leading-8">

                  Submit your application and our recruitment team
                  will review your profile.

                </p>

                <Link
                  to={`/careers/${job.id}/apply`}
                  className="block text-center mt-8 bg-[#071B4A] hover:bg-[#123C8A] text-white py-4 rounded-xl font-semibold transition"
                >
                  Apply Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}
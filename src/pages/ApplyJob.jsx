import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getJobById } from "../services/jobService";

export default function ApplyJob() {

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

            Loading...

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

          <h2 className="text-3xl font-bold text-red-600">

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

            Apply for

          </h1>

          <p className="text-3xl mt-6 text-teal-300 font-semibold">

            {job.title}

          </p>

        </div>

      </section>

      {/* Candidate Form */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white shadow-xl rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-[#071B4A] mb-10">

              Candidate Information

            </h2>

            <form
  action="https://formsubmit.co/northwingsolutions@gmail.com"
  method="POST"
  encType="multipart/form-data"
  className="space-y-8"
>

  <input
  type="hidden"
  name="_subject"
  value="New Job Application - NorthWing Solutions"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>

<input
  type="hidden"
  name="_next"
  value="https://northwing-solutions.vercel.app/success"
/>

<input
  type="hidden"
  name="Job Position"
  value={job.title}
/>

              {/* Row 1 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="font-semibold">

                    Full Name *

                  </label>

                  <input
  type="text"
  name="Full Name"
  className="w-full mt-2 border rounded-xl p-3"
  placeholder="Enter your full name"
/>

                </div>

                <div>

                  <label className="font-semibold">

                    Email Address *

                  </label>

                  <input
  type="email"
  name="Email"
  className="w-full mt-2 border rounded-xl p-3"
  placeholder="Enter your email"
/>

                </div>

              </div>

              {/* Row 2 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="font-semibold">

                    Mobile Number *

                  </label>

                  <input
                    type="text"
                    name="Mobile Number"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="Enter your mobile number"
                  />

                </div>

                <div>

                  <label className="font-semibold">

                    Current Company

                  </label>

                  <input
                    type="text"
                    name="Current Company"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="Current company"
                  />

                </div>

              </div>

              {/* Row 3 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="font-semibold">

                    Experience *

                  </label>

                  <input
                    type="text"
                    name="Experience"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="Example: 3 Years"
                  />

                </div>

                <div>

                  <label className="font-semibold">

                    Notice Period

                  </label>

                  <input
                    type="text"
                    name="Notice Period"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="30 Days"
                  />

                </div>

              </div>

              {/* Row 4 */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="font-semibold">

                    Current CTC

                  </label>

                  <input
                    type="text"
                    name="Current CTC"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="Current Salary"
                  />

                </div>

                <div>

                  <label className="font-semibold">

                    Expected CTC

                  </label>

                  <input
                    type="text"
                    name="Expected CTC"
                    className="w-full mt-2 border rounded-xl p-3"
                    placeholder="Expected Salary"
                  />

                </div>

              </div>

              {/* Resume */}

              <div>

                <label className="font-semibold">

                  Upload Resume *

                </label>

                <input
  type="file"
  name="Resume"
  className="w-full mt-2 border rounded-xl p-3"
  required
  accept=".pdf,.doc,.docx"
/>

              </div>

              {/* Notes */}

              <div>

                <label className="font-semibold">

                  Additional Notes

                </label>

                <textarea
  name="Additional Notes"
  rows="5"
  className="w-full mt-2 border rounded-xl p-3"
  placeholder="Anything you'd like us to know?"
/>

              </div>

              <button
                type="submit"
                className="w-full bg-[#071B4A] hover:bg-[#123C8A] text-white py-4 rounded-xl text-lg font-semibold transition"
              >

                Submit Application

              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

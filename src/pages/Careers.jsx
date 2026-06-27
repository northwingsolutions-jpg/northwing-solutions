import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Top Employers",
    text: "Work with leading companies across multiple industries.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    text: "Opportunities to build long-term successful careers.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    text: "Dedicated recruitment consultants supporting your journey.",
  },
  {
    icon: Briefcase,
    title: "Quality Opportunities",
    text: "Access exclusive openings matching your skills.",
  },
];

export default function Careers() {
    const [jobs, setJobs] = useState([]);

const [loading, setLoading] = useState(true);

useEffect(() => {

  loadJobs();

}, []);

const loadJobs = async () => {

  try {

    const data = await getJobs();

    const publishedJobs = data.filter(
      (job) => job.status === "Published"
    );

    setJobs(publishedJobs);

  } catch (error) {

    console.error(error);

  }

  setLoading(false);

};
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-teal-300 font-semibold">
            Careers
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            Build Your Career
            <span className="block text-teal-300">
              With NorthWing Solutions
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
            Discover exciting opportunities with leading organizations
            and take the next step in your professional journey.
          </p>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Why Choose NorthWing?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
                >

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#071B4A] flex items-center justify-center">

                    <Icon className="text-white" size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#071B4A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Open Positions */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Current Openings
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Explore our latest career opportunities.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

          {loading ? (

  <div className="col-span-2 text-center">

    <h2 className="text-2xl font-semibold">
      Loading Jobs...
    </h2>

  </div>

) : jobs.length === 0 ? (

  <div className="col-span-2 text-center">

    <h2 className="text-3xl font-bold text-[#071B4A]">
      No Open Positions
    </h2>

    <p className="text-gray-500 mt-4">
      Please check back later.
    </p>

  </div>

) : (

  jobs.map((job) => (

    <div
      key={job.id}
      className="border rounded-3xl p-8 hover:shadow-xl transition"
    >

      <h3 className="text-2xl font-bold text-[#071B4A]">
        {job.title}
      </h3>

      <div className="flex items-center gap-6 mt-5 text-gray-600">

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          {job.employmentType}
        </div>

      </div>

      <Link
  to={`/careers/${job.id}`}
  className="inline-block mt-8 bg-[#071B4A] hover:bg-[#123C8A] text-white px-6 py-3 rounded-xl transition"
>
  Apply Now
</Link>

    </div>

  ))

)}

          </div>

        </div>

      </section>

      {/* Hiring Process */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Recruitment Process
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Apply",
              "Screening",
              "Interview",
              "Offer",
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >

                <div className="w-14 h-14 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071B4A]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071B4A] text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <CheckCircle2
            size={70}
            className="mx-auto text-teal-400"
          />

          <h2 className="text-5xl font-bold mt-8">
            Ready To Build Your Career?
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-8">
            Submit your resume today and let our recruitment experts
            connect you with the right opportunity.
          </p>

          <button className="mt-10 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-xl font-semibold transition">
            Submit Resume
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}
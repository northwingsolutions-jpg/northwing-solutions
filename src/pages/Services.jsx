import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import services from "../Data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const process = [
  "Understand Client Requirements",
  "Talent Sourcing",
  "Candidate Screening",
  "Client Interviews",
  "Offer Management",
  "Successful Onboarding",
];

const benefits = [
  "Industry-focused recruitment specialists",
  "Quality-driven hiring process",
  "Faster turnaround time",
  "Dedicated recruitment consultants",
  "Transparent communication",
  "Long-term hiring partnership",
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-teal-300 font-semibold">
            Recruitment Solutions
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Strategic Talent Acquisition
            <span className="block text-teal-300">
              Tailored For Your Business
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
            We provide end-to-end recruitment services that help organizations
            hire exceptional professionals across multiple industries.
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Our Recruitment Services
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              We deliver customized recruitment solutions to help businesses
              build high-performing teams.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <div
                  key={service.id}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#071B4A] to-teal-500 flex items-center justify-center group-hover:scale-110 transition">

                    <Icon
                      className="text-white"
                      size={30}
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#071B4A]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {service.features.slice(0, 3).map((feature) => (

                      <span
                        key={feature}
                        className="bg-blue-50 text-[#071B4A] px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>

                    ))}

                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="mt-8 inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Recruitment Process */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Our Recruitment Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              A structured hiring approach ensuring quality and efficiency.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl shadow p-8 text-center"
              >

                <div className="w-16 h-16 rounded-full bg-[#071B4A] text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#071B4A]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Why Choose NorthWing Solutions?
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              We focus on delivering exceptional recruitment experiences through
              industry expertise, transparent communication and long-term
              partnerships.
            </p>

          </div>

          <div className="space-y-6">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow"
              >

                <CheckCircle2 className="text-teal-500" />

                <span className="text-lg text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071B4A] text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Looking for the Right Talent?
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-9">
            Let NorthWing Solutions help you build a skilled workforce with
            recruitment solutions tailored to your business.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Request Consultation
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

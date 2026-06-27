import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] to-[#123C8A] text-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold">
            About NorthWing Solutions
          </h1>

          <p className="mt-8 text-xl max-w-3xl text-gray-200 leading-9">
            We connect exceptional talent with forward-thinking
            organizations through strategic recruitment,
            executive search and workforce solutions.
          </p>

        </div>

      </section>

      {/* Who We Are */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#071B4A]">
              Your Trusted Recruitment Partner
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg">
              NorthWing Solutions is a strategic recruitment and talent
              acquisition company helping businesses hire exceptional
              professionals across IT, Engineering, Manufacturing,
              Healthcare and Corporate domains.
            </p>

            <p className="mt-6 text-gray-600 leading-9 text-lg">
              Our focus is to build long-term partnerships by delivering
              quality talent, faster hiring and transparent recruitment
              processes.
            </p>

          </div>

          <div className="bg-[#F8FAFC] rounded-3xl p-12 shadow-xl">

            <h3 className="text-3xl font-bold text-[#071B4A]">
              Why Companies Choose Us
            </h3>

            <ul className="mt-8 space-y-5 text-lg">

              <li>✔ Industry-specific recruitment expertise</li>

              <li>✔ Global talent network</li>

              <li>✔ Faster turnaround time</li>

              <li>✔ Dedicated recruitment consultants</li>

              <li>✔ Quality-driven hiring process</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl p-10 shadow">

            <h2 className="text-3xl font-bold text-[#071B4A]">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To empower businesses by delivering exceptional talent
              through innovative, ethical and efficient recruitment
              solutions.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow">

            <h2 className="text-3xl font-bold text-[#071B4A]">
              Our Vision
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To become one of the world's most trusted talent
              acquisition partners by creating meaningful careers
              and successful organizations.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071B4A] text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Let's Build Your Team Together
          </h2>

          <p className="mt-8 text-xl text-gray-300">
            Whether you're hiring your next leader or scaling an
            entire workforce, NorthWing Solutions is ready to help.
          </p>

          <Link
  to="/contact"
  className="inline-block mt-10 bg-teal-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-600 transition"
>
  Contact Us
</Link>

        </div>

      </section>

      <Footer />
    </>
  );
}
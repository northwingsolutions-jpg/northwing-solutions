import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1]">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div data-aos="fade-right">

            <span className="inline-block bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              Trusted Recruitment Partner
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Connecting
              <span className="block text-teal-300">
                Talent with Opportunity
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9 max-w-xl">
              NorthWing Solutions helps organizations hire exceptional
              professionals while empowering candidates to build successful
              careers across IT, Engineering, Manufacturing, Healthcare,
              Banking and more.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition flex items-center gap-2"
              >
                Request Consultation
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/careers"
                className="border border-white text-white hover:bg-white hover:text-[#071B4A] px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Careers
              </Link>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-14">

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-teal-300" />
                <span>Industry Experts</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-teal-300" />
                <span>Fast Hiring Process</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-teal-300" />
                <span>Global Talent Network</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-teal-300" />
                <span>Dedicated Consultants</span>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div
            className="relative"
            data-aos="fade-left"
          >

            <div className="bg-white rounded-3xl shadow-2xl p-10">

              <h3 className="text-3xl font-bold text-[#071B4A]">
                Why NorthWing?
              </h3>

              <div className="space-y-6 mt-8">

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-xl bg-[#071B4A] flex items-center justify-center">

                    <Users className="text-white" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Expert Recruiters
                    </h4>

                    <p className="text-gray-600">
                      Experienced consultants across industries.
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center">

                    <Briefcase className="text-white" />

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      Quality Hiring
                    </h4>

                    <p className="text-gray-600">
                      Delivering top talent to leading organizations.
                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom Card */}
              <div className="mt-10 rounded-2xl bg-[#F8FAFC] p-6">

                <h4 className="font-bold text-[#071B4A]">
                  Our Commitment
                </h4>

                <p className="mt-3 text-gray-600 leading-7">
                  We build long-term partnerships with businesses and
                  professionals by delivering reliable, efficient and
                  customized recruitment solutions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
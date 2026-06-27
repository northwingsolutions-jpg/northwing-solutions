import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Laptop,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Cog,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    icon: Laptop,
    title: "Information Technology",
    description:
      "Recruitment for Software Development, Cloud, DevOps, Cybersecurity, AI, Data Engineering and IT Support roles.",
  },
  {
    icon: Cog,
    title: "Engineering",
    description:
      "Hiring professionals across Mechanical, Electrical, Civil, Automotive and Industrial Engineering domains.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Talent solutions for production, quality, maintenance, operations and plant management teams.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Recruitment support for hospitals, diagnostics, pharmaceutical and healthcare organizations.",
  },
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description:
      "Hiring experienced professionals across banking, finance, insurance and fintech organizations.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Workforce solutions for retail operations, sales, merchandising and customer experience roles.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Recruitment for procurement, warehousing, transportation and supply chain management professionals.",
  },
];

const strengths = [
  "Industry-specific hiring expertise",
  "Access to quality talent pools",
  "Faster recruitment turnaround",
  "Customized hiring strategies",
  "Dedicated recruitment consultants",
  "Long-term hiring partnerships",
];

export default function Industries() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-teal-300 font-semibold">
            Industries We Serve
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Recruitment Solutions
            <span className="block text-teal-300">
              Across Diverse Industries
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
            We understand the unique hiring challenges of every industry and
            provide specialized recruitment solutions that help organizations
            attract the right talent.
          </p>

        </div>

      </section>

      {/* Industries */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Industries We Support
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Our recruitment expertise spans multiple industries, enabling us
              to deliver talent that matches your business requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {industries.map((industry, index) => {

              const Icon = industry.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#071B4A] to-teal-500 flex items-center justify-center">

                    <Icon className="text-white" size={30} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#071B4A]">
                    {industry.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {industry.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Why Industry Expertise */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-bold text-[#071B4A]">
              Why Industry Expertise Matters
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Every industry has unique hiring needs. Our recruitment consultants
              understand market trends, technical skills and business expectations
              to deliver the best talent for your organization.
            </p>

          </div>

          <div className="space-y-6">

            {strengths.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 bg-[#F8FAFC] rounded-2xl p-6 shadow"
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
            Looking for Industry-Specific Talent?
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-9">
            Partner with NorthWing Solutions to build a skilled workforce
            tailored to your industry and business goals.
          </p>

          <button className="mt-10 bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-xl font-semibold transition">
            Contact Our Team
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}
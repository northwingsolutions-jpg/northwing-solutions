import { Link } from "react-router-dom";
import {
  Laptop,
  Factory,
  HeartPulse,
  Landmark,
  Truck,
  Cog,
} from "lucide-react";

const industries = [
  {
    icon: Laptop,
    title: "Information Technology",
  },
  {
    icon: Cog,
    title: "Engineering",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
  },
  {
    icon: Truck,
    title: "Logistics",
  },
];

export default function HomeIndustries() {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[3px] text-teal-500 font-semibold">
            Industries
          </p>

          <h2 className="text-5xl font-bold text-[#071B4A] mt-4">
            Industries We Serve
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            We provide recruitment solutions across diverse industries by
            connecting businesses with highly skilled professionals.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
              >

                <div className="w-16 h-16 rounded-xl bg-[#071B4A] flex items-center justify-center">

                  <Icon className="text-white" size={30} />

                </div>

                <h3 className="text-2xl font-bold mt-6 text-[#071B4A]">
                  {industry.title}
                </h3>

              </div>
            );
          })}

        </div>

        <div className="text-center mt-16">

          <Link
            to="/industries"
            className="bg-[#071B4A] hover:bg-[#0d2c73] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View All Industries →
          </Link>

        </div>

      </div>

    </section>
  );
}
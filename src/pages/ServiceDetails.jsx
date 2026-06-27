import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import services from "../Data/services";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <div className="mt-10 flex items-center gap-6">

            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">

              <Icon size={40} className="text-white" />

            </div>

            <div>

              <h1 className="text-5xl font-bold">
                {service.title}
              </h1>

              <p className="mt-4 text-xl text-gray-200 max-w-3xl">
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>

            <h2 className="text-4xl font-bold text-[#071B4A]">
              Service Overview
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              {service.description}
            </p>

          </div>

          <div>

            <div className="bg-[#F8FAFC] rounded-3xl p-8 shadow-lg">

              <h3 className="text-3xl font-bold text-[#071B4A]">
                Key Features
              </h3>

              <div className="space-y-5 mt-8">

                {service.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="text-teal-500 mt-1"
                      size={22}
                    />

                    <span className="text-gray-700 text-lg">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071B4A] text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Hire the Right Talent?
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-9">
            Speak with our recruitment specialists and discover how
            NorthWing Solutions can help your business grow.
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

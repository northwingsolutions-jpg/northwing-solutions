import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import services from "../Data/services";

export default function Services() {
  return (
    <section
      className="py-24 bg-[#F8FAFC]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-teal-500 font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-[#071B4A] mt-4">
            Recruitment Solutions Designed For Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            NorthWing Solutions provides end-to-end recruitment services that
            help organizations attract, hire and retain exceptional talent
            across multiple industries.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#071B4A] to-teal-500 flex items-center justify-center group-hover:scale-110 transition">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-[#071B4A]">

                  {service.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-600 leading-8">

                  {service.shortDescription}

                </p>

                {/* Features */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {service.features
                    .slice(0, 3)
                    .map((feature) => (

                      <span
                        key={feature}
                        className="text-sm bg-blue-50 text-[#071B4A] px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>

                    ))}

                </div>

                {/* Read More */}

                <Link
                  to={`/services/${service.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all"
                >
                  Read More

                  <ArrowRight size={18} />

                </Link>

              </div>

            );

          })}

        </div>

        {/* View All */}

        <div className="text-center mt-16">

          <Link
            to="/services"
            className="inline-flex items-center bg-[#071B4A] hover:bg-[#0d2c73] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            View All Services

            <ArrowRight
              className="ml-2"
              size={18}
            />

          </Link>

        </div>

      </div>
    </section>
  );
}

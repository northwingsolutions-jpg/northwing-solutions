import {
  Globe2,
  Clock3,
  ShieldCheck,
  Users,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Talent Network",
    description:
      "Access to highly qualified professionals across multiple countries and industries.",
  },
  {
    icon: Clock3,
    title: "Faster Hiring",
    description:
      "Reduce recruitment time with our proven hiring process and dedicated recruiters.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Screening",
    description:
      "Every candidate undergoes a structured evaluation before reaching your organization.",
  },
  {
    icon: Users,
    title: "Dedicated Recruitment Team",
    description:
      "A specialized recruitment consultant works closely with your business throughout the hiring journey.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Workforce",
    description:
      "Whether hiring one employee or building an entire team, we scale with your business.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Partnership",
    description:
      "Building long-term relationships through transparency, quality and consistent delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">
              Why Choose NorthWing
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#071B4A] leading-tight">

              Your Strategic Recruitment Partner

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              At NorthWing Solutions, we believe recruitment is more than
              filling positions. We create long-term partnerships that help
              organizations attract, hire and retain exceptional talent.

            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow">

                <h3 className="text-4xl font-bold text-[#071B4A]">
                  500+
                </h3>

                <p className="mt-2 text-gray-600">
                  Successful Placements
                </p>

              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow">

                <h3 className="text-4xl font-bold text-[#071B4A]">
                  Global
                </h3>

                <p className="mt-2 text-gray-600">
                  Recruitment Reach
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <div
                  key={index}
                  className="flex gap-5 bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#071B4A] to-teal-500 flex items-center justify-center flex-shrink-0">

                    <Icon className="text-white" size={28} />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#071B4A]">

                      {feature.title}

                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">

                      {feature.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}
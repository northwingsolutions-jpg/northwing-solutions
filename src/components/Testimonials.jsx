import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "HR Director",
    company: "Global Technology Company",
    review:
      "NorthWing Solutions consistently delivers high-quality candidates with an efficient recruitment process. They have become our trusted hiring partner.",
  },
  {
    name: "Talent Acquisition Lead",
    company: "Engineering Enterprise",
    review:
      "Their responsiveness, professionalism and industry expertise significantly reduced our hiring timelines while improving candidate quality.",
  },
  {
    name: "Business Manager",
    company: "Manufacturing Organization",
    review:
      "A reliable recruitment partner who understands our business requirements and consistently exceeds expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#071B4A]">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Building long-term partnerships through quality recruitment,
            transparency and consistent delivery.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-[#F8FAFC] rounded-3xl p-8 shadow hover:shadow-2xl transition duration-300"
            >

              <Quote className="text-teal-500" size={40} />

              <p className="mt-6 text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl text-[#071B4A]">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.company}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
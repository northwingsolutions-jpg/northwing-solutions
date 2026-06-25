import { CheckCircle } from "lucide-react";

const points = [
  "Speed with Accountability",
  "Quality Talent Delivery",
  "Flexible Engagement Models",
  "Industry-Focused Hiring",
  "Partnership-Led Execution",
  "Scalable Workforce Solutions",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why NorthWing Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {points.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-slate-50 p-5 rounded-xl"
            >
              <CheckCircle className="text-green-600" />
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
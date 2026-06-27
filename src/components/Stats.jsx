import {
  User,
  Briefcase,
  Globe,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: User,
    number: "500+",
    title: "Successful Placements",
  },
  {
    icon: Briefcase,
    number: "150+",
    title: "Hiring Partners",
  },
  {
    icon: Globe,
    number: "8+",
    title: "Industries Served",
  },
  {
    icon: Award,
    number: "10+",
    title: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#071B4A] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-[#071B4A] to-teal-500 flex items-center justify-center">
                  <Icon className="text-white" size={30} />
                </div>

                <h2 className="text-5xl font-bold text-[#071B4A] mt-6">
                  {item.number}
                </h2>

                <p className="text-gray-600 mt-4 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
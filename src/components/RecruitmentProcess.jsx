import {
  Search,
  Users,
  FileCheck,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand Requirements",
    description:
      "We work closely with clients to understand hiring needs, company culture and role expectations.",
  },
  {
    icon: Users,
    title: "Source & Screen",
    description:
      "Our recruitment experts identify, evaluate and shortlist highly qualified candidates.",
  },
  {
    icon: FileCheck,
    title: "Interview & Assessment",
    description:
      "Candidates undergo technical and HR evaluation before being presented to the client.",
  },
  {
    icon: Handshake,
    title: "Successful Placement",
    description:
      "We support onboarding and ensure a smooth hiring experience for both employer and candidate.",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-[3px] text-teal-500 font-semibold">
            Our Process
          </p>

          <h2 className="text-5xl font-bold text-[#071B4A] mt-4">
            How We Hire the Right Talent
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Our structured recruitment process ensures quality hiring,
            faster turnaround time and the perfect match for every role.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-[#F8FAFC] rounded-3xl p-8 shadow hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#071B4A] flex items-center justify-center mt-4">
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-[#071B4A] mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
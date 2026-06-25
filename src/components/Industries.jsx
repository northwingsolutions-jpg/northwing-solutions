const industries = [
  "Information Technology",
  "BFSI",
  "Healthcare",
  "Engineering",
  "Manufacturing",
  "Retail",
  "Telecom",
  "GCC",
];

const Industries = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {industry}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Industries;
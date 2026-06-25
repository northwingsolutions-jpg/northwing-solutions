const Services = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">

          Our Services

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-3">
              Talent Acquisition
            </h3>
            <p>
              Permanent Hiring, Executive Search and Niche Recruitment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-3">
              Workforce Solutions
            </h3>
            <p>
              Contract Staffing, Payroll Staffing and RPO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-3">
              HR Support
            </h3>
            <p>
              Talent Mapping and Employer Branding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-3">
              Technology Services
            </h3>
            <p>
              Technology Staffing and IT Consulting.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;
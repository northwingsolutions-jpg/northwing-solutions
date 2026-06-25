import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-8">
            Careers
          </h1>

          <p>
            Explore exciting career opportunities with our clients.
          </p>

          <div className="mt-10 bg-white shadow p-6 rounded-xl">

            <h2 className="text-xl font-bold">
              Senior React Developer
            </h2>

            <p>Location: Remote</p>

            <p>Experience: 5+ Years</p>

            <button className="mt-4 bg-[#0B2A6D] text-white px-4 py-2 rounded">
              Apply Now
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Careers;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-10">
            About NorthWing
          </h1>

          <p className="text-lg leading-8">
            NorthWing Solutions Pvt Ltd is a strategic talent acquisition,
            staffing and business solutions partner helping organizations
            build high-performing teams and accelerate growth.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default About;
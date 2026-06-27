import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import HomeIndustries from "../components/HomeIndustries";
import RecruitmentProcess from "../components/RecruitmentProcess";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HomeIndustries />
      <WhyChooseUs />
      <RecruitmentProcess />
      <Testimonials />
      <TrustedBy />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">

        <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl text-center">

          <CheckCircle2
            size={80}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold text-[#071B4A] mt-8">
            Thank You!
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Your request has been submitted successfully.
          </p>

          <p className="text-gray-600 mt-2">
            Our team will contact you shortly.
          </p>

          <Link
            to="/"
            className="inline-block mt-10 bg-[#071B4A] hover:bg-[#123C8A] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Back to Home
          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}
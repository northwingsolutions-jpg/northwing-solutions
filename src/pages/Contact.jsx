import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#071B4A] via-[#123C8A] to-[#1E4FA1] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-teal-300 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            Let's Build Your
            <span className="block text-teal-300">
              Workforce Together
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
            Whether you're hiring top talent or searching for your next
            opportunity, our recruitment experts are here to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <Mail className="mx-auto text-teal-500" size={38} />

              <h3 className="text-2xl font-bold mt-6 text-[#071B4A]">
                Email
              </h3>

              <p className="mt-4 text-gray-600">
                info@northwingsolutions.com
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <Phone className="mx-auto text-teal-500" size={38} />

              <h3 className="text-2xl font-bold mt-6 text-[#071B4A]">
                Phone
              </h3>

              <p className="mt-4 text-gray-600">
                +91 XXXXX XXXXX
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <MapPin className="mx-auto text-teal-500" size={38} />

              <h3 className="text-2xl font-bold mt-6 text-[#071B4A]">
                Office
              </h3>

              <p className="mt-4 text-gray-600">
                Chennai, Tamil Nadu, India
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <Globe className="mx-auto text-teal-500" size={38} />

              <h3 className="text-2xl font-bold mt-6 text-[#071B4A]">
                Website
              </h3>

              <p className="mt-4 text-gray-600">
                www.northwingsolutions.com
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <h2 className="text-5xl font-bold text-[#071B4A]">
                Get In Touch
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">

                We'd love to hear from you. Fill out the enquiry form
                and one of our recruitment consultants will contact you
                shortly.

              </p>

              <div className="mt-12 space-y-8">

                <div className="flex gap-5">

                  <Clock className="text-teal-500" />

                  <div>

                    <h3 className="font-semibold text-xl">
                      Working Hours
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Monday - Friday
                    </p>

                    <p className="text-gray-600">
                      9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Phone className="text-teal-500" />

                  <div>

                    <h3 className="font-semibold text-xl">
                      Call Us
                    </h3>

                    <p className="text-gray-600 mt-2">
                      +91 XXXXX XXXXX
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Mail className="text-teal-500" />

                  <div>

                    <h3 className="font-semibold text-xl">
                      Email
                    </h3>

                    <p className="text-gray-600 mt-2">
                      info@northwingsolutions.com
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-[#F8FAFC] rounded-3xl shadow-lg p-10">

              <form
  action="https://formsubmit.co/northwingsolutions@gmail.com"
  method="POST"
  className="space-y-6"
>
    <input
  type="hidden"
  name="_subject"
  value="New Contact Enquiry - NorthWing Solutions"
/>

<input
  type="hidden"
  name="_captcha"
  value="false"
/>

<input
  type="hidden"
  name="_template"
  value="table"
/>

<input
  type="hidden"
  name="_next"
  value="https://northwing-solutions.vercel.app/success"
/>

                <input
  type="text"
  name="Full Name"
  placeholder="Full Name"
  className="w-full border rounded-xl p-4"
  required
/>

               <input
  type="email"
  name="Email"
  placeholder="Email Address"
  className="w-full border rounded-xl p-4"
  required
/>

                <input
  type="text"
  name="Phone Number"
  placeholder="Phone Number"
  className="w-full border rounded-xl p-4"
  required
/>

               <input
  type="text"
  name="Company Name"
  placeholder="Company Name"
  className="w-full border rounded-xl p-4"
/>

               <textarea
  name="Message"
  rows="6"
  placeholder="Your Message"
  className="w-full border rounded-xl p-4"
  required
/>

                <button
  type="submit"
  className="w-full bg-[#071B4A] hover:bg-[#123C8A] text-white py-4 rounded-xl font-semibold transition"
>
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe
              title="NorthWing Solutions"
              src="https://www.google.com/maps?q=Chennai&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
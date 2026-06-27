import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  ChevronRight,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Executive Search",
    "IT Recruitment",
    "Engineering Recruitment",
    "Contract Staffing",
    "RPO Solutions",
  ];

  return (
    <footer
      className="bg-[#06173F] text-white"
      data-aos="fade-up"
    >
      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <img
              src="/logo.png"
              alt="NorthWing Solutions"
              className="h-16"
            />

            <p className="mt-6 text-gray-300 leading-8">

              NorthWing Solutions is a trusted recruitment and talent
              acquisition partner helping organizations hire the right
              professionals across IT, Engineering, Manufacturing,
              Healthcare, Banking and many more industries.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition"
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition"
                  >

                    <ChevronRight size={18} />

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service, index) => (

                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >

                  <ChevronRight size={18} />

                  {service}

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-7">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Mail className="text-teal-400 mt-1" />

                <span className="text-gray-300">
                  info@northwingsolutions.com
                </span>

              </div>

              <div className="flex gap-4">

                <Phone className="text-teal-400 mt-1" />

                <span className="text-gray-300">
                  +91 XXXXX XXXXX
                </span>

              </div>

              <div className="flex gap-4">

                <Globe className="text-teal-400 mt-1" />

                <span className="text-gray-300">
                  www.northwingsolutions.com
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-teal-400 mt-1" />

                <span className="text-gray-300">
                  Chennai, Tamil Nadu, India
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-sm text-center">

            © {new Date().getFullYear()} NorthWing Solutions Private Limited.
            All Rights Reserved.

          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="bg-teal-500 hover:bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center transition"
          >

            <ArrowUp size={20} />

          </button>

        </div>

      </div>

    </footer>
  );
}
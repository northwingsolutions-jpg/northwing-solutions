import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="NorthWing Solutions"
              className="h-16 lg:h-18 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative font-semibold transition duration-300 ${
                    isActive
                      ? "text-[#143C8C]"
                      : "text-gray-700 hover:text-[#143C8C]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-teal-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>

            ))}

          </nav>

          {/* CTA Button */}

          <div className="hidden lg:block">

            <Link
              to="/contact"
              className="bg-[#143C8C] hover:bg-[#0E2F6B] text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              Request Consultation
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-[#143C8C]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="bg-white border-t border-gray-100 shadow-lg">

          <div className="flex flex-col px-6 py-6 space-y-5">

            {navItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-[#143C8C]"
                      : "text-gray-700 hover:text-[#143C8C]"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#143C8C] hover:bg-[#0E2F6B] text-white text-center py-3 rounded-xl font-semibold transition"
            >
              Request Consultation
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

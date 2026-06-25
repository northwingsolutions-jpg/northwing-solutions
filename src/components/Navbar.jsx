import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="NorthWing"
              className="h-12"
            />

            <div>
              <h2 className="font-bold text-[#0B2A6D]">
                NorthWing Solutions
              </h2>

              <p className="text-xs text-slate-500">
                Connecting Talent. Building Futures.
              </p>
            </div>

          </div>

          <div className="hidden md:flex gap-8">

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Services</a>

            <a href="#">Industries</a>

            <a href="#">Careers</a>

            <a href="#">Contact</a>

          </div>

          <button className="hidden md:block bg-[#0B2A6D] text-white px-5 py-2 rounded-lg">
            Request Consultation
          </button>

          <Menu className="md:hidden" />

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
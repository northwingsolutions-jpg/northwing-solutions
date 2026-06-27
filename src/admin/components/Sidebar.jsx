import {
  LayoutDashboard,
  BriefcaseBusiness,
  Mail,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase/auth";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Jobs",
      path: "/admin/jobs",
      icon: BriefcaseBusiness,
    },
    {
      title: "Contact Messages",
      path: "/admin/contacts",
      icon: Mail,
    },
    {
      title: "Applications",
      path: "/admin/applications",
      icon: FileText,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const logout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  return (
    <>
      {/* Mobile Toggle */}

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#071B4A] text-white p-2 rounded-lg shadow-lg"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}

      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-72 bg-gradient-to-b from-[#071B4A] to-[#0E2F6B] text-white shadow-2xl transform transition-transform duration-300 z-40

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-8 border-b border-blue-700">

          <h1 className="text-2xl font-bold">
            NorthWing
          </h1>

          <p className="text-blue-200 mt-1 text-sm">
            Recruitment Management
          </p>

        </div>

        <nav className="mt-8 px-4 space-y-2">
                      {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#071B4A] shadow-lg font-semibold"
                      : "hover:bg-blue-800 text-gray-200"
                  }`
                }
              >

                <Icon size={22} />

                <span>{item.title}</span>

              </NavLink>

            );

          })}

        </nav>

        {/* Logout */}

        <div className="absolute bottom-8 left-0 w-full px-4">

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition"
          >

            <LogOut size={20} />

            Logout

          </button>

          <p className="text-center text-xs text-blue-200 mt-6">
            Version 1.0
          </p>

          <p className="text-center text-xs text-blue-300 mt-1">
            © 2026 NorthWing Solutions
          </p>

        </div>

      </aside>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

    </>
  );
}
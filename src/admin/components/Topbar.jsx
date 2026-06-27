import { Bell, UserCircle } from "lucide-react";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white shadow-sm border-b px-8 py-5 flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-[#071B4A]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          {today}
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">

          <Bell className="text-gray-600" size={24} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            className="text-[#071B4A]"
            size={42}
          />

          <div>

            <h3 className="font-semibold text-[#071B4A]">
              Administrator
            </h3>

            <p className="text-sm text-gray-500">
              NorthWing Solutions
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
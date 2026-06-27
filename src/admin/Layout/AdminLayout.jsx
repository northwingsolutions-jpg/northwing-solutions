import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 lg:ml-0">

        <Topbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}
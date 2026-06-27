import AdminLayout from "../layout/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>

      <div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <h2 className="text-gray-500 text-sm">
              Total Jobs
            </h2>

            <h1 className="text-4xl font-bold text-[#071B4A] mt-4">
              0
            </h1>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <h2 className="text-gray-500 text-sm">
              Applications
            </h2>

            <h1 className="text-4xl font-bold text-[#071B4A] mt-4">
              0
            </h1>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <h2 className="text-gray-500 text-sm">
              Contact Messages
            </h2>

            <h1 className="text-4xl font-bold text-[#071B4A] mt-4">
              0
            </h1>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <h2 className="text-gray-500 text-sm">
              Active Jobs
            </h2>

            <h1 className="text-4xl font-bold text-[#071B4A] mt-4">
              0
            </h1>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-[#071B4A]">
            Recent Activity
          </h2>

          <p className="text-gray-500 mt-4">
            No recent activity available.
          </p>

        </div>

      </div>

    </AdminLayout>
  );
}
const items = [
  "IT Services",
  "Engineering",
  "Manufacturing",
  "Healthcare",
  "Banking",
  "Retail",
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-[#071B4A] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Supporting Organizations Across Industries
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Delivering recruitment excellence for businesses of every size.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {items.map((item) => (

            <div
              key={item}
              className="bg-white/10 rounded-2xl py-8 text-center hover:bg-white/20 transition"
            >
              <span className="font-semibold">
                {item}
              </span>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
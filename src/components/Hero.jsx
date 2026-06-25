const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0B2A6D] to-[#1E5CB3] text-white">

      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Guiding Talent.
            <br />
            Powering Innovation.

          </h1>

          <p className="mt-8 text-xl text-slate-200">

            NorthWing Solutions is a strategic talent acquisition,
            staffing and business solutions partner helping
            organizations hire better, build stronger teams
            and scale with confidence.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-white text-[#0B2A6D] px-6 py-3 rounded-lg font-semibold">

              Talk To Us

            </button>

            <button className="border border-white px-6 py-3 rounded-lg">

              Submit Requirement

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
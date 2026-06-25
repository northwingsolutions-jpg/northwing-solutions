const ContactForm = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Request Consultation
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Company Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <select className="w-full border p-3 rounded-lg">
            <option>Talent Acquisition</option>
            <option>Workforce Solutions</option>
            <option>HR Support</option>
            <option>Technology Services</option>
          </select>

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-[#0B2A6D] text-white px-6 py-3 rounded-lg"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;
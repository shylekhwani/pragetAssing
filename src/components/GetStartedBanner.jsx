const GetStartedBanner = () => {
  return (
    <div>
      <section className="w-full flex justify-center items-center py-20 px-6 bg-white">
        <div
          className="relative w-full max-w-5xl h-100 rounded-[2.5rem] p-12 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, #FF8AA0 0%, #C792E9 50%, #6AA9FF 100%)",
          }}
        >
          {/* dotted overlay */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* gemini */}
          <div className="absolute bottom-6 left-6 w-8 h-8 ">
            <img
              src="/icons8-gemini-ai-50.png"
              alt="decorative star"
              className="w-full h-full object-contain text-amber-50"
            />
          </div>

          <div className="absolute top-6 right-6 w-8 h-8 ">
            <img
              src="/icons8-gemini-ai-50.png"
              alt="decorative star"
              className="w-full h-full object-contain  text-amber-50"
            />
          </div>

          {/* content */}
          <div className="relative z-10">
            <p className="text-white/90 text-sm md:text-base mb-3">
              Our workflows, powered by AI — simple, fast, reliable
            </p>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-snug">
              Ready to Automate Your <br className="hidden md:block" /> Business
              with AI?
            </h2>

            <button className="mt-8 px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedBanner;

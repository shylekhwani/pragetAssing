const HeroSection = () => {
  return (
    <section className="text-center bg-[#FAFAFA] relative overflow-hidden py-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Top Tag */}
        <div className="inline-block bg-linear-to-r from-purple-500/10 to-blue-500/10 text-blue-700 text-sm font-medium rounded-full px-4 py-1 mb-4">
          ✨ Trusted by businesses in finance, healthcare, logistics, retail,
          and beyond.
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700 mb-6 leading-tight">
          Automate, Accelerate & Scale
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Unlock the future of work with AI Agents, Workflow Automation, and
          Smart Data Architecture. From startups to enterprises, we help
          businesses cut costs, save time, and grow faster without the tech
          headaches.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-linear-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90">
            Get Started
          </button>
          <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold bg-white hover:bg-gray-50">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

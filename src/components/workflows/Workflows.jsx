import { useState } from "react";

const Workflows = () => {
  const [activeTab, setActiveTab] = useState("Workflow Automation");

  const tabs = ["Workflow Automation", "AI Agents", "Data & System Architect"];

  return (
    <section className="text-center py-20 px-6 bg-linear-to-b from-white to-[#F0F7FF]">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        <span className="text-blue-600">Workflows</span> that work for you
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Automate repetitive tasks, empower AI-driven decision-making, and build
        a secure, scalable digital backbone so your business runs faster,
        smarter, and more reliably than ever.
      </p>

      {/* Pills */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <div className="bg-white border border-gray-200 rounded-full px-2 py-2 flex items-center shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-linear-to-r from-blue-600 to-sky-400 text-white shadow"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;

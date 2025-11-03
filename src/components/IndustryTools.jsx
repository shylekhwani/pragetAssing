import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function IndustryTools() {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence");

  const tabs = [
    "Manufacturing & Innovation",
    "Government & Public Sector",
    "Artificial Intelligence",
    "Education",
    "Media & Entertainment",
  ];

  // overlay text per tab
  const tabTexts = {
    "Artificial Intelligence":
      "AI that learns, adapts, and powers innovation across industries.",
    "Manufacturing & Innovation":
      "Industrial solutions powered by automation and AI intelligence.",
    "Government & Public Sector":
      "Secure, compliant AI solutions for public sector efficiency.",
    Education: "Adaptive learning and insights to power modern education.",
    "Media & Entertainment": "Creative AI tools to scale media production.",
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* ---------- Tabs ---------- */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-500 font-medium text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 transition-all duration-200 ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/humanoid-robot-programming-code.jpg"
              alt="AI Industry Visual"
              className="w-full h-[380px] object-cover"
            />

            {/* overlay gradient at TOP (subtle) */}
            <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* overlay text + Read More at TOP (above gradient) */}
            <div className="absolute left-6 top-4 right-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-white text-sm md:text-base font-medium max-w-xl">
                {tabTexts[activeTab]}
              </p>

              <div className="flex items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* centered semi-transparent gray play button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                aria-label="Play"
                className="pointer-events-auto bg-gray-800/35 hover:bg-gray-800/45 text-white rounded-full p-4 shadow-lg transition"
                style={{ backdropFilter: "blur(4px)" }}
              >
                {/* play svg */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="white" fillOpacity="0.92" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tools Grid  */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Here are the <span className="text-blue-600 underline">Tools</span>{" "}
            & Software We Use
          </h2>

          <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden shadow-md">
            <img
              src="/PragetX Website Version Light (1).png"
              alt="Tools and Software"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

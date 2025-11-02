import React from "react";
import WorkFlowRight from "./WorkFlowRight";

const WorkFlowLeft = () => {
  return (
    <div>
      <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-5">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 font-semibold px-4 py-1 rounded-full text-sm">
            ✦ Smart Automation
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-blue-600">Workflows</span> That Run Themselves
          </h2>

          <p className="text-gray-600 text-lg">
            Automation replaces manual, repetitive work with smart, AI-driven
            workflows that run effortlessly.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <WorkFlowRight />
        </div>
      </section>
    </div>
  );
};

export default WorkFlowLeft;

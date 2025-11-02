import { useState } from "react";
import FlowTag from "../triggerAct/FlowTag";
import GrowthStep from "./GrowthStep";

const Growth = () => {
  const [active, setActive] = useState(1);

  const steps = [
    "Reduce repetitive admin tasks by up to 80%.",
    "Average 22% reduction in operating costs.",
    "Teams scale without adding headcount.",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="text-center mb-14">
        <FlowTag label="Faster Growth" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Less Busywork.{" "}
          <span className="bg-linear-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            More Growth.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left column: steps */}
        <div className="flex flex-col gap-5">
          {steps.map((text, i) => (
            <GrowthStep
              key={i}
              number={i + 1}
              text={text}
              isActive={active === i + 1}
              onClick={() => setActive(i + 1)}
            />
          ))}
        </div>

        {/* Right column: placeholder (replace with image/video) */}
        <div className="bg-gray-900 w-full h-[280px] md:h-[340px] rounded-3xl shadow-md"></div>
      </div>
    </section>
  );
};

export default Growth;

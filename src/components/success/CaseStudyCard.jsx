import { ArrowRight } from "lucide-react";
import FlowTag from "../triggerAct/FlowTag";

const CaseStudyCard = ({
  tag,
  logo,
  title,
  highlight,
  description,
  tools,
  image,
  flag,
}) => {
  return (
    <div className="bg-transparent rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
      <div className="flex-1 min-w-0">
        <div className="mb-4">
          <FlowTag label={tag} />
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-27 h-16 flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {title} <span className="text-blue-600"> {highlight}</span>
          </h3>
        </div>

        <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {tools.map((t, i) => (
            <span key={i}>
              <FlowTag label={t} />
            </span>
          ))}
        </div>

        {/* read case study */}
        <button className="text-blue-600 font-medium inline-flex items-center gap-2 text-sm hover:underline">
          Read Case Study <ArrowRight size={14} />
        </button>
      </div>

      <div className="relative w-full md:w-[46%] shrink-0">
        {/* image container with inner white ring */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          {/* outer radius is larger - match screenshot's rounded corners */}
          <div className="rounded-[20px] overflow-hidden border border-white/70">
            <img
              src={image}
              alt="case visual"
              className="w-full h-[300px] md:h-80 object-cover block"
            />
          </div>

          {/* flag badge */}
          <div className="absolute -top-3 -left-3">
            <div className="bg-white rounded-full p-1 shadow-md border border-gray-100">
              <img
                src={flag}
                alt="flag"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* nav arrows */}
        <div className="flex items-center justify-start gap-6 mt-6 -ml-10">
          <button className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-700"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-700"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;

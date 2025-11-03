import { ArrowRight } from "lucide-react";

const SuccessHeader = ({ title, highlight, subtitle }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-blue-600">{highlight}</span>{" "}
          <span className="ml-1">{title.replace(highlight, "").trim()}</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl">{subtitle}</p>
      </div>

      <div className="self-start md:self-center">
        <button className="bg-linear-to-r from-blue-600 to-sky-400 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-95 transition">
          Read All Case Study{" "}
          <ArrowRight size={14} className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SuccessHeader;

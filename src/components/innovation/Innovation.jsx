import FlowTag from "../triggerAct/FlowTag";
import InnovaionsRight from "./InnovaionsRight";

const Innovation = () => {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 bg-white rounded-3xl shadow-md border border-gray-100 p-8 sm:p-12">
          {/* LEFT COLUMN */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block  rounded-full text-sm font-medium mb-4 shadow-sm">
              <FlowTag label={"Pragetx.ai"} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              An{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI innovation
              </span>{" "}
              partner trusted by organizations worldwide!
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Join hands with our skilled team to turn bold ideas into
              practical, scalable AI solutions.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all">
              Let’s build the future together with AI →
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 w-full md:w-auto flex justify-center items-center">
            {/* <InnovaionsRight/> */}
            <img
              src="/Screenshot (24).png"
              alt="AI Innovation Stats"
              className="w-full h-full max-w-md rounded-3xl shadow-md border border-gray-100 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Innovation;

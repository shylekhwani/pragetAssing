import Card from "../cardgrid/Card";
import { FeaturesCard } from "./CardFeatures";

const CardGrid = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white text-center">
      <div className="mb-10">
        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-3 shadow-sm">
          ✨ Always On
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          The <span className="text-gray-800">Right</span>{" "}
          <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Time
          </span>{" "}
          is Now
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {FeaturesCard.map((feature, i) => (
          <Card key={i} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;

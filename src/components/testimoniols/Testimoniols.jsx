import TestimoniolsHeading from "./TestimoniolsHeading";
import TestimoniolsProfile from "./TestimoniolsProfile";
import TestimoniolsQuote from "./TestimoniolsQuote";
import { quotes } from "./TestimoniolsData";
import { profiles } from "./TestimoniolsData";

const Testimoniols = () => {
  return (
    <div>
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <TestimoniolsHeading
            title="Trusted by Industry Leaders"
            subtitle="See what our clients say about scaling smarter with AI agents."
            highlight="Leaders"
          />

          {/* Top row - profile cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {profiles.map((p, i) => (
              <TestimoniolsProfile key={i} {...p} />
            ))}
          </div>

          {/* Bottom row - quote cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {quotes.map((q, i) => (
              <TestimoniolsQuote key={i} {...q} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimoniols;

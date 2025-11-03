import SuccessHeader from "./SuccessHeader";
import CaseStudyCard from "./CaseStudyCard";
import { data } from "./SuccessData";

const Success = () => {
  return (
    <section className="bg-linear-to-r from-[#F7F3FB] to-[#EFF9FF] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SuccessHeader
          highlight="Success"
          title="Stories That Matter"
          subtitle="See how companies are cutting costs and boosting efficiency with our AI-powered solutions."
        />

        <div className="mt-8">
          <CaseStudyCard {...data} />
        </div>
      </div>
    </section>
  );
};

export default Success;

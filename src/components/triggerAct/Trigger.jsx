import FlowTag from "./FlowTag";
import FlowCard from "./FlowCard";

const Trigger = () => {
  return (
    <section className="py-20 px-6 text-center bg-linear-to-br from-[#F6F0FF] via-[#F7FAFF] to-[#EAF4FF]">
      <FlowTag label="Trigger Actions" />

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
        Trigger. <span className="text-blue-600">Automate.</span> Done.
      </h2>

      {/* Cards */}
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        <FlowCard
          title="Choose your trigger"
          description="Select the event that starts your workflow: email, form, or call."
          image="/public/ai-image-generator_707898-82.jpg"
        />
        <FlowCard
          title="Build the workflow"
          description="Drag-and-drop steps, set conditions, and let AI plan the path."
          image="/public/ai-image-generator_707898-82.jpg"
        />
        <FlowCard
          title="Let AI handle the rest"
          description="Tasks executed automatically, data updated, and notifications sent."
          image="/public/ai-image-generator_707898-82.jpg"
        />
      </div>
    </section>
  );
};

export default Trigger;

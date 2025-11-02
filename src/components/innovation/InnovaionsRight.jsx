import SparkelCard from "./SparkelCard";

const InnovaionsRight = () => {
  const data = [
    { value: "80%", label: "Tasks Automated" },
    { value: "22%", label: "Cost Savings" },
    { value: "3x", label: "Faster Scaling" },
    { value: "500+", label: "Clients" },
  ];
  return (
    <>
      <div
        className="rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center w-full h-full shadow-lg border border-white/40"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,144,204,0.7), rgba(100,170,255,0.8))",
        }}
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md">
          {data.map((m, i) => (
            <SparkelCard key={i} {...m} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InnovaionsRight;

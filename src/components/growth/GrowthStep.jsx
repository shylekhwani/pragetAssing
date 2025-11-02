const GrowthStep = ({ number, text, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer transition-all duration-300 rounded-full px-6 py-3
        ${isActive ? "bg-white shadow-md" : "bg-gray-50 hover:bg-gray-100"}`}
      style={{
        border: isActive
          ? "2px solid transparent"
          : "1px solid rgba(209, 213, 219, 1)",
        backgroundImage: isActive
          ? "linear-gradient(white, white), linear-gradient(90deg, #A78BFA, #38BDF8)"
          : "none",
        backgroundOrigin: "border-box",
        backgroundClip: isActive ? "padding-box, border-box" : "border-box",
      }}
    >
      {/* SR.Number */}
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full font-semibold border transition-all duration-300
          ${
            isActive
              ? "border-transparent text-blue-600"
              : "border-gray-300 text-gray-400"
          }`}
        style={
          isActive
            ? {
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(90deg, #A78BFA, #38BDF8)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }
            : {}
        }
      >
        {number}
      </div>

      {/* Text */}
      <p
        className={`text-sm md:text-base font-medium ${
          isActive ? "text-blue-600" : "text-gray-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default GrowthStep;

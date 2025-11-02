const SparkelCard = ({ value, label }) => {
  return (
    <div className="relative flex flex-col justify-center items-center border border-white/40 rounded-2xl p-4 sm:p-5 text-white backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="text-2xl sm:text-3xl font-semibold">{value}</div>
      <div className="text-sm mt-1 opacity-90">{label}</div>

      {/* Sparkle effect corners */}
      <span className="absolute -top-1 -left-1 w-3 h-3 bg-white/60 rounded-full blur-[2px]" />
      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-white/60 rounded-full blur-[2px]" />
    </div>
  );
};

export default SparkelCard;

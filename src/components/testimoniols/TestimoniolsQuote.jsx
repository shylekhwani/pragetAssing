export default function TestimoniolsQuote({ quote, name, role, avatar }) {
  // dotted bg style (subtle grid of dots)
  const dotsBg =
    "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.12) 1px, transparent 1px)"; // faint violet dots

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between">
      {/* dotted rounded panel */}
      <div
        className="rounded-tl-3xl rounded-tr-xl rounded-br-xl rounded-bl-xl p-6"
        style={{
          backgroundImage: `${dotsBg}`,
          backgroundSize: "18px 18px",
          backgroundColor: "rgba(237,246,255,0.6)",
        }}
      >
        <div className="text-2xl text-blue-600 mb-3">“</div>
        <p className="text-sm text-gray-700 leading-relaxed">{quote}</p>
      </div>

      {/* bottom author row */}
      <div className="flex items-center gap-3 mt-4">
        <img
          src={avatar}
          alt={name}
          className="w-9 h-9 rounded-full object-cover border border-gray-200"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

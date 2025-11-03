export default function TestimoniolsProfile({ img, name, role }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        {/* portrait box */}
        <img
          src={img}
          alt={name}
          className="w-full h-56 object-cover block rounded-lg"
        />
      </div>

      {/* author row */}
      <div className="flex items-center gap-3 mt-3">
        <img
          src={img}
          alt={`${name} avatar`}
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

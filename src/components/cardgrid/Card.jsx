const Card = ({ title, subtitle, image }) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="p-6 pb-4 mr-50">
        <h3
          className="text-base md:text-lg font-semibold mb-1 mr-28"
          style={{ color: "#6B21A8" }}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{subtitle}</p>
      </div>

      {/* Image */}
      <div className="w-full grow" aria-hidden="true">
        <div className="w-full h-44 md:h-56 lg:h-64 rounded-b-2xl overflow-hidden flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sm text-gray-400">Illustration</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;

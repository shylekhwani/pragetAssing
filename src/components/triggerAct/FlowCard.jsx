const FlowCard = ({ title, description, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full max-w-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 lg:mr-40">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default FlowCard;

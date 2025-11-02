const FlowTag = ({ label }) => {
  return (
    <div className="inline-block bg-linear-to-r from-violet-100 via-purple-200 to-blue-100 border border-transparent rounded-full px-4 py-1 text-sm font-medium text-purple-700 shadow-sm">
      ✨ {label}
    </div>
  );
};

export default FlowTag;

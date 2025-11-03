/* eslint-disable no-unused-vars */

export default function TestimoniolsHeading({ title, subtitle, highlight }) {
  const parts = title.split(" ");
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        {/* smartly color the highlight word */}
        {title.replace(highlight, "")}
        <span className="text-blue-600 ml-1">{highlight}</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

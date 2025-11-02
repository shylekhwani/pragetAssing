import image from "../../assets/Screenshot(2).png";

const WorkFlowRight = () => {
  return (
    <div className="relative z-10 flex justify-center items-center">
      <img
        src={image}
        alt="Integration Flow"
        className="w-full max-w-md md:max-w-lg object-contain"
      />
    </div>
  );
};

export default WorkFlowRight;

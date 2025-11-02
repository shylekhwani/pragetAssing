import integrationImg from "../../assets/Screenshot.png";

const IntegrationFlow = () => {
  return (
    <section className="relative py-20 bg-[#FAFAFA] flex justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] bg-size-[24px_24px] opacity-50"></div>

      <div className="relative z-10 w-full max-w-7xl flex justify-center">
        <img
          src={integrationImg}
          alt="Integration Flow Diagram"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default IntegrationFlow;

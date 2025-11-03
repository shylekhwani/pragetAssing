import CardGrid from "./components/cardgrid/CardGrid";
import Footer from "./components/footer/Footer";
import GetStartedBanner from "./components/GetStartedBanner";
import Growth from "./components/growth/Growth";
import IndustryTools from "./components/IndustryTools";
import HeroSection from "./components/initial/HeroSection";
import IntegrationFlow from "./components/initial/IntegrationFlow";
import Navbar from "./components/initial/Navbar";
import Innovation from "./components/innovation/Innovation";
import Success from "./components/success/Success";
import Testimoniols from "./components/testimoniols/Testimoniols";
import Trigger from "./components/triggerAct/Trigger";
import WorkFlowLeft from "./components/workflows/WorkFlowLeft";
import Workflows from "./components/workflows/Workflows";

function App() {
  return (
    <>
      <div className="font-sans relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] bg-size-[24px_24px] opacity-70"></div>

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <IntegrationFlow />
          <Workflows />
          <WorkFlowLeft />
          <Trigger />
          <Growth />
          <CardGrid />
          <Innovation />
          <IndustryTools />
          <Success />
          <Testimoniols />
          <GetStartedBanner />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

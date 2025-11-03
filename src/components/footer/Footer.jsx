import FooterOffices from "./FooterOffices";
import FooterPills from "./FooterPills";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden opacity-95">
      {/* world map background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/public/dotted-world-map-black-background-vector-illustration_541075-470.jpg"
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 400px at 92% 45%, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 14%, transparent 40%), linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85))",
        }}
      />

      <div className="absolute top-10 left-10 z-20">
        <img
          src="/header_logo_white.webp"
          alt="PragetX"
          className="w-36 h-auto object-contain"
        />
      </div>

      {/* main panel */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="relative rounded-t-[40px] overflow-hidden">
          <div className="w-full rounded-t-[40px] border-white/5 p-12 relative">
            {/* top-right social icons */}
            <div className="absolute top-8 right-8 flex items-center gap-3 text-sm">
              <img
                src="/x-new-social-network-black-app-icon-twitter-rebranded-as-x-twitter-s-logo-was-changed_277909-626.jpg"
                alt="x"
                className="w-5 h-5 opacity-90"
              />
              <img
                src="/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"
                alt="li"
                className="w-5 h-5 opacity-90"
              />
              <img
                src="/camera-icon-social-media-sign-icon-instagram-logo-camera-symbol-vector-illustration_833685-856.jpg"
                alt="ig"
                className="w-5 h-5 opacity-90"
              />
              <img
                src="/icon-vektor-media-sosial_963601-1266.jpg"
                alt="fb"
                className="w-5 h-5 opacity-90"
              />
            </div>

            {/* footer sections */}
            <div className="mt-10">
              <FooterOffices />
            </div>

            <div className="mt-8">
              <FooterPills />
            </div>

            <div className="mt-10">
              <FooterLinks />
            </div>

            <div className="mt-8">
              <FooterBottom />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

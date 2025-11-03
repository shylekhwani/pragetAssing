import { offices } from "./FooterData";

export default function FooterOffices() {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      {offices.map((o, idx) => (
        <div key={idx} className="min-h-40">
          <div className="flex items-center gap-3 mb-3">
            <img src={o.flag} alt={o.country} className="w-7 h-6 rounded-sm" />
            <h4 className="text-lg font-semibold">{o.country}</h4>
          </div>

          <p className="text-sm text-gray-300 max-w-[420px] leading-relaxed">
            {o.address}
          </p>
        </div>
      ))}
    </div>
  );
}

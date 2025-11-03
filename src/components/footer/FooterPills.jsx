import { CalendarDays, Phone, Mail } from "lucide-react";

export default function FooterPills() {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-4">
        {/* Company */}
        <div className="flex-1">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-200">PragetX</span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex-1">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-200">+91-8487890773</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex-1">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-200">hello@pragetx.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

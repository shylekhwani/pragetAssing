export default function FooterBottom() {
  return (
    <div className="mt-8 text-center">
      <div className="flex justify-center gap-6 text-xs text-gray-400 mb-4">
        <a href="#" className="hover:text-white">
          Cookies
        </a>
        <a href="#" className="hover:text-white">
          Privacy
        </a>
        <a href="#" className="hover:text-white">
          Terms
        </a>
      </div>

      <div className="text-xs text-gray-400">
        © 2025 <span className="text-blue-400 font-medium">PragetX</span>. All
        rights reserved.
      </div>
    </div>
  );
}

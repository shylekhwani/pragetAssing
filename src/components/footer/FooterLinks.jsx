const links = [
  "About Us",
  "Portfolio",
  "Careers",
  "How We Work",
  "Referral Programs",
  "Become A Partner",
  "Blogs",
  "Contact Us",
];

export default function FooterLinks() {
  return (
    <nav className="mt-8">
      <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 items-center">
        {links.map((l, i) => (
          <li key={i} className="relative px-3">
            <a href="#" className="hover:text-white transition">
              {l}
            </a>
            {/* vertical separator for mid items */}
            {i !== links.length - 1 && (
              <span className="hidden md:inline-block absolute -right-3 top-1/2 transform -translate-y-1/2 h-5 border-r border-gray-600/70" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

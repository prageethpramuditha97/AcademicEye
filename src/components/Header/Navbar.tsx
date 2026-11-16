
import { useState } from "react";
import {
  KeyRound,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-10 lg:px-12">

        {/* Logo */}
        <a href="#home" className="shrink-0">
          <img
            src="/images/academic-eye-logo.png"
            alt="AcademicEye"
            className="h-[52px] w-auto max-w-[165px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-2 text-[13px] font-bold transition hover:text-brand-black ${
                index === 0
                  ? "text-brand-black"
                  : "text-[#50483d]"
              }`}
            >
              {link.label}

              {index === 0 && (
                <span className="absolute right-0 bottom-0 left-0 h-[2px] rounded-full bg-brand-yellow" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Login */}
        <a
          href="#login"
          className="hidden min-w-[110px] items-center justify-center gap-2 rounded-[9px] bg-brand-yellow px-5 py-3 text-[13px] font-bold text-black shadow-sm transition hover:bg-[#eaa900] lg:flex"
        >
          <KeyRound size={16} strokeWidth={2.5} />
          Login
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-md p-2 text-black lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-cream"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#login"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-4 py-3 font-semibold text-black"
          >
            <KeyRound size={17} />
            Login
          </a>
        </div>
      )}
    </nav>
  );
}

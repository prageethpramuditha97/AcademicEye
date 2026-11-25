
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const supportLinks = [
    { label: "Contact", href: "#contact" },
    { label: "Client & Staff Login", href: "/login", external: true },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Academic Integrity Policy", href: "/academic-integrity-policy" },
  ];

  return (
    <footer className="w-full bg-[#111111] px-5 text-gray-300 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Company Information */}
          <div className="lg:pr-5">

            {/* Logo */}
            <a href="#home" className="inline-flex items-center">
              <img
                src="/images/academic-eye-logo.png"
                alt="AcademicEYE Logo"
                className="h-10 w-auto rounded object-contain"
              />
            </a>

            {/* Description */}
            <p className="mt-4 max-w-xs text-xs leading-[1.8] text-gray-400">
              Providing world-class higher education consultation,
              research guidance, and scholarly mentoring for students
              and faculty globally.
            </p>

            {/* Contact Information */}
            <div className="mt-5 space-y-2.5">

              <a
                href="tel:+94712565575"
                className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-[#FFB800]"
              >
                <Phone size={13} className="shrink-0 text-[#FFB800]" />
                +94 71 256 5575
              </a>

              <a
                href="mailto:info@academiceye.lk"
                className="flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-[#FFB800]"
              >
                <Mail size={13} className="shrink-0 text-[#FFB800]" />
                info@academiceye.lk
              </a>

            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 transition-all duration-200 hover:pl-1 hover:text-[#FFB800]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-xs text-gray-400 transition-colors duration-200 hover:text-[#FFB800]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Ethics */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Legal & Ethics
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 transition-colors duration-200 hover:text-[#FFB800]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-3 py-5 text-[10px] tracking-wide text-gray-500 sm:flex-row sm:items-center">

          <p>
            © {currentYear} AcademicEYE. All rights reserved.
          </p>

          <p className="text-gray-500">
            Excellence in Academic Research & Scholarly Consultation
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

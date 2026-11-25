
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#111111] px-5 py-16 sm:px-8 lg:py-20"
    >
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FFB800]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#FFB800]/10 blur-[110px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Main Heading */}
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Your Academic Journey Matters
        </h2>

        {/* Subheading */}
        <h3 className="mt-2 text-lg font-semibold text-[#FFB800] sm:text-xl">
          Let's Discuss How We Can Help
        </h3>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
          Connect with AcademicEYE and discover responsible academic
          guidance supported by a secure digital experience.
        </p>

        {/* Contact Button */}
        <a
          href="mailto:info@academiceye.lk"
          className="group mt-6 inline-flex min-w-[163px] items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 py-3.5 text-xs font-bold text-[#171717] shadow-lg shadow-[#FFB800]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD05A] hover:shadow-[#FFB800]/20"
        >
          Contact Our Team

          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        {/* Contact Information */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-xs text-gray-300 sm:flex-row sm:gap-6">

          {/* Phone */}
          <a
            href="tel:+94712565575"
            className="flex items-center gap-2 transition-colors hover:text-[#FFB800]"
          >
            <Phone size={14} className="text-[#FFB800]" />
            <span>
              Phone: +94 71 256 5575
            </span>
          </a>

          {/* Separator */}
          <span className="hidden text-gray-600 sm:block">
            •
          </span>

          {/* Email */}
          <a
            href="mailto:info@academiceye.lk"
            className="flex items-center gap-2 transition-colors hover:text-[#FFB800]"
          >
            <Mail size={15} className="text-[#FFB800]" />
            <span>
              Email: info@academiceye.lk
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;

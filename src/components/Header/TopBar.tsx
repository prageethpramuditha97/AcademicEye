
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#111111] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-1 px-4 py-2 text-[11px] sm:min-h-[42px] sm:flex-row sm:justify-end sm:gap-5 sm:px-10 sm:text-sm">
        <a
          href="tel:+94712565575"
          className="flex items-center gap-2 text-gray-200 transition hover:text-[#FFB900]"
        >
          <Phone size={13} className="text-[#FFB900]" />
          +94 71 256 5575
        </a>

        <span className="hidden h-4 w-px bg-gray-700 sm:block" />

        <a
          href="mailto:info@academiceye.lk"
          className="flex items-center gap-2 text-gray-200 transition hover:text-[#FFB900]"
        >
          <Mail size={13} className="text-[#FFB900]" />
          info@academiceye.lk
        </a>
      </div>
    </div>
  );
}

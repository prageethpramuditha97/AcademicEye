
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#111111] text-white">
      <div className="mx-auto flex min-h-[42px] max-w-[1280px] items-center justify-end gap-5 px-5 text-xs sm:px-10 sm:text-sm">
        <a
          href="tel:+94712565575"
          className="flex items-center gap-2 text-gray-200 transition hover:text-brand-yellow"
        >
          <Phone
            size={14}
            className="text-brand-yellow"
          />
          <span>+94 71 256 5575</span>
        </a>

        <span className="hidden h-4 w-px bg-gray-700 sm:block" />

        <a
          href="mailto:info@academiceye.lk"
          className="hidden items-center gap-2 text-gray-200 transition hover:text-brand-yellow sm:flex"
        >
          <Mail
            size={14}
            className="text-brand-yellow"
          />
          <span>info@academiceye.lk</span>
        </a>
      </div>
    </div>
  );
}

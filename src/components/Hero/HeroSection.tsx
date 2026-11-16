
import {
  ShieldCheck,
  LockKeyhole,
  TrendingUp,
} from "lucide-react";

const heroFeatures = [
  {
    title: "Responsible Guidance",
    icon: ShieldCheck,
  },
  {
    title: "Secure Documents",
    icon: LockKeyhole,
  },
  {
    title: "Progress Tracking",
    icon: TrendingUp,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[610px] items-center overflow-hidden bg-[#111111] text-white"
    >
      {/* Hero background */}
      <img
        src="/images/home.png"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center] lg:object-center"
      />

      {/* Dark photo overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

      {/* Content container */}
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-10 lg:px-12">
        <div className="max-w-[650px]">

          {/* Main heading */}
          <h1 className="text-[37px] leading-[1.16] font-extrabold tracking-[-1.5px] sm:text-[48px] lg:text-[52px]">
            Elevating Your{" "}
            <span className="text-brand-yellow underline decoration-white/80 decoration-[2px] underline-offset-[9px]">
              Academic Journey
            </span>
          </h1>

          {/* Supporting heading */}
          <h2 className="mt-6 text-[17px] leading-[1.55] font-medium text-gray-100 sm:text-[20px]">
            Professional Academic Guidance. Secure Support.
            Clear Progress.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[570px] text-[14px] leading-[1.85] font-normal text-gray-200 sm:text-[16px]">
            Discover responsible academic guidance and a
            convenient digital experience to manage your
            requests, track progress, and securely access
            important documents.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] bg-brand-yellow px-6 text-[13px] font-bold text-black transition hover:bg-[#e5a600]"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] border border-white/70 bg-black/10 px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Contact Our Team
            </a>
          </div>

          {/* Feature highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {heroFeatures.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center gap-2"
              >
                <Icon
                  size={17}
                  strokeWidth={2.4}
                  className="shrink-0 text-brand-yellow"
                />
                <span className="text-[12px] font-medium text-gray-100 sm:text-[13px]">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

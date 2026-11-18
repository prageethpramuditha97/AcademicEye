
import {
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  LockKeyhole,
  MessagesSquare,
} from "lucide-react";

import AboutFeatureCard from "./AboutFeatureCard";

const aboutFeatures = [
  {
    icon: BrainCircuit,
    title: "Guidance-Focused Approach",
    description:
      "Empowering scholarly rigor through milestone reviews, detailed structural critique, and structured advisory.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    description:
      "Clear status updates, detailed feedback logs, and predictable turnaround windows with direct specialist touchpoints.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Digital Experience",
    description:
      "Enterprise-grade client document vaults protecting draft integrity, attribution, and scholarly intellectual ownership.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.25fr] lg:gap-14">

          {/* LEFT: IMAGE */}
          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <img
              src="/images/aboutus.jpeg"
              alt="Academic advisor discussing educational materials with a student"
              loading="lazy"
              className="aspect-[1/1] w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-5 right-0 flex max-w-[255px] items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:-right-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFB900] text-black">
                <GraduationCap size={23} strokeWidth={2} />
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#111111]">
                  Academic Advisory
                </p>

                <p className="text-[11px] leading-4 text-gray-500">
                  One-on-One Methodological Reviews
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="pt-4 lg:pt-0">

            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#9A7100]">
                Who We Are
              </span>

              <span className="h-[2px] w-12 bg-[#FFB900]" />
            </div>

            {/* Main heading */}
            <h2 className="max-w-[650px] text-[30px] font-extrabold leading-[1.2] tracking-[-1px] text-[#111111] sm:text-[36px] lg:text-[42px]">
              Supporting Your Academic Journey with Confidence
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[670px] text-[15px] leading-[1.8] text-[#666666] sm:text-[16px]">
              AcademicEye combines responsible academic support
              with an organized and secure digital experience,
              helping clients communicate requirements, follow
              progress, and access approved documents.
            </p>

            {/* Feature cards */}
            <div className="mt-6 flex flex-col gap-3">
              {aboutFeatures.map((feature) => (
                <AboutFeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Learn More button */}
            <a
              href="#about"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 text-[14px] font-bold text-[#111111] transition-all duration-300 hover:border-[#FFB900] hover:bg-[#FFB900]"
            >
              Learn More About Us
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

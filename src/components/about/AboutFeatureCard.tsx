
import type { LucideIcon } from "lucide-react";

type AboutFeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function AboutFeatureCard({
  icon: Icon,
  title,
  description,
}: AboutFeatureCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-[#F3F4F6] p-4 transition-colors duration-300 hover:bg-[#FFF8E8]">
      {/* Icon container */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF6DA] text-[#A77B00]">
        <Icon size={21} strokeWidth={2} />
      </div>

      {/* Text content */}
      <div>
        <h3 className="text-[16px] font-bold leading-6 text-[#111111] sm:text-[18px]">
          {title}
        </h3>

        <p className="mt-1 text-[13px] leading-5 text-[#666666] sm:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}

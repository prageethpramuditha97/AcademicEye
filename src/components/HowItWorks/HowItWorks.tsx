
import {
  MessageSquareText,
  ClipboardCheck,
  KeyRound,
  ChartNoAxesColumnIncreasing,
  FolderArchive,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contact Our Team",
    description:
      "Send your enquiry and discuss the support you need.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Request Review",
    description:
      "Our team reviews your requirements and confirms the next steps.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Receive Secure Access",
    description:
      "Receive your client portal access details once your request is approved.",
    icon: KeyRound,
  },
  {
    number: "04",
    title: "Track Progress",
    description:
      "Follow status updates and submit additional authorized documents.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    number: "05",
    title: "Access Documents",
    description:
      "Securely view and download approved files through your client portal.",
    icon: FolderArchive,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works"
    className="w-full overflow-hidden bg-[#FAF8F1] px-5 py-16 md:px-10 lg:py-20">

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFDF91] bg-[#FFFAF0] px-4 py-1.5 text-[10px] font-bold tracking-wide text-[#805900]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl">
            Your Academic Support Journey,
            <br />
            <span className="text-[#906600]">
              Step by Step
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">
            From your first enquiry to secure document access,
            follow a clear, transparent, and structured process.
          </p>

        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">

          {/* Horizontal Timeline Line - Desktop */}
          <div className="absolute left-[10%] right-[10%] top-[196px] hidden border-t-2 border-dotted border-[#FFB800] md:block" />

          {/* Vertical Timeline Line - Mobile */}
          <div className="absolute bottom-5 left-[19px] top-5 border-l-2 border-dotted border-[#FFB800] md:hidden" />

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-5 md:gap-3">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isTop = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex items-center gap-4 md:h-[390px] md:flex-col md:gap-0"
                >

                  {/* Timeline Card */}
                  <div
                    className={`
                      relative z-10 w-full rounded-xl border border-gray-200
                      bg-white p-3 shadow-[0_5px_10px_rgba(0,0,0,0.08)]
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-lg

                      md:absolute md:left-1/2 md:w-[180px]
                      md:-translate-x-1/2
                      ${
                        isTop
                          ? "md:top-0"
                          : "md:bottom-0"
                      }
                    `}
                  >

                    {/* Card Header */}
                    <div className="mb-3 flex items-center justify-between">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#FFDF91] bg-[#FFFAF0] text-[#FFAE00]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full border border-[#FFEBBD] bg-[#FFF8E8] px-2.5 py-1.5 text-[9px] font-bold text-[#8A6000]">
                        STEP {step.number}
                      </span>

                    </div>

                    {/* Card Content */}
                    <h3 className="mb-1.5 text-sm font-bold leading-5 text-[#171717]">
                      {step.title}
                    </h3>

                    <p className="text-[11px] leading-[1.65] text-gray-600">
                      {step.description}
                    </p>

                    {/* Vertical Connector - Desktop */}
                    <div
                      className={`
                        absolute left-1/2 hidden h-[40px]
                        -translate-x-1/2 border-l-2
                        border-dotted border-[#FFB800]
                        md:block
                        ${
                          isTop
                            ? "-bottom-[40px]"
                            : "-top-[40px]"
                        }
                      `}
                    />

                  </div>

                  {/* Timeline Number Marker */}
                  <div className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[4px] border-white bg-[#FFB800] text-xs font-extrabold text-[#171717] shadow-md md:absolute md:left-1/2 md:top-[176px] md:-translate-x-1/2">
                    {step.number}
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;


import {
  FilePenLine,
  SpellCheck,
  SearchCheck,
  BookOpen,
  Quote,
  PenTool,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Academic Editing",
    description:
      "Comprehensive review of structure, scholarly tone, syntax, and discipline-specific clarity for journal submissions and coursework.",
    icon: FilePenLine,
  },
  {
    number: "02",
    title: "Proofreading",
    description:
      "Meticulous examination of spelling, mechanics, typography, and citation accuracy according to standard scholarly style guides.",
    icon: SpellCheck,
  },
  {
    number: "03",
    title: "Research Guidance",
    description:
      "Advisory on literature synthesis, conceptual framework design, methodology structuring, and analytical alignment.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Dissertation Support",
    description:
      "Structured milestone feedback, chapter organization, defense presentation readiness, and supervisory alignment strategies.",
    icon: BookOpen,
  },
  {
    number: "05",
    title: "Referencing Assistance",
    description:
      "Flawless citation formatting across APA 7th, Harvard, IEEE, Chicago, MLA, and custom institutional reference manuals.",
    icon: Quote,
  },
  {
    number: "06",
    title: "Writing Skills Coaching",
    description:
      "Targeted 1-on-1 developmental sessions focused on scholarly argumentation, logical transitions, synthesis, and voice.",
    icon: PenTool,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#F3F4F6] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#936800]">
            What We Offer
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl">
            Academic Support Tailored to Your
            <br className="hidden sm:block" /> Needs
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Explore carefully structured guidance and support services
            for research, writing, and academic development.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex min-h-[205px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFCF62] hover:shadow-md sm:p-[18px]"
              >

                {/* Card Header */}
                <div className="mb-3 flex items-center justify-between">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#946700] transition-colors duration-300 group-hover:bg-[#FFB800] group-hover:text-[#171717]">
                    <Icon size={19} strokeWidth={2} />
                  </div>

                  <span className="text-[9px] font-medium tracking-wide text-gray-500">
                    SERVICE {service.number}
                  </span>

                </div>

                {/* Service Content */}
                <h3 className="mb-1 text-[15px] font-semibold text-[#171717]">
                  {service.title}
                </h3>

                <p className="text-[11px] leading-[1.65] text-[#666666] sm:text-xs">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-auto pt-3">

                  <div className="mb-3 border-t border-gray-200" />

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#171717] transition-colors duration-200 hover:text-[#A87500]"
                  >
                    Learn More
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;

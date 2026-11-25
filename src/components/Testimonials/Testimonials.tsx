
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    review:
      "AcademicEYE provided rigorous structural critique for my post-doctoral grant proposal. Their feedback respected ethical boundaries while sharpening my methodological framing. The secure vault made file transfers completely effortless.",
    name: "Dr. Marcus V.",
    role: "Postdoctoral Researcher, Social Sciences",
    initials: "MV",
    avatarStyle: "bg-[#FFB800] text-black",
  },
  {
    id: 2,
    review:
      "Preparing my doctoral dissertation defense was overwhelming until I engaged AcademicEYE for referencing audit and chapter flow advisory. Turnaround times were consistently punctual and milestone tracking gave me complete peace of mind.",
    name: "Elena S.",
    role: "Doctoral Candidate, Clinical Psychology",
    initials: "ES",
    avatarStyle: "bg-[#171717] text-[#FFB800]",
  },
  {
    id: 3,
    review:
      "The client portal is exceptionally well engineered. Having transparent visibility into review stages and receiving encrypted milestone deliverables removed all stress. AcademicEYE is a gold standard for serious academic advisory.",
    name: "Alistair K.",
    role: "Master of Science Scholar, Engineering",
    initials: "AK",
    avatarStyle: "border border-[#FFB800] bg-[#FFF9EA] text-[#8A6000]",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="text-[10px] font-bold uppercase tracking-[1px] text-[#936800]">
            Testimonials
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl">
            What Our Scholars & Researchers
            <br className="hidden sm:block" /> Say
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-[#666666] sm:text-base">
            Read firsthand experiences from researchers, doctoral
            candidates, and graduate students who relied on our
            ethical guidance and secure digital support.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FFDA87] hover:shadow-lg sm:p-[22px]"
            >

              {/* Rating and Quote Icon */}
              <div className="mb-4 flex items-center justify-between">

                <div
                  className="flex items-center gap-0.5"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="#FFB800"
                      stroke="#FFB800"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8E8] text-[#946700]">
                  <Quote size={19} fill="currentColor" />
                </div>

              </div>

              {/* Review */}
              <p className="flex-1 text-[13px] leading-[1.8] text-[#626262]">
                “{item.review}”
              </p>

              {/* Divider */}
              <div className="my-5 border-t border-gray-200" />

              {/* Reviewer Information */}
              <div className="flex items-center gap-3">

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${item.avatarStyle}`}
                >
                  {item.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#171717]">
                    {item.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-gray-500 sm:text-[11px]">
                    {item.role}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;

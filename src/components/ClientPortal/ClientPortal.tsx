
import {
  LockKeyhole,
  Check,
  CheckCircle2,
  RefreshCw,
  Download,
  FileText,
  FileSpreadsheet,
  Circle,
} from "lucide-react";

const benefits = [
  "Secure Client Access & Role-Based Permissions",
  "Real-Time Progress Updates & Milestone Notifications",
  "Centralized Document Upload and Download Vault",
];

const ClientPortal = () => {
  return (
    <section
      id="client-portal"
      className="w-full overflow-hidden bg-[#F0F1F3] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-[#906600]">
              Proprietary Client Portal
            </span>

            <span className="h-[2px] w-9 bg-[#FFB800]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#171717] sm:text-4xl lg:text-[38px]">
            Manage Your Academic Support in One Secure Place
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-[1.85] text-[#626262] sm:text-base">
            A streamlined client portal helps you securely submit
            requirements, monitor progress, review document history,
            and access approved files.
          </p>

          {/* Benefits */}
          <div className="mt-5 space-y-3">

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFB800] text-black">
                  <Check size={13} strokeWidth={3} />
                </div>

                <p className="text-sm font-medium leading-6 text-[#252525]">
                  {benefit}
                </p>
              </div>
            ))}

          </div>

          {/* CTA Button */}
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-lg bg-[#171717] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#333333] hover:shadow-lg"
          >
            <LockKeyhole
              size={16}
              className="text-[#FFB800]"
            />
            Open Client Portal
          </a>

        </div>

        {/* RIGHT: PORTAL PREVIEW */}
        <div className="w-full min-w-0">

          <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]">

            {/* Browser Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#171717] px-4 py-3 sm:px-5">

              <div className="flex min-w-0 items-center gap-2">

                <Circle size={11} fill="#FF4757" stroke="none" />
                <Circle size={11} fill="#FFBE0B" stroke="none" />
                <Circle size={11} fill="#06B981" stroke="none" />

                <span className="ml-2 truncate text-[10px] font-medium tracking-wide text-gray-300 sm:text-xs">
                  AcademicEYE Client Vault • v3.4
                </span>

              </div>

              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#FFB800] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Client ID: AE-9482
              </div>

            </div>

            {/* Portal Body */}
            <div className="space-y-3 bg-[#F7F8FA] p-3 sm:space-y-4 sm:p-5">

              {/* Active Review Card */}
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">

                <div className="flex flex-wrap items-start justify-between gap-2">

                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-wide text-[#906600]">
                      Active Academic Review
                    </span>

                    <h3 className="mt-1 text-base font-semibold leading-snug text-[#171717] sm:text-lg">
                      Methodology Review & Literature Advisory
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF6E1] px-3 py-1 text-[10px] font-semibold text-[#946700]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    In Progress
                  </span>

                </div>

                {/* Progress */}
                <div className="mt-4">

                  <div className="mb-1.5 flex justify-between text-[10px] text-gray-600">
                    <span>Overall Milestone Completion</span>
                    <span className="font-bold text-[#171717]">85%</span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-[#FFB800]"
                      style={{ width: "85%" }}
                    />
                  </div>

                </div>

              </div>

              {/* Deliverables and Files */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Stage Deliverables */}
                <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm sm:p-4">

                  <h4 className="mb-3 text-xs font-semibold text-[#171717]">
                    Stage Deliverables
                  </h4>

                  <div className="space-y-2">

                    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F3F4F6] px-2.5 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                        <span className="text-[11px] font-medium text-gray-700">
                          Ch. 1 Introduction
                        </span>
                      </div>

                      <span className="text-[9px] text-gray-500">
                        Completed
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F3F4F6] px-2.5 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                        <span className="text-[11px] font-medium text-gray-700">
                          Ch. 2 Lit Review
                        </span>
                      </div>

                      <span className="text-[9px] text-gray-500">
                        Completed
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#FFF7E5] px-2.5 py-3">
                      <div className="flex items-center gap-2">
                        <RefreshCw size={14} className="shrink-0 text-[#A87800]" />
                        <span className="text-[11px] font-semibold text-gray-800">
                          Ch. 3 Methodology
                        </span>
                      </div>

                      <span className="text-[9px] font-semibold text-[#946700]">
                        In Review
                      </span>
                    </div>

                  </div>

                </div>

                {/* Verified Files Vault */}
                <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm sm:p-4">

                  <h4 className="mb-3 text-xs font-semibold text-[#171717]">
                    Verified Files Vault
                  </h4>

                  <div className="space-y-2">

                    {/* File 1 */}
                    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F3F4F6] p-2.5">

                      <div className="flex min-w-0 items-center gap-2">

                        <FileSpreadsheet
                          size={17}
                          className="shrink-0 text-[#946700]"
                        />

                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-medium text-gray-800">
                            Research_Framework_v2.pdf
                          </p>
                          <p className="mt-1 text-[9px] text-gray-500">
                            1.8 MB • Verified Encrypted
                          </p>
                        </div>

                      </div>

                      <button
                        type="button"
                        aria-label="Download Research Framework"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-[#FFB800]"
                      >
                        <Download size={13} />
                      </button>

                    </div>

                    {/* File 2 */}
                    <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F3F4F6] p-2.5">

                      <div className="flex min-w-0 items-center gap-2">

                        <FileText
                          size={17}
                          className="shrink-0 text-[#946700]"
                        />

                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-medium text-gray-800">
                            Methodology_Notes_Approved
                          </p>
                          <p className="mt-1 text-[9px] text-gray-500">
                            420 KB • Review Notes
                          </p>
                        </div>

                      </div>

                      <button
                        type="button"
                        aria-label="Download Methodology Notes"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-[#FFB800]"
                      >
                        <Download size={13} />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientPortal;

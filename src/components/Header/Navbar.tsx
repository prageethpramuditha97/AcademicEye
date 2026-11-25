
import { useEffect, useRef, useState } from "react";
import { KeyRound, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    // user cannot scroll if the mobile drawer open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }

      // Keep keyboard focus inside the drawer.
      if (event.key === "Tab") {
        const drawer = closeButtonRef.current?.closest("aside");
        const elements = drawer?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );

        if (!elements?.length) return;

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      {/* Main navigation */}
      <nav className="relative z-30 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-10 lg:px-12">

          {/* Official logo */}
          <a href="#home" className="shrink-0">
            <img
              src="/images/academic-eye-logo.png"
              alt="AcademicEye"
              className="h-[52px] w-auto max-w-[165px] object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-2 text-[13px] font-bold transition hover:text-black ${
                  index === 0
                    ? "text-black"
                    : "text-[#50483d]"
                }`}
              >
                {link.label}

                {index === 0 && (
                  <span className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#FFB900]" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop login */}
          <a
            href="#login"
            className="hidden min-w-[110px] items-center justify-center gap-2 rounded-[9px] bg-[#FFB900] px-5 py-3 text-[13px] font-bold text-black shadow-sm transition hover:bg-[#E5A800] lg:flex"
          >
            <KeyRound size={16} />
            Login
          </a>

          {/* Mobile hamburger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md p-2 text-black lg:hidden"
          >
            <Menu size={27} />
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Left-side mobile drawer */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Mobile navigation"
        inert={!menuOpen}
        className={`
          fixed top-0 left-0 z-50
          flex h-dvh w-[50vw] flex-col
          overflow-y-auto bg-white
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-5">
          <span className="text-sm font-bold text-black">
            Menu
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="rounded-md p-1 text-black hover:bg-gray-100"
          >
            <X size={21} />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-1 flex-col gap-1 px-2 py-5">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                rounded-lg px-3 py-3 text-[12px]
                font-semibold leading-5 transition
                hover:bg-[#FFF8E8]
                ${
                  index === 0
                    ? "bg-[#FFF8E8] text-[#A87300]"
                    : "text-gray-800"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Drawer bottom */}
        <div className="border-t border-gray-200 p-3">
          <a
            href="#login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#FFB900] px-2 py-3 text-[12px] font-bold text-black"
          >
            <KeyRound size={15} />
            Login
          </a>
        </div>
      </aside>
    </>
  );
}

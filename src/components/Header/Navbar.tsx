
import { useEffect, useRef, useState } from "react";
import { KeyRound, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "How It Works", id: "how-it-works" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Why Choose Us", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Detect the currently visible homepage section
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mobile menu keyboard and scroll handling
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }

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

  // Close mobile menu when navigating
  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Main Navigation */}
      <nav className="
        relative
        z-50
        w-full
        border-b
        border-gray-200
        bg-white
      ">
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-10 lg:px-12">

          {/* Official Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            className="shrink-0"
          >
            <img
              src="/images/academic-eye-logo.png"
              alt="AcademicEYE"
              className="h-[52px] w-auto max-w-[165px] object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavigation(link.id)}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
                className={`
                  relative whitespace-nowrap px-2 py-2
                  text-sm font-medium
                  transition-colors duration-200

                  ${
                    activeSection === link.id
                      ? "text-[#A87500] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-[#FFB800]"
                      : "text-gray-700 hover:text-[#A87500]"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Login */}
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden lg:flex
              min-w-[110px]
              items-center justify-center gap-2
              rounded-[9px]
              bg-[#FFB900]
              px-5 py-3
              text-[13px] font-bold text-black
              shadow-sm
              transition duration-200
              hover:bg-[#E5A800]
              hover:shadow-md
            "
          >
            <KeyRound size={16} />
            Login
          </a>

          {/* Mobile Hamburger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="
              rounded-md p-2
              text-black
              transition
              hover:bg-gray-100
              lg:hidden
            "
          >
            <Menu size={27} />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/60 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Mobile navigation"
        inert={!menuOpen}
        className={`
          fixed left-0 top-0 z-[120]
          flex h-dvh w-[80vw] max-w-[320px]
          flex-col overflow-y-auto
          bg-white shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden

          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-5">

          <img
            src="/images/academic-eye-logo.png"
            alt="AcademicEYE"
            className="h-10 w-auto max-w-[140px] object-contain"
          />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="rounded-md p-2 text-black transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-1 flex-col gap-1 px-3 py-5">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavigation(link.id)}
              aria-current={
                activeSection === link.id ? "location" : undefined
              }
              className={`
                rounded-lg px-4 py-3
                text-sm font-semibold
                transition-colors duration-200

                ${
                  activeSection === link.id
                    ? "bg-[#FFF8E8] text-[#A87500]"
                    : "text-gray-800 hover:bg-[#FFF8E8] hover:text-[#A87500]"
                }
              `}
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Mobile Login */}
        <div className="border-t border-gray-200 p-4">
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="
              flex items-center justify-center gap-2
              rounded-lg bg-[#FFB900]
              px-4 py-3
              text-sm font-bold text-black
              transition hover:bg-[#E5A800]
            "
          >
            <KeyRound size={16} />
            Login
          </a>
        </div>

      </aside>
    </>
  );
}

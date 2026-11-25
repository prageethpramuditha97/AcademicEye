
import TopBar from "./components/Header/TopBar";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import ClientPortal from "./components/ClientPortal/ClientPortal";
import ContactCTA from "./components/ContactCTA/ContactCTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-[100] w-full">
        <TopBar />
        <Navbar />
      </header>

      {/* Main Website Content */}
      <main>
        <section id="home" className="scroll-mt-32">
          <HeroSection />
        </section>

        <section id="how-it-works" className="scroll-mt-32">
          <HowItWorks />
        </section>

        <section id="about" className="scroll-mt-32">
          <AboutSection />
        </section>

        <section id="services" className="scroll-mt-32">
          <Services />
        </section>

        <section id="testimonials" className="scroll-mt-32">
          <Testimonials />
        </section>

        <section id="client-portal" className="scroll-mt-32">
          <ClientPortal />
        </section>

        <section id="contact" className="scroll-mt-32">
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </>
  );
}

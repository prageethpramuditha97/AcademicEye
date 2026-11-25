
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
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main>
        <HeroSection />
         <HowItWorks />
        <AboutSection />
        <Services />
        <Testimonials />
        <ClientPortal />
        <ContactCTA/>
        <Footer/>
      </main>
    </>
  );
}

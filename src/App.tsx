
import TopBar from "./components/Header/TopBar";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/about/AboutSection";

export default function App() {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}

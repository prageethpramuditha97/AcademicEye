
import TopBar from "./components/Header/TopBar";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";

export default function App() {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main>
        <HeroSection />
      </main>
    </>
  );
}

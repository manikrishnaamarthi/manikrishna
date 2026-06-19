import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Dock from "./components/Dock";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0a0a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[#0a0a0a]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#050505_0%,#0a0a0a_35%,#050505_100%)]" />

      <main className="relative w-full">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>

      <Dock />
    </div>
  );
}

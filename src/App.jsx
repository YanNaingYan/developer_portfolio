import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

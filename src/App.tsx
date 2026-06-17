import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
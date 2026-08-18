import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import { PortfolioBackground } from "./components/ui/PortfolioBackground.tsx";

function App() {
  return (
    <PortfolioBackground variant="grid">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioBackground>
  );
}

export default App;

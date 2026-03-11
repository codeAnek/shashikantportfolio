import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Experience } from "./pages/Experience";
import { Education } from "./pages/Education";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { MediaBar } from "./components/MediaBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="w-screen bg-gray-950 text-gray-50">
      <Header />
      <MediaBar />
      <section id="home" className="px-3 border-b border-gray-600 md:px-10 lg:px-20">
        <Home />
      </section>

      <section id="about" className="px-3 md:px-10 lg:px-20 py-12">
        <About />
      </section>

      <section id="skills" className="px-3 md:px-10 lg:px-20 py-12">
        <Skills />
      </section>

      <section id="experience" className="px-3 md:px-10 lg:px-20 py-12">
        <Experience />
      </section>

      <section id="education" className="px-3 md:px-10 lg:px-20 py-12">
        <Education />
      </section>

      <section id="portfolio" className="px-3 md:px-10 lg:px-20 py-12">
        <Portfolio />
      </section>

      <section id="contact" className="px-3 md:px-10 lg:px-20 py-12">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

export default App;
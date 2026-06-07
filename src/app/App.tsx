import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background text-foreground dark">
        <Navigation />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <GitHubStats />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
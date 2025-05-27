import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClickVideoReveal from "./components/ClickVideoReveal";

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  // Function to be called when the ClickVideoReveal animation is complete
  const handleIntroComplete = () => {
    setIntroComplete(true); // Conditionally render components only after intro finishes
    window.scrollTo(0, 0); // Reset scroll position
  };

  useEffect(() => {
    // Prevent scrolling on the main content when intro is showing
    document.body.style.overflow = introComplete ? "auto" : "hidden";
  }, [introComplete]);

  return (
    <>
      {!introComplete ? (
        <ClickVideoReveal onComplete={handleIntroComplete} />
      ) : (
        <div className="min-h-screen flex flex-col z-60">
          {" "}
          {/* Increased z-index */}
          <Header />
          <main className="flex-1 flex flex-col justify-start">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;

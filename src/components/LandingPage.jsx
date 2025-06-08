// components/LandingPage.jsx
import { motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col z-60">
      <Header />
      <main className="flex-1 flex flex-col justify-start">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import IntroLoader from "./components/IntroLoader";
import LandingPage from "./components/LandingPage";
import ProjectDetails from "./components/project";

const App = () => {
  // Use session storage if you want it to show only once per session
  // or simple useState if it should show on every refresh.
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroComplete = () => {
    setIntroFinished(true);
    // Unlock scrolling once complete
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = "hidden"; // Lock scroll during intro
    }
  }, [introFinished]);

  return (
    <Router>
      {/* 
         INTRO OVERLAY
         AnimatePresence allows the component to animate out (fade) 
         before being removed from the DOM.
      */}
      <AnimatePresence>
        {!introFinished && <IntroLoader onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            // LandingPage is rendered immediately, sitting behind the z-[9999] loader
            <LandingPage />
          }
        />
        {/* Projects Route */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

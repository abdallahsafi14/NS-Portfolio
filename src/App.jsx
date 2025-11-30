import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import IntroLoader from "./components/IntroLoader";
import LandingPage from "./components/LandingPage";
import ProjectDetails from "./components/project";

const AppContent = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const location = useLocation();

  const handleIntroComplete = () => {
    // Called after the loader reaches 100% -> Exit Anim -> Faded Out
    setIntroFinished(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Prevent scrolling while intro is visible
    if (!introFinished && location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introFinished, location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Render the Intro Loader only if we haven't finished yet */}
        {!introFinished && location.pathname === "/" && (
          <IntroLoader key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            // Show Home Page ONLY after Intro is done
            introFinished ? (
              <LandingPage />
            ) : (
              // Empty container to act as background layer while loading
              <div className="bg-black min-h-screen w-full" />
            )
          }
        />

        {/* Detail Pages render normally */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

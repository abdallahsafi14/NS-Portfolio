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
    // The Loader has finished its "Disappear" animations.
    // Now we switch the state to show the Homepage.
    setIntroFinished(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Block scroll while Intro is active on home page
    if (!introFinished && location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introFinished, location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* IF NOT FINISHED, SHOW LOADER */}
        {!introFinished && location.pathname === "/" && (
          <IntroLoader key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <Routes>
        {/* 
            CORE FIX: 
            Check logic here: if we are not finished (!introFinished), 
            we render null or a div. We do NOT render LandingPage.
            When state changes to true, LandingPage mounts and 
            Hero animations start automatically.
        */}
        <Route
          path="/"
          element={
            introFinished ? (
              <LandingPage />
            ) : (
              <div className="bg-black min-h-screen" />
            )
          }
        />

        {/* Other pages can render immediately or independently */}
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

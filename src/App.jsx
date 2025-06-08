import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClickVideoReveal from "./components/ClickVideoReveal";
import LandingPage from "./components/LandingPage";
import { useEffect, useState } from "react";
import ProjectDetails from "./components/project"; // Make sure this path is correct

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.body.style.overflow = introComplete ? "auto" : "hidden";
  }, [introComplete]);

  return (
    <Router>
      <Routes>
        {/* Show intro video only on root `/` */}
        <Route
          index
          element={
            !introComplete ? (
              <ClickVideoReveal onComplete={handleIntroComplete} />
            ) : (
              <LandingPage />
            )
          }
        />

        {/* Explicit route for landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Projects route */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

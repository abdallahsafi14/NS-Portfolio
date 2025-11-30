import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";

const IntroLoader = ({ onComplete }) => {
  // We use this state to drive the loading bar width (0 -> 90 -> 100)
  const [loadingPercent, setLoadingPercent] = useState(0);

  // Triggers the final letters sliding up and disappearing
  const [exitPhase, setExitPhase] = useState(false);

  const text = "LET'S BRING LIFE TO YOUR PROJECTS.";

  // --- ANIMATION VARIANTS ---

  const containerVariants = {
    // Stagger the letters entering
    enter: {
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
    // Stagger the letters exiting
    exit: {
      transition: { staggerChildren: 0.03 },
    },
  };

  // Letters flow: Enters from BOTTOM (50) -> Center (0) -> Exits TOP (-50)
  const letterVariants = {
    initial: { y: 50, opacity: 0 }, // Starts below
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: -50, // Moves up
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // Logo follows same logic: Bottom -> Center -> Top
  const logoVariants = {
    initial: { y: 30, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  // --- LOGIC ---

  useEffect(() => {
    // 1. Start loading immediately on mount.
    // We animate to 90% first.

    // Check if page is already loaded to determine initial speed
    const isLoaded = document.readyState === "complete";

    // Simulate initial loading time (1.5s to get to 90%)
    const startTimer = setTimeout(() => {
      setLoadingPercent(90);
    }, 100);

    return () => clearTimeout(startTimer);
  }, []);

  // Framer Motion `onAnimationComplete` helper
  // This triggers every time the bar finishes a movement phase
  const handleBarAnimationComplete = () => {
    // PHASE 1: We hit 90%
    if (loadingPercent === 90) {
      console.log("Reached 90%. Waiting 1 second...");

      setTimeout(() => {
        // After 1 seconds, fill to 100%
        setLoadingPercent(100);
      }, 1000);
    }

    // PHASE 2: We hit 100%
    else if (loadingPercent === 100) {
      console.log("Loading complete. Exiting...");

      // Trigger the "Disappear" animations
      setExitPhase(true);

      // Wait for disappear animation to finish visually, then unmount
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-4"
      exit={{ opacity: 0, transition: { duration: 0.8 } }} // Fade out black background
    >
      <div className="flex flex-col items-center w-full max-w-5xl">
        {/* LOGO */}
        <motion.div
          className="mb-8 w-[150px] md:w-[200px] brightness-0 invert"
          variants={logoVariants}
          initial="initial"
          animate={exitPhase ? "exit" : "enter"}
        >
          <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="overflow-hidden mb-12 text-center h-[120px] flex items-center justify-center">
          <motion.h1
            className="text-white text-xl md:text-3xl font-bold tracking-[0.15em] flex flex-wrap justify-center"
            variants={containerVariants}
            initial="initial"
            animate={exitPhase ? "exit" : "enter"}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {text.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block whitespace-nowrap mr-2 md:mr-3 overflow-hidden"
              >
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* LOADING BAR */}
        <motion.div
          className="w-full max-w-md h-[2px] bg-gray-900 rounded-full overflow-hidden"
          // When exitPhase is true, fade the bar out
          animate={{ opacity: exitPhase ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* THE WHITE BAR */}
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            // State drives the width (0 -> 90 -> 100)
            animate={{ width: `${loadingPercent}%` }}
            // Dynamic Transition:
            // Going to 90? take 1.5s (simulated load).
            // Going to 100? take 0.5s (fast finish).
            transition={{
              duration: loadingPercent === 90 ? 2 : 0.5,
              ease: "easeInOut",
            }}
            onAnimationComplete={handleBarAnimationComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;

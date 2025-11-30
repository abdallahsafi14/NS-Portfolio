import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";

const IntroLoader = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [exitAnimationStarted, setExitAnimationStarted] = useState(false);

  const text = "LET'S BRING LIFE TO YOUR PROJECTS.";

  // 1. Text Animation Variants (Staggered Exit)
  const containerVariants = {
    initial: {},
    exit: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    initial: { y: 0, opacity: 1 },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    // 2. RESOURCE PRELOADING LOGIC
    // We simulate a minimum time, but also wait for actual Window Load + Critical Images
    let currentProgress = 0;

    // List critical images to preload here
    const imagePaths = [Logo];
    let imagesLoaded = 0;

    const updateProgress = () => {
      // Logic: If images aren't ready, cap progress at 90%.
      // If ready, allow it to go to 100%.
      const target =
        imagesLoaded === imagePaths.length && document.readyState === "complete"
          ? 100
          : 90;

      // Interpolate for smoothness
      const diff = target - currentProgress;
      if (diff > 0.5) {
        currentProgress += diff * 0.1;
        setLoadingProgress(currentProgress);
        requestAnimationFrame(updateProgress);
      } else if (target === 100) {
        setLoadingProgress(100);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    // Preload Logic
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // proceed even if fails
      });
    };

    // Start tracking
    requestAnimationFrame(updateProgress);

    // Wait for Window and Images
    const handleLoad = async () => {
      await Promise.all(imagePaths.map(preloadImage));
      imagesLoaded = imagePaths.length;
    };

    // Check if already loaded (for refresh)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // 3. Handle End of Loading Bar
  const handleBarAnimationComplete = () => {
    // Only proceed if our state tracking says we really hit 100%
    if (loadingProgress >= 99) {
      setLoadingComplete(true);
      // Start the text disappear animation immediately
      setTimeout(() => setExitAnimationStarted(true), 100);

      // After text disappears, notify parent to Switch pages
      setTimeout(() => {
        onComplete();
      }, 1500); // 1.5s delay gives time for text to slide up and fade
    }
  };

  return (
    <motion.div
      // High Z-Index to cover everything
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center w-full max-w-5xl">
        {/* LOGO */}
        <motion.div
          className="mb-8 w-[150px] md:w-[200px] brightness-0 invert"
          // Slide up and disappear when exit phase starts
          animate={
            exitAnimationStarted ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
        >
          <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="overflow-hidden mb-12 text-center h-[100px] flex items-center">
          <motion.h1
            className="text-white text-xl md:text-3xl font-bold tracking-[0.15em]"
            variants={containerVariants}
            initial="initial"
            // Trigger stagger animation when loading is technically "done"
            animate={exitAnimationStarted ? "exit" : "initial"}
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
          animate={{ opacity: exitAnimationStarted ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* We animate width based on state `loadingProgress` */}
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            onAnimationComplete={handleBarAnimationComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;

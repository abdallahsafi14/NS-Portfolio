import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../public/Logo.png";

const IntroLoader = ({ onComplete }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Text configuration
  const text = "LET'S BRING LIFE TO YOUR PROJECTS.";

  // Animation Variants
  const containerVariants = {
    initial: {},
    exit: {
      transition: { staggerChildren: 0.05 }, // Speed of letters disappearing
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

  const handleLoaderAnimationComplete = () => {
    setLoadingComplete(true);
    // Wait for the letter "exit" animation to finish (approx 1s) then call onComplete
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <motion.div
      // FIXED: z-[9999] ensures this sits on top of your LandingPage z-60
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} // Smooth fade out of the black background
    >
      <div className="flex flex-col items-center w-full max-w-5xl">
        {/* LOGO */}
        <motion.div
          className="mb-8 w-[150px] md:w-[200px] brightness-0 invert"
          // Slide text up/disappear animation applied to Logo as well
          animate={
            loadingComplete ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={Logo} alt="Logo" className="w-full h-auto object-contain" />
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="overflow-hidden mb-12 text-center h-[100px] flex items-center">
          <motion.h1
            className="text-white text-xl md:text-3xl font-bold tracking-[0.15em]"
            variants={containerVariants}
            initial="initial"
            // When loading finishes, switch to 'exit' to trigger the stagger
            animate={loadingComplete ? "exit" : "initial"}
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {/* Split text into words and chars for the animation */}
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

        {/* THIN WHITE LOADER */}
        <motion.div
          className="w-full max-w-md h-[2px] bg-gray-900 rounded-full overflow-hidden"
          // Hide loader bar smoothly when animation is done
          animate={{ opacity: loadingComplete ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Loader takes 2.5s
            onAnimationComplete={handleLoaderAnimationComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;

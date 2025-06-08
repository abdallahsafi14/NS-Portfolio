import { useEffect, useRef, useState } from "react";

export default function ScrollVideoReveal({ onComplete }) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const firstVideoRef = useRef(null);
  const touchStartY = useRef(0);

  // Auto-trigger animation after 3 seconds
  // useEffect(() => {
  //   if (!videoReady) return;

  //   const timer = setTimeout(() => {
  //     if (!animationActive) {
  //       triggerAnimation();
  //     }
  //   }, 10000); // Trigger after 3 seconds

  //   return () => clearTimeout(timer);
  // }, [videoReady, animationActive]);

  // Detect scroll/wheel/touch events
  useEffect(() => {
    const handleWheel = (e) => {
      if (!animationActive && videoReady) {
        triggerAnimation();
      }
    };

    const handleKeyDown = (e) => {
      if (
        (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") &&
        !animationActive &&
        videoReady
      ) {
        triggerAnimation();
      }
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
      if (!animationActive && videoReady) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!animationActive && videoReady && touchStartY.current) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;

        // If user swipes up (scrolling down) by more than 50px, trigger animation
        if (deltaY > 50) {
          triggerAnimation();
          touchStartY.current = 0;
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [animationActive, videoReady]);

  const triggerAnimation = () => {
    setAnimationActive(true);

    // Check if device is mobile (screen width less than 1150px)
    const isMobile = window.innerWidth < 1150;
    const animationDuration = isMobile ? 1000 : 1500; // 1s for mobile, 1.5s for desktop

    const startTime = Date.now();

    const animateText = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      setAnimationProgress(progress);

      // hide video after 70%
      if (progress > 0.7 && videoVisible) {
        setVideoVisible(false);
      }

      if (progress < 1) {
        requestAnimationFrame(animateText);
      } else {
        setTimeout(() => onComplete?.(), 500);
      }
    };

    requestAnimationFrame(animateText);
  };

  const textScale = 1 + animationProgress * 280;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {videoVisible && (
        <video
          ref={firstVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/second-video.mp4"
          onCanPlayThrough={() => setVideoReady(true)}
        />
      )}

      {videoReady && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          style={{
            opacity: animationProgress === 1 ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h1
            className="text-6xl font-bold pointer-events-none text-center bg-black custom-xl:bg-transparent text-white custom-xl:text-black py-2"
            style={{
              transform: `scale(${textScale})`,
              transition: animationActive ? "transform 0s linear" : "none",
            }}
          >
            LET'S BRING LIFE TO YOUR PROJECTS.
          </h1>
        </div>
      )}

      {/* Scroll indicator - now just for visual appeal */}
      {!animationActive && videoReady && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold  bg-clip-text text-black animate-pulse">
              SCROLL DOWN
            </h2>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
              <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
            </div>
            <svg
              className="w-6 h-6 text-black animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

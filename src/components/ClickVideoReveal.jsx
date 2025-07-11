import { useEffect, useRef, useState } from "react";
import Logo1 from "../../public/Logo.png";

// Logo Component
const Logo = () => (
  <div className="text-white text-4xl md:w-auto w-[150px] font-bold brightness-0 invert">
    <img src={Logo1} alt="Logo" />
  </div>
);

export default function ScrollVideoReveal({ onComplete }) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const firstVideoRef = useRef(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1208);

    const handleWheel = () => {
      if (!animationActive && videoReady) triggerAnimation();
    };

    const handleKeyDown = (e) => {
      if (
        ["ArrowDown", "PageDown", " "].includes(e.key) &&
        !animationActive &&
        videoReady
      ) {
        triggerAnimation();
      }
    };

    const handleTouchStart = (e) => {
      if (!animationActive && videoReady) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!animationActive && videoReady && touchStartY.current) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;
        if (deltaY > 50) {
          triggerAnimation();
          touchStartY.current = 0;
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

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
    const duration = isMobile ? 2000 : 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setAnimationProgress(progress);

      if (progress > 0.7 && videoVisible) setVideoVisible(false);
      if (progress < 1) requestAnimationFrame(animate);
      else setTimeout(() => onComplete?.(), 500);
    };

    requestAnimationFrame(animate);
  };

  const textScale = isMobile
    ? 1 + animationProgress * 50
    : 1 + animationProgress * 280;

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
          onLoadedData={() => setVideoReady(true)}
          onError={() => {
            console.error("Failed to load video.");
            setVideoReady(false);
          }}
        />
      )}

      {/* Custom Classy Loader */}
      {!videoReady && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black transition-opacity duration-500">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-700 opacity-20" />
            <div className="absolute inset-0 rounded-full border-t-4 border-white animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-light text-sm tracking-widest animate-pulse">
              LOADING
            </div>
          </div>
        </div>
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

      {/* Scroll prompt */}
      {!animationActive && videoReady && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <h2 className="text-2xl font-bold bg-clip-text text-black animate-pulse">
            SCROLL DOWN
          </h2>
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

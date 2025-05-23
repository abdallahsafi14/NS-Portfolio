import { useEffect, useRef, useState } from "react";
import firstVideo from "../../public/second-video.mp4";

export default function ClickVideoReveal({ onComplete }) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true); // Track video visibility
  const firstVideoRef = useRef(null);
  const textRef = useRef(null);

  const handleClick = () => {
    setAnimationActive(true);

    const animationDuration = 3000;
    const startTime = Date.now();

    const animateText = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      setAnimationProgress(progress);

      // Hide video when text reaches a certain scale
      if (progress > 0.7 && videoVisible) {
        setVideoVisible(false);
      }

      if (progress < 1) {
        requestAnimationFrame(animateText);
      } else {
        // Animation complete - trigger the onComplete callback
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    };

    requestAnimationFrame(animateText);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const textScale = 1 + animationProgress * 280;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background video */}
      {videoVisible && ( // Conditionally render video
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={firstVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={firstVideo}
          />
        </div>
      )}

      {/* Text overlay */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center h-screen flex-col"
        style={{
          opacity: animationProgress === 1 ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="flex flex-col items-center justify-center ">
          <h1
            ref={textRef}
            className="text-6xl font-bold pointer-events-none text-center"
            style={{
              transform: `scale(${textScale})`,
              transition: animationActive ? "transform 0s linear" : "none",
            }}
          >
            <span
              className="text-transparent pointer-events-none"
              style={{
                backgroundImage: `url(${firstVideo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "black",
                padding: "0.5rem",
              }}
            >
              LET'S BRING LIFE TO YOUR PROJECTS.
            </span>
          </h1>
        </div>

        {!animationActive && (
          <div
            className="relative top-[200px] cursor-pointer flex flex-col items-center justify-center p-5 animate-bounce z-20 w-[120px] h-[120px] rounded-full bg-black text-white"
            onClick={handleClick}
          >
            <p className="mb-2 font-medium">Click Here</p>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

// App component remains the same as in Solution 1

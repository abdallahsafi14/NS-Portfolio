import { useEffect, useRef, useState } from "react";
import firstVideo from "../../public/second-video.mp4";
import { FaLocationArrow } from "react-icons/fa";

export default function ClickVideoReveal({ onComplete }) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const firstVideoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null); // New ref for arrow

  const handleClick = () => {
    setAnimationActive(true);
    const animationDuration = 3000;
    const startTime = Date.now();

    const animateText = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      setAnimationProgress(progress);

      if (progress > 0.7 && videoVisible) {
        setVideoVisible(false);
      }

      if (progress < 1) {
        requestAnimationFrame(animateText);
      } else {
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    };

    requestAnimationFrame(animateText);
  };

  // Magnet effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current || animationActive) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const deltaX = e.clientX - btnCenterX;
      const deltaY = e.clientY - btnCenterY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const magnetRange = 200; // Increased range
      if (distance < magnetRange) {
        const strength = (magnetRange - distance) / magnetRange;
        const translateX = deltaX * strength * 0.3;
        const translateY = deltaY * strength * 0.3;

        buttonRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;

        if (arrowRef.current) {
          arrowRef.current.style.transform = `translate(${
            translateX * 0.8
          }px, ${translateY * 0.8}px) rotate(-45deg)`; // stronger movement
        }

        if (arrowRef.current) {
          arrowRef.current.style.transform = `translate(${
            translateX * 0.5
          }px, ${translateY * 0.5}px)`; // subtle motion
        }
      } else {
        buttonRef.current.style.transform = "translate(0, 0)";
        if (arrowRef.current) {
          arrowRef.current.style.transform = "translate(0, 0)";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animationActive]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const textScale = 1 + animationProgress * 280;

  return (
    <div className="fixed inset-0 z-50">
      {videoVisible && (
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
            className="text-6xl font-bold pointer-events-none text-center bg-black custom-xl:bg-transparent text-white custom-xl:text-black py-2"
            style={{
              transform: `scale(${textScale})`,
              transition: animationActive ? "transform 0s linear" : "none",
            }}
          >
            LET'S BRING LIFE TO YOUR PROJECTS.
          </h1>
        </div>

        {!animationActive && (
          <div
            ref={buttonRef}
            className="relative md:top-[200px] top-[100px]  cursor-pointer flex flex-col items-center justify-center p-5 z-20 w-[120px] h-[120px] rounded-full bg-black text-white"
            onClick={handleClick}
          >
            <p className="mb-2 font-medium">Click Here</p>
            <div
              ref={arrowRef}
              className="w-8 h-8 transition-transform duration-150 ease-out flex justify-center items-center"
            >
              <FaLocationArrow size={22} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

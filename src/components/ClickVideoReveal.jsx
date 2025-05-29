import { useEffect, useRef, useState } from "react";
import firstVideo from "../../public/second-video.mp4";
import { TbRulerOff } from "react-icons/tb";
import PixelCard from "./Pixel-hovevr";

export default function ClickVideoReveal({ onComplete }) {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const firstVideoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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

      const magnetRange = 200;
      if (distance < magnetRange) {
        const strength = (magnetRange - distance) / magnetRange;
        const translateX = deltaX * strength * 0.3;
        const translateY = deltaY * strength * 0.3;

        buttonRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      } else {
        buttonRef.current.style.transform = "translate(0, 0)";
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
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={firstVideoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={firstVideo}
          onCanPlayThrough={() => setVideoReady(true)}
        />
      </div>

      {/* Wait until video is ready to show UI */}
      {videoReady && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center h-screen flex-col"
          style={{
            opacity: animationProgress === 1 ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="flex flex-col items-center justify-center">
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
              onClick={handleClick}
              className="group relative md:top-[150px] top-[60px] z-20 w-[300px] h-[300px] rounded-2xl flex items-center justify-center cursor-pointer transition-transform duration-300"
            >
              <PixelCard
                variant="bw"
                gap={5}
                speed={40}
                colors="#ffffff,#000000"
                className="square-pixel-card"
              >
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ pointerEvents: "none" }}
                >
                  <TbRulerOff
                    size={80}
                    className="text-white transform rotate-90"
                  />
                </div>
              </PixelCard>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

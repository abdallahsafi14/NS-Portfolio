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
  const buttonRef = useRef(null);

  const handleClick = () => {
    setAnimationActive(true);
    const animationDuration = 3000;
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

  // magnet effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current || animationActive) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      const range = 200;
      if (dist < range) {
        const strength = (range - dist) / range;
        buttonRef.current.style.transform = `translate(${
          dx * strength * 0.3
        }px, ${dy * strength * 0.3}px)`;
      } else {
        buttonRef.current.style.transform = "translate(0, 0)";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animationActive]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
          src={firstVideo}
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

          {!animationActive && (
            <div
              ref={buttonRef}
              onClick={handleClick}
              className="relative mt-16 w-[300px] h-[300px] rounded-2xl flex items-center justify-center cursor-pointer transition-transform duration-300"
            >
              <PixelCard
                variant="bw"
                gap={5}
                speed={40}
                colors="#ffffff,#000000"
                className="square-pixel-card"
              >
                <TbRulerOff
                  size={80}
                  className="absolute text-white rotate-90"
                  style={{ pointerEvents: "none" }}
                />
              </PixelCard>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

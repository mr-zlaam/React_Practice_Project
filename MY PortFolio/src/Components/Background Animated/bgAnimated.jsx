import { useState, useEffect } from "react";
import "./BgAnimated.css";
import App from "../../App";
import Cursor from './../Cursor/Cursor'
const RadialGradient = () => {
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [gradientStyles, setGradientStyles] = useState({
    background: "radial-gradient(circle, #d4cbcb 0%, #becbcf 0%, #ccd4db 0%)",
  });

  useEffect(() => {
    let animationFrameId;

    const animateBackground = () => {
      if (!isMouseMoving) {
        // Calculate the animation values based on time or any other criteria you prefer
        const animationX = (Math.sin(Date.now() * 0.0007) + 1) * 0.5;
        const animationY = (Math.cos(Date.now() * 0.0007) + 1) * 0.5;

        const gradient = `radial-gradient(circle at ${animationX * 100}% ${animationY * 100
          }%, #d6d6d6 0%, #888888 100%, #888888 50%)`;
        setGradientStyles({ background: gradient });

        animationFrameId = requestAnimationFrame(animateBackground);
      }
    };

    // Start the background animation
    animateBackground();

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const gradient = `radial-gradient(circle at ${x}px ${y}px, #f1efef 0%, #eee5e5 0%, #9e9e9e 100%)`; // This line can help  you to edit the colors
      setGradientStyles({ background: gradient });

      // Stop the background animation when the mouse is moved
      setIsMouseMoving(true);
      cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // Clean up event listener and animation frame
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseMoving]);

  return (
    <div
      className="radial-gradient-container radiant_controller"
      style={gradientStyles}
    >
      <App />
      <Cursor />
    </div>
  );
};

export default RadialGradient;

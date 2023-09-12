import { useState, useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      const easingFactor = 0.1; // Adjust this value for slower movement

      setPosition((prevPosition) => ({
        x: prevPosition.x + (newX - prevPosition.x) * easingFactor,
        y: prevPosition.y + (newY - prevPosition.y) * easingFactor,
      }));
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}>
      <div className="dot" />
    </div>
  );
}

export default Cursor;

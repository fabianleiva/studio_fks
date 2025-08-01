import { useEffect, useState } from "react";

const CustomCursor = ({ label }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (window.innerWidth < 1024) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] flex items-center"
      style={{
        top: position.y,
        left: position.x,
        transform: "translateY(-50%)",
      }}
    >
      <div className="w-3 h-3 bg-black rounded-full" />
      {label && (
        <span className="ml-2 text-lg text-black select-none whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
};

export default CustomCursor;

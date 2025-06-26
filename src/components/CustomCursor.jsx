import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    if (window.innerWidth < 1024) return; // no aplicar en mobile

    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "#000";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;

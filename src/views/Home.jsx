import { useState, useEffect } from "react";

const images = [
  { src: "/cmargarita_img_1.webp", project: "Casa Margarita" },
  { src: "/cmargarita_img_3.webp", project: "Casa Margarita" },
  { src: "/cmargarita_img_9.webp", project: "Casa Margarita" },
  { src: "/cmargarita_img_10.webp", project: "Casa Margarita" },
  { src: "/cmarita_img_1.webp", project: "Casa Marita" },
  { src: "/cmarita_img_2.webp", project: "Casa Marita" },
  { src: "/hh_img_5.webp", project: "Hain Hut" },
  { src: "/ir_c_1.webp", project: "Conjunto Isabel Riquelme" },
  { src: "/ir_img_1.webp", project: "Conjunto Isabel Riquelme" },
  { src: "/ir_img_4.webp", project: "Conjunto Isabel Riquelme" },
  { src: "/lh_axo_1.webp", project: "La Habitación" },
  { src: "/lh_elev_1.webp", project: "La Habitación" },
  { src: "/lh_img_1.webp", project: "La Habitación" },
  { src: "/lh_img_2.webp", project: "La Habitación" },
  { src: "/lh_plan_1.webp", project: "La Habitación" },
  { src: "/ph_img_3.webp", project: "Parque Huenao" },
  { src: "/ph_img_5.webp", project: "Parque Huenao" },
  { src: "/ph_img_7.webp", project: "Parque Huenao" },
  { src: "/ps_corte_1.webp", project: "Polo Sur" },
  { src: "/ps_foto_1.webp", project: "Polo Sur" },
  { src: "/ps_foto_2.webp", project: "Polo Sur" },
  { src: "/ps_foto_3.webp", project: "Polo Sur" },
  { src: "/ps_img_1.webp", project: "Polo Sur" },
  { src: "/ps_img_2.webp", project: "Polo Sur" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * images.length)
  );
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const currentImage = images[currentIndex];

  const handleClick = () => {
    if (isFadingOut || isFadingIn) return;

    setIsFadingOut(true);
    setTimeout(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      setIsFadingOut(false);
      setIsFadingIn(true);
      setTimeout(() => {
        setIsFadingIn(false);
      }, 400);
    }, 400);
  };

  return (
    <main className="absolute inset-0 z-0 flex justify-center overflow-hidden px-3 font-work-sans">
      <div className="absolute bottom-5 left-0 right-0  z-[101] flex justify-center pointer-events-none">
        <div className="px-4 py-1 mt-4 text-lg font-semibold">
          {currentImage.project}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={currentImage.src}
          alt={`image_${currentImage.project}`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`max-w-full px-5 lg:max-w-[60vw] max-h-[40vh] lg:max-h-[60vh] cursor-pointer transition-opacity duration-300 ease-in absolute
            ${
              isFadingOut
                ? "opacity-0"
                : isFadingIn
                ? "opacity-0 animate-fade-in"
                : "opacity-100"
            }`}
        />
      </div>
    </main>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [projectsState, setProjectsState] = useState("inactive");
  const [mediaState, setMediaState] = useState("inactive");
  const [officeState, setOfficeState] = useState("inactive");
  const [contactState, setContactState] = useState("inactive");

  const [showInfoText, setShowInfoText] = useState(false);
  const toggleInfo = () => setShowInfoText((prev) => !prev);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-[100] p-5 w-full bg-[#fafafa] font-work-sans tracking-tight font-medium">
          {/* Desktop Menu */}
          <div className="hidden lg:grid grid-cols-[2fr_1fr_2fr] gap-5 items-start text-left ">
            <div className="flex justify-start">
              <h3 className="text-3xl font-work-sans tracking-tight flex items-center">
                fks{" "}
                <span className="ml-2 w-2.5 h-2.5 bg-[#242424] rounded-full inline-block"></span>{" "}
              </h3>
            </div>
            <div></div>
            <div className="flex justify-end">
              <h3
                onClick={toggleInfo}
                className="text-3xl cursor-pointer flex items-center transition-transform duration-300 hover:text-[#adadad]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transform transition-transform duration-300 ${
                    showInfoText ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </h3>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex justify-between">
            <div className="flex">
              <div className="flex justify-start">
                <h3 className="text-3xl font-work-sans tracking-tight flex items-center ">
                  fks{" "}
                  <span className="ml-2 w-2.5 h-2.5 bg-[#242424] rounded-full inline-block"></span>{" "}
                </h3>{" "}
              </div>
            </div>
            <div className="flex uppercase justify-end">
              <h3
                onClick={toggleInfo}
                className="text-3xl cursor-pointer flex items-center transition-transform duration-300 hover:text-[#adadad]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transform transition-transform duration-300 ${
                    showInfoText ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <path
                    d="M12 5v14m-7-7h14"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </h3>
            </div>
          </div>
        </nav>

        {/* Info text area Desktop*/}
        <div className="font-work-sans tracking-tight font-medium bg-[#fafafa]">
          <div
            className={`fixed bottom-5 bg-[#fafafa] w-full px-5 flex flex-col hidden lg:grid lg:grid-cols-[3fr_1fr] justify-between transition-opacity duration-700 z-[10] ${
              showInfoText
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Izquierda */}
            <div className="text-left max-w-full text-sm lg:text-lg">
              <p>
                Somos una oficina de arquitectura con base en Santiago de Chile,
                fundada por Juan Pablo Fuentes, Tomás Keymer y Andrés
                Sanfuentes. Diseñamos y desarrollamos proyectos de alto estándar
                en distintas escalas: master plans, arquitectura residencial,
                edificios y muebles. Garantizamos la máxima calidad desde la
                etapa conceptual hasta la obra construida, integrando siempre la
                visión del cliente.
              </p>
            </div>

            {/* Derecha */}
            <div className="flex flex-col justify-end text-left lg:text-right max-w-full lg:max-w-[45vw] text-sm lg:text-lg mt-5 lg:mt-0">
              <p>fksarquitectos@gmail.com</p>
              <a
                href="https://www.instagram.com/studiofks_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#242424] text-[#adadad] "
              >
                @studiofks_{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Panel de info SOLO en mobile */}
        <div
          className={`lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-[#fafafa] z-50 transition-opacity duration-700 ease-in-out ${
            showInfoText
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-full flex flex-col items-left justify-center text-left text-sm font-work-sans tracking-tight font-medium px-6">
            {/* Texto descriptivo */}
            <p className="mb-5">
              Somos una oficina de arquitectura con base en Santiago de Chile,
              fundada por Juan Pablo Fuentes, Tomás Keymer y Andrés Sanfuentes.
              Diseñamos y desarrollamos proyectos de alto estándar en distintas
              escalas: master plans, arquitectura residencial, edificios y
              muebles. Garantizamos la máxima calidad desde la etapa conceptual
              hasta la obra construida, integrando siempre la visión del
              cliente.
            </p>

            {/* Información de contacto */}
            <div className="flex flex-col">
              <p>fksarquitectos@gmail.com</p>
              <a
                href="https://www.instagram.com/studiofks_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#242424] text-[#adadad]"
              >
                @studiofks_
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;

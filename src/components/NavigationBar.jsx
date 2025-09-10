import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [showInfoText, setShowInfoText] = useState(false);
  const toggleInfo = () => setShowInfoText((prev) => !prev);

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-[100] p-5 w-full font-work-sans tracking-tight font-medium">
          {/* Desktop Menu (siempre visible, también en mobile) */}
          <div className="grid items-center gap-5 grid-cols-[1fr_auto] lg:grid-cols-[1fr_1fr]">
            <div className="flex justify-start">
              <NavLink
                to="/"
                className="text-3xl font-work-sans tracking-tight flex items-center duration-200 group whitespace-nowrap"
              >
                <div className="flex items-center transition-colors group-hover:text-[#848484]">
                  studio fks
                  <span className="ml-2 w-2.5 h-2.5 rounded-full inline-block bg-[#000000] transition-colors group-hover:bg-[#848484]"></span>
                </div>
              </NavLink>
            </div>


            <div className="hidden lg:flex justify-end text-lg">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"} mr-4`
                }
              >
                Proyectos
              </NavLink>
              <NavLink
                to="/office"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"} mr-4`
                }
              >
                Oficina
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"}`
                }
              >
                Contacto
              </NavLink>
            </div>
          </div>

          {/* Botón "+" visible solo en móvil */}
          <div className="lg:hidden absolute right-5 top-5">
            <button
              onClick={toggleInfo}
              className="text-3xl cursor-pointer transition-transform duration-300"
              aria-label="Abrir menú"
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
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menú flotante mobile */}
        <div
          className={`lg:hidden fixed inset-0 bg-[#fafafa] z-[90] flex flex-col items-center justify-center transition-opacity duration-500 ${
            showInfoText
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <NavLink
            to="/projects"
            className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]"
            onClick={toggleInfo}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/office"
            className="text-2xl mb-6 text-[#adadad] hover:text-[#000000]"
            onClick={toggleInfo}
          >
            Oficina
          </NavLink>
          <NavLink
            to="/contact"
            className="text-2xl text-[#adadad] hover:text-[#000000]"
            onClick={toggleInfo}
          >
            Contacto
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;

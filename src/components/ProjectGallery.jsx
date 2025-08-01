import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext, useRef } from "react";
import { ApiContext } from "../context/ApiContext.jsx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const ProjectGallery = ({ setCursorText }) => {
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const { projects } = useContext(ApiContext);
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const infoPanelRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCursorText(null); // limpia el texto del cursor al entrar

    if (projects.length > 0) {
      const foundProject = projects.find((e) => e.slug === projectSlug);
      if (foundProject) {
        setProject(foundProject);
        setCurrentImageIndex(0);
      }
    }

    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [projects, projectSlug]);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find((e) => e.slug === projectSlug);
      if (foundProject) {
        setProject(foundProject);
        setCurrentImageIndex(0);
      }
    }

    // Cambia el estado a 'true' después de 500ms
    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [projects, projectSlug]);

  const handleNextImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const handlePrevImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
    }
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setShowInfo(false);
    };

    if (showInfo) {
      document.addEventListener("click", handleClickAnywhere);
    }

    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, [showInfo]);

  const projectDetails = project
    ? [
        {
          label: "Arquitectura",
          value: project.acf.architects,
        },
        {
          label: "Arquitectos Asociados",
          value: project.acf.associate_architects,
        },
        { label: "Equipo", value: project.acf.team },
        { label: "Ubicación", value: project.acf.location },
        { label: "Cliente", value: project.acf.client },
        { label: "Superficie", value: project.acf.surface },
        { label: "Año", value: project.acf.year },
      ]
    : [];

  const surface = project?.acf.surface;
  const location = project?.acf.location;

  return (
    <main>
      <div
        id="desktop"
        className="w-screen h-[100dvh] flex flex-col justify-center items-center overflow-hidden relative hidden md:block page-fade-in"
      >
        {project && (
          <>
            <div className="absolute inset-0 flex">
              <div
                className="w-1/2 h-full relative group"
                onClick={handlePrevImage}
              >
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#000000] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowLeft />
                </span>
              </div>
              <div
                className="w-1/2 h-full relative group"
                onClick={handleNextImage}
              >
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#000000] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowRight />
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-full pointer-events-none">
              <img
                className="h-[70vh] max-w-[60vw] object-contain"
                src={
                  Object.values(project.acf.project_images).filter(
                    (img) => img
                  )[currentImageIndex]
                }
                alt={`Image ${currentImageIndex + 1}`}
                loading="lazy"
              />
            </div>

            <>
              {!showInfo && (
                <>
                  {/* Nombre fijo abajo a la izquierda */}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInfo(true);
                    }}
                    className="absolute bottom-0 left-0 p-5 text-lg font-work-sans z-10 text-[#000000] hover:text-[#848484]"
                  >
                    {project.acf.project_title}
                  </span>

                  {/* Superficie fijo centrado abajo */}
                  {surface && surface !== "-" && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInfo(true);
                      }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-5 text-lg font-work-sans z-10 text-[#000000] hover:text-[#848484]"
                    >
                      {surface}
                    </span>
                  )}

                  {/* Ubicación fijo abajo a la derecha */}
                  {location && location !== "-" && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInfo(true);
                      }}
                      className="absolute bottom-0 right-0 p-5 text-lg font-work-sans z-10 text-[#000000] hover:text-[#848484]"
                    >
                      {location}
                    </span>
                  )}
                </>
              )}

              {/* Botón cerrar cuando el panel está abierto */}
              {showInfo && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowInfo(false);
                  }}
                  className="absolute bottom-0 left-0 p-5 text-lg font-work-sans z-10 text-[#000000] hover:text-[#adadad]"
                >
                  Cerrar
                </span>
              )}
            </>

            <div
              ref={infoPanelRef}
              className={`fixed bottom-0 left-0 w-full bg-[#fafafa] justify-between text-[#000000] flex flex-col md:grid md:grid-cols-2 md:gap-3 transition-opacity duration-300 ease-in-out tracking-wider ${
                showInfo
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{ height: "85vh", zIndex: 9 }}
            >
              <div className="w-full text-sm xl:text-lg p-5 text-left md:col-span-1 font-work-sans">
                {project.acf.summary}
              </div>

              <div className="max-w-[45vw] lg:max-w-[35vw] xl:max-w-[45vw] ml-auto text-sm xl:text-lg p-5 text-right md:col-span-1 font-work-sans">
                {projectDetails
                  .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
                  .map(({ label, value }) => (
                    <p key={label}>
                      {label}: {value}
                    </p>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div
        id="mobile"
        className={`md:hidden pt-[20vh] page-fade-in ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          {project &&
            Object.values(project.acf.project_images)
              .filter((img) => img)
              .map((img, index) => (
                <img
                  key={index}
                  className="w-full object-cover px-5 pb-5"
                  src={img}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
              ))}
        </div>
        <div className="w-full bg-[#fafafa] text-[#000000] p-5 text-left flex flex-col py-6">
          <h3 className="mb-5">{project?.acf.project_title}</h3>
          <p>{project?.acf.summary}</p>
          <div className="mt-5">
            {projectDetails
              .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
              .map(({ label, value }) => (
                <p key={label}>
                  {label}: {value}
                </p>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectGallery;

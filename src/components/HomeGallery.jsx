import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const HomeGallery = ({ setCursorText }) => {
  const { projects } = useContext(ApiContext);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [galleryBlocks, setGalleryBlocks] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleMouseEnter = (projectId, title) => {
    setHoveredImage(projectId);
    setCursorText(title);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
    setCursorText(null);
  };

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  useEffect(() => {
    if (projects.length > 0 && galleryBlocks.length === 0) {
      const sortedProjects = [...projects].sort(
        (a, b) => Number(b.acf.project_id) - Number(a.acf.project_id)
      );

      const projectChunks = chunkArray(sortedProjects, 3);
      setGalleryBlocks([projectChunks, projectChunks, projectChunks]);

      const preloadImages = sortedProjects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = project.acf.cover_image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(preloadImages).then(() => {
        setImagesLoaded(true);
      });
    }
  }, [projects]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && projects.length > 0) {
        const sortedProjects = [...projects].sort(
          (a, b) => Number(b.acf.project_id) - Number(a.acf.project_id)
        );

        const projectChunks = chunkArray(sortedProjects, 3);
        setGalleryBlocks((prev) => [
          ...prev,
          projectChunks,
          projectChunks,
          projectChunks,
        ]);
      }
    });
    const sentinel = document.querySelector("#sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, [projects]);

  const getColStart = (idx, length) => {
    if (length === 1) return "col-start-5";
    if (length === 2) return idx === 0 ? "col-start-3" : "col-start-7";
    if (length === 3)
      return idx === 0
        ? "col-start-1"
        : idx === 1
        ? "col-start-5"
        : "col-start-9";
  };

  const getOffsetClass = (idx) => {
    if (idx === 0) return "translate-y-12";
    if (idx === 1) return "translate-y-24";
    if (idx === 2) return "translate-y-36";
  };

  const parallaxSpeeds = [-20, -15, -10];

  const renderRow = (rowProjects, index) => (
    <div key={index} className="hidden lg:grid grid-cols-11 w-full mb-96">
      {rowProjects.map((project, idx) => {
        const colStart = getColStart(idx, rowProjects.length);
        const speed = parallaxSpeeds[idx % parallaxSpeeds.length];

        return (
          <div
            key={`${project.id}-${idx}-${index}`}
            className={`relative group col-span-3 ${colStart} ${getOffsetClass(
              idx
            )}`}
            onMouseEnter={() =>
              handleMouseEnter(
                project.acf.project_id,
                project.acf.project_title
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <Parallax speed={speed}>
              {project.acf.project_type !== "furniture" ? (
                <Link to={`/${project.slug}`}>
                  <img
                    src={project.acf.cover_image}
                    alt={project.slug}
                    className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              ) : (
                <img
                  src={project.acf.cover_image}
                  alt={project.slug}
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </Parallax>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className={`flex flex-col pb-12 transition-opacity duration-700 ${
        imagesLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {galleryBlocks.map((chunks, blockIdx) => (
        <div key={blockIdx}>
          {chunks.map((row, index) => renderRow(row, `${blockIdx}-${index}`))}
        </div>
      ))}

      {/* Mobile fallback */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group"
            onMouseEnter={() =>
              handleMouseEnter(
                project.acf.project_id,
                project.acf.project_title
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            {project.acf.project_type !== "furniture" ? (
              <Link to={`/${project.slug}`}>
                <img
                  src={project.acf.cover_image}
                  alt={project.slug}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </Link>
            ) : (
              <img
                src={project.acf.cover_image}
                alt={project.slug}
                className="w-full h-auto"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      <div id="sentinel" className="w-full h-1"></div>
    </section>
  );
};

export default HomeGallery;

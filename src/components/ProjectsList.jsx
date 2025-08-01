import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
  const { projects } = useContext(ApiContext);
  const navigate = useNavigate();

  const isValidField = (value) =>
    value && value.trim() !== "" && value.trim() !== "-";

  // Filtra solo proyectos con título válido y tipo 'architecture'
  const visibleProjects = [...projects]
    .filter(
      (p) =>
        isValidField(p.acf.project_title) &&
        p.acf.project_type === "architecture"
    )
    .sort((a, b) => Number(b.acf.project_id) - Number(a.acf.project_id));

  return (
    <section className="mx-5">
      <div className="mb-32">
        <div className="h-6"></div>
        {visibleProjects.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-3 text-[#000000] cursor-default"
          >
            <div className="col-span-3 flex justify-end overflow-hidden">
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col text-left py-6 h-full min-w-[30vw] lg:max-w-[30vw] mr-6 justify-between">
                  <div>
                    <p className="uppercase pb-5">{p.acf.project_title}</p>

                    {isValidField(p.acf.architects) && (
                      <p className="text-[#adadad]">
                        Arquitectura: {p.acf.architects}
                      </p>
                    )}
                    {isValidField(p.acf.associate_architects) && (
                      <p className="text-[#adadad]">
                        Arquitectos asociados: {p.acf.associate_architects}
                      </p>
                    )}
                    {isValidField(p.acf.team) && (
                      <p className="text-[#adadad]">Equipo: {p.acf.team}</p>
                    )}
                    {isValidField(p.acf.location) && (
                      <p className="text-[#adadad]">
                        Ubicación: {p.acf.location}
                      </p>
                    )}
                    {isValidField(p.acf.year) && (
                      <p className="text-[#adadad]">Año: {p.acf.year}</p>
                    )}
                    {isValidField(p.acf.surface) && (
                      <p className="text-[#adadad]">
                        Superficie: {p.acf.surface}
                      </p>
                    )}
                    {isValidField(p.acf.client) && (
                      <p className="text-[#adadad]">Cliente: {p.acf.client}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <img
                      src={p.acf.cover_image}
                      alt={p.acf.project_title}
                      className="py-6 lg:max-h-[50vh] lg:transition-transform lg:duration-300 lg:hover:-translate-x-5"
                      onClick={() => navigate(`/${p.slug}`)}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="col-span-3 h-[1px] bg-[#adadad] border-0 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;

import ProjectsList from "../components/ProjectsList.jsx";

const Projects = () => {
  return (
    <>
      <main className="pt-[20vh] page-fade-in">
        <div className="fixed top-0 w-full bg-[#fafafa] h-[20vh] z-50"></div>
        <div className="fixed grid grid-cols-2 lg:grid-cols-3 px-5 text-[#000000] uppercase w-full bg-[#fafafa] text-base z-50">
          <p className="text-left">Lista de Proyectos</p>
          <p className="text-left hidden lg:block"></p>

          <div className="flex justify-end lg:grid lg:grid-cols-3">
            <p className="text-left hidden lg:block"></p>
            <p className="text-left hidden lg:block"></p>
            <p className="text-right"></p>
          </div>

          <hr className="col-span-3 h-[1px] bg-[#adadad] border-0 rounded dark:bg-[#000000] translate-y-[-1px]" />
        </div>
        <ProjectsList />
      </main>
    </>
  );
};
export default Projects;

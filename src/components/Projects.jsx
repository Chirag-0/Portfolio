import Cards from "./Cards";

function Projects({projectInfo}) {
    // console.log(projectInfo);
  return (
    <div className="h-auto w-full bg-[#181818]">
        <p className="text-5xl font-bold text-white ml-16 pt-7 pb-7">Featured Projects</p>
        <Cards projectInfo={projectInfo}/>
        </div>
  )
}

export default Projects;
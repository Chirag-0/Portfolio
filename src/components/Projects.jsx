import Cards from "./Cards";

function Projects({projectInfo}) {
    // console.log(projectInfo);
  return (
    <div className="h-auto w-full bg-[#181818] -mt-5 pl-2 md:ml-0">
        <p className="font-titan text-4xl md:text-6xl text-white ml-5 md:ml-20 pt-7 pb-7 whitespace-nowrap">Featured Projects</p>
        <Cards projectInfo={projectInfo}/>
    </div>
  )
}

export default Projects;
import CardsDetails from "./CardsDetails";

function Cards({projectInfo}) {
    // console.log(projectInfo);
    
  return (
    <div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:ml-0  sm:w-auto">
            {projectInfo.map((project)=>(
              <CardsDetails projectInfo={project} key={project.name}/>
            ))}
        </div>
    </div>
  )
}

export default Cards;
import CardsDetails from "./CardsDetails";

function Cards({projectInfo}) {
    // console.log(projectInfo);
    
  return (
    <div>
        <div className="flex flex-wrap gap-4  p-2 justify-center ">
            {projectInfo.map((project)=>(
              <div key={project.name} className="w-full -mr-2 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <CardsDetails projectInfo={project} />
             </div>
            ))}
        </div>
    </div>
  )
}

export default Cards;
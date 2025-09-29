import CardsDetails from "./CardsDetails";

function Cards({projectInfo}) {
    
  return (
    <div>
        <div className="flex flex-wrap justify-center items-center gap-4 2xl:gap-12 2xl:w-[100%] sm:ml-0  sm:w-auto 2xl:p-4 2xl:space-x-4">
            {projectInfo.map((project)=>(
              <CardsDetails projectInfo={project} key={project.name}/>
            ))}
        </div>
    </div>
  )
}

export default Cards;
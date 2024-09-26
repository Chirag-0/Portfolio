import CardsDetails from "./CardsDetails";

function Cards({projectInfo}) {
    // console.log(projectInfo);
    
  return (
    <div>
        <div className="flex justify-center items-center flex-wrap  gap-4 p-2 -ml-14 md:ml-0 ">
            {projectInfo.map((project)=>(
              <CardsDetails projectInfo={project} key={project.name}/>
            ))}
        </div>
    </div>
  )
}

export default Cards;
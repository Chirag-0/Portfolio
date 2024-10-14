
function CardsDetails({ projectInfo }) {
    return (
      <div className="h-auto w-[19.8rem] md:w-[27rem] p-4 bg-[#282828] rounded-lg hover:scale-[0.96]  group shadow-lg">
       
        <p className="font-bold text-white text-2xl mb-3">{projectInfo.name}</p>
        <div className="grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out">
          <img className=" bg-cover rounded-lg" src={projectInfo.img} alt="" />
        </div>
        <div className="mt-4">
          <p className="text-white text-xs mb-2 leading-relaxed">
            {projectInfo.details}
          </p>
          <p className="text-[#B3B3B3] font-medium text-xs mb-3">
            {projectInfo.techStack}
          </p>
          <div className="flex space-x-3">
            <a href={projectInfo.source} target="_blank" className="bg-[#E79738] text-black rounded-lg px-4 py-2 font-semibold text-sm hover:bg-[#ffb347] transition-all duration-300 ease-in-out shadow-md">
              View Source
            </a>
           {projectInfo.try === null ? "" :<a href={projectInfo.try} target="_blank" className="bg-[#E79738] text-black rounded-lg px-4 py-2 font-semibold text-sm hover:bg-[#ffb347] transition-all duration-300 ease-in-out shadow-md">
              Live Demo
            </a>}
          </div>
        </div>
        
      </div>
    );
  }
  
export default CardsDetails
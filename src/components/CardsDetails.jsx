
function CardsDetails({projectInfo}) {
  return (
    <div className="h-[19rem] w-[19rem] p-3 bg-[#282828] ml-10 rounded-lg  hover:border hover:scale-105">
        <p className="font-semibold text-white text-2xl mb-2">{projectInfo.name}</p>
            <img className="bg-cover" src={projectInfo.img} alt="" />
            <p className="text-white ">{projectInfo.details}</p>
            <p className="text-[#B3B3B3] font-semibold">{projectInfo.techStack}</p>
            <button className="bg-[#F5C518] rounded-md p-1 font-semibold mt-2 "><a href="#">{projectInfo.source}</a></button>
            <button className="bg-[#F5C518] rounded-md p-1 font-semibold mt-2 ml-3"><a href="#">{projectInfo.try}</a></button>
    </div>
  )
}

export default CardsDetails
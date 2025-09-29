import { Link } from "react-router-dom"


function MenuBar({setMenu}) {
    
  return (
   
        <div className={`w-[90%] h-auto bg-[#3a3a3a] absolute left-0 ml-4 rounded-lg mt-16 shadow-lg overflow-hidden opacity-[95%]`}>
            <div className="font-roboto text-white text-3xl font-semibold p-6">
                <ul onClick={() => setMenu(false)} className="hover:text-[#E79738] border-b border-gray-600 py-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link to='/home'>Home</Link>  
                </ul>
                <ul onClick={() => setMenu(false)} className="hover:text-[#E79738] border-b border-gray-600 py-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link to='/project'>Projects</Link> 
                </ul>
                <ul onClick={() => setMenu(false)} className="hover:text-[#E79738] py-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link to='/contact'>Contact Me</Link>
                </ul>
            </div>
       </div>
  

  ) 
}

export default MenuBar
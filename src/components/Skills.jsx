/* eslint-disable no-unused-vars */
import { useState } from "react"


function Skills() {
  
    const [hov,setHov] = useState(false);
    function handleHover(){
        setHov(true);
    }
    
  return (

    <div className="h-auto w-full bg-[#181818]  mt-52 sm:mt-14 md:mt-6 lg:-mt-14">
        <div className="text-white md:mt-4 md:m-3 pt-20 ml-1 md:ml-12 font-bold text-5xl  p-[2rem]">
             <p className="font-titan text-4xl md:text-6xl mt-24 md:mt-2">Skills</p>
             <div  className="w-[90%] font-roboto font-thin text-gray-400">

                <div className="border-t mt-8 p-6 ">HTML 
                    <img className="hidden md:w-14 md:h-14 md:inline ml-[70%] md:opacity-0" src="/public/html-5.png" alt="" />
                </div>   
                <div className="border-t p-6 ">CSS</div>   
                <div className="border-t p-6 ">JavaScript</div>   
                <div className="border-t p-6 ">React JS</div>   
                <div className="border-t p-6 ">Java</div>   
                <div className="border-t p-6 ">SQL</div>   
                <div className="border-t p-6 ">GSAP</div>   
                <div className="border-t p-6 border-b whitespace-nowrap">Locomotive</div>   
             </div>   
            {/* <div className="w-20 h-20 mt-8 flex gap-9 ">
                <img src="./src/assets/html-5.png" alt="" />
                <img src="./src/assets/css-3.png" alt="" />
                <img src="./src/assets/js.png" alt="" />
                <img src="./src/assets/java.png" alt="" />
                <img src="./src/assets/reactpng.png" alt="" />
                <img src="./src/assets/mysql.png" alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Skills
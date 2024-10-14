import Avatar from "./Avatar"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
    const title = useRef();
    const paragraph = useRef();
    useGSAP(()=>{
        gsap.from([title.current,paragraph.current],{
            opacity:0,
            y:90,
            duration:1.3,
            delay:1,
            ease:"power3.out",
            stagger:0.2,
        })
    },[])    
  return (
    <main className="h-auto">
       <div className=" text-white  flex flex-col-reverse md:flex md:flex-row lg:flex lg:flex-row w-full h-[100%] sm:h-screen relative">
            <div className="-mb-[20rem] sm:-mb-52 lg:mb-0  -mt-10">
                <div className="w-92 relative h-34 md:h-24 lg:h-34">
                <h3 ref={title} className="font-titan flex flex-col text-5xl ml-8 mt-16 sm:mt-8 md:flex md:flex-col md:whitespace-nowrap lg:flex lg:flex-col md:text-[3.8rem] xl:block lg:text-[4.5rem] md:mt-24 md:ml-20 relative z-30 bottom-0 pb-2  overflow-hidden"> 
                Hello, <span>I&apos;m <span className="text-[#E79738]"> Chirag</span></span> 
                </h3>
                </div>
                <p ref={paragraph} className="ml-8 mt-2 w-[75%] md:ml-20 lg:mt-10 xl:mt-2 md:w-[60%] xl:w-1/2 font-roboto text-[#706E6E] font-bold md:text-[0.9rem] lg:text-[1rem]">
                    <br />
                    I am a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React JS. I specialize in crafting interactive and visually captivating web experiences, using libraries like GSAP and Locomotive for advanced animations.
                <br /><br />
                Proficient in Java and Data Structures, I focus on efficient problem-solving and collaborative development using Git and GitHub.
                </p>

                <button className="font-roboto bg-[#E79738] text-black font-semibold ml-8 md:ml-20 mt-10 md:mt-8 p-2 rounded-md hover:bg-[#ffb347] transition-all duration-300 ease-in-out"><a href="/Resume.pdf" download >Get Resume</a></button>
            </div>
                {/* <div className="mt-14 md:mt-32 ml-12 md:ml-38 pr-20 w-[80%] h-[80%] md:w-[25%] md:h-[25%] p-3 "><img src="\src\assets\ReadyPlayerMe-Avatar.png" alt="" /></div> */}
                <div className="h-[56vh] w-[80%] md:h-[65%] md:w-[40%] lg:h-[70%] lg:w-[48%] xl:h-[540px] xl:w-[700px] ml-10 pr-3 relative top-0 ">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[-20,5,5]} fov={30} />
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[34, 20, 50]} intensity={1.4} />
                    
                    <Avatar 
                     animationURL="/animations/Waving.fbx"
                    />
                    <OrbitControls />
                    </Canvas>
                   </div>
       </div>
        
    </main>
  )
}

export default Hero
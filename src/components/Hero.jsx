import Avatar from "./Avatar"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero() {
  return (
    <main>
       <div className=" text-white flex flex-col-reverse md:flex md:flex-row">
            <div>
                <h3 className="font-titan text-[32px] ml-8 mt-6 inline-flex md:inline-block md:text-[72px]  md:mt-18 md:ml-20 whitespace-nowrap "> 
                Hello, <span>I&apos;m <span className="text-[#E79738] ">Chirag</span> </span>
                </h3>
                <p className="ml-8 mt-2 w-[70%] md:ml-20 md:mt-2 md:w-1/2 font-roboto text-[#706E6E] font-semibold">
                    <br />
                    I am a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React JS. I specialize in crafting interactive and visually captivating web experiences, using libraries like GSAP and Locomotive for advanced animations.
                <br /><br />
                Proficient in Java and Data Structures, I focus on efficient problem-solving and collaborative development using Git and GitHub.
                </p>

                <button className="font-roboto bg-[#E79738] text-black font-semibold ml-8 md:ml-20 mt-10 p-2 rounded-md hover:bg-[#ffb347] transition-all duration-300 ease-in-out">Get Resume</button>
            </div>
                {/* <div className="mt-14 md:mt-32 ml-12 md:ml-38 pr-20 w-[80%] h-[80%] md:w-[25%] md:h-[25%] p-3 "><img src="\src\assets\ReadyPlayerMe-Avatar.png" alt="" /></div> */}
                <div className="h-[30%] w-[80%] md:h-[500px] md:w-[900px] ml-10 pr-3 ">
                    <Canvas>
                    <ambientLight intensity={1.4} />
                    <directionalLight position={[30, 10, 50]} intensity={1} />
                    
                    <Avatar 
                    avatarURL="/src/model/myavatar.glb" animationURL="src/animations/Wa.fbx"
                    />
                    <OrbitControls />
                    </Canvas>
                   </div>
       </div>
        
    </main>
  )
}

export default Hero
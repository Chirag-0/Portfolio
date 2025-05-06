import { useRef, useState } from "react"
import MenuBar from "./MenuBar";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import { Link } from "react-router-dom";


function Navbar() {
    const [menu,setMenu] = useState(false);    
    const navRef = useRef();
    useGSAP(()=>{
        gsap.from(navRef.current,{
            opacity:0,
            y:-500,
            duration:0.5,
            delay:0.6,
            ease:"circ.inOut",
            
        })
    })

  return (
    <nav ref={navRef}  className="font-[Roboto-Condensed,sans-serif] flex justify-between w-full pt-4 md:ml-0 md:pt-0 relative z-50 ">
    {/* Chirag Chouhan name */}
    <div className="relative z-[80]">
        <h3 className="text-white font-semibold inline-block ml-6 md:ml-20 p-[1.2px] whitespace-nowrap transition-all duration-300 ease-in-out transform hover:scale-105 md:mt-2">
            <Link to='/'>Chirag Chouhan</Link>
        </h3>
    </div>

    {/* Close icon and Menu */}
    <div className="sm:hidden relative z-50  ">
        {menu ? (
            <>
                {/* Close button */}
                <div className="h-8 w-8 p-2  transition-all duration-300 ease-in-out relative z-[80] ml-[5.1rem] ">
                    <img onClick={() => setMenu(!menu)} className="h-4 w-5 text-[#E79738]" src="/close.png" alt="clear" />
                </div>

                {/* MenuBar (Overlay with high z-index) */}
                <div className="fixed inset-0  bg-opacity-80 z-40">
                    <MenuBar setMenu={setMenu} />
                </div>
            </>
        ) : (
            <div className="h-6 w-12 p-2 ml-[5.5rem] mr-0 transition-all duration-300 ease-in-out">
                <img onClick={() => setMenu(!menu)} className="h-6 w-6" src="/menu.png" alt="menu" />
            </div>
        )}
    </div>

    {/* Main Navigation */}
    <nav className="text-white font-semibold relative z-30">
        <div className="hidden sm:flex justify-between gap-7 p-2 sm:mr-20 md:-ml-1 md:mt-2">
            <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <Link to='/home'>Home</Link>
            </ul>
            <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <Link to='/project'>Projects</Link>
            </ul>
            <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer whitespace-nowrap">
                <Link to='/contact'>Contact Me</Link>
            </ul>
        </div>
    </nav>
</nav>

    
  )
}

export default Navbar
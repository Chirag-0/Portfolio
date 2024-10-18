/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Skills() {
    const skills = [
      useRef(), useRef(), useRef(), useRef(), 
      useRef(), useRef(), useRef(), useRef(), useRef()
    ];
  
    useEffect(() => {
      skills.forEach((skill, index) => {
        gsap.fromTo(
          skill.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: skill.current,
              start: "top 70%",
              end: "bottom 10%",
              scrub: 1,
              markers: false,
            },
          }
        );
      });
    }, []);
  
    return (
      <div className="h-auto w-full bg-[#181818] mt-52 sm:mt-14 md:mt-6 lg:-mt-14">
        <div className="text-white md:mt-4 md:m-3 pt-20 ml-1 md:ml-12 font-bold text-5xl p-[2rem]">
          <p ref={skills[0]} className="font-titan text-4xl md:text-6xl mt-24 md:mt-2 mb-8">Skills</p>
          <div className="w-[90%] font-roboto font-thin text-gray-400">
            {['HTML', 'CSS', 'JavaScript', 'React JS', 'Java', 'SQL', 'GSAP', 'Locomotive'].map((skill, i) => (
              <div key={i} ref={skills[i + 1]} className="border-t p-6 ">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Skills
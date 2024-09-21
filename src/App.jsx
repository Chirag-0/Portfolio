import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/skills"

const projectInfo = [
  {
    name:"Movies Mania",
    img:"/src/assets/moviemania.png",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a. ",
    techStack:"Tech Stack: HTML,CSS,React JS",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Notes App",
    img:"/src/assets/notesapp.png",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.",
    techStack:"Tech Stack: HTML,CSS,React JS",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Snake Game",
    img:"/src/assets/snake.png",
    details:"LLorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Weather App",
    img:"/src/assets/weather.png",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a. ",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  }
]

function App() {
  return (
    <div className="h-screen w-full bg-[#181818]">
     <Navbar/>
     <Hero/>
     <Skills/>
     <Projects projectInfo={projectInfo}/>
     <Contact/>
    </div>
  )
}

export default App

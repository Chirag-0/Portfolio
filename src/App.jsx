import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/skills"
import Avatar from "./components/Avatar"
import MenuBar from "./components/MenuBar"


const projectInfo = [
  {
    name:"Movies Mania",
    img:"/src/assets/moviemania.png",
    details:"Developed a Movie Mania app using React JS, utilizing the OMDB API to fetch movie data.Implemented custom hooks for localStorage to persist watched data.",
    techStack:"Tech Stack: HTML,CSS,React JS",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Notes App",
    img:"/src/assets/notesapp.png",
    details:"Developed a notes app with add, delete, and edit functionality, including timestamp display for creation and last modification. It is fully responsive and uses local storage for data persistence.",
    techStack:"Tech Stack: HTML,CSS,JavaScript",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Snake Game",
    img:"/src/assets/snake.png",
    details:"Classic snake game with movement in four directions to eat food, tracking score and high score. Includes music on/off buttons to enhance user experience and customizable gameplay settings.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Weather App",
    img:"/src/assets/weather.png",
    details:"Weather app with search functionality to fetch and display city weather, including temperature, wind speed, and humidity. Fully responsive for a seamless experience across all devices.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"File Compressor",
    img:"/src/assets/filecompressor.png",
    details:"File compressor and decompressor in Java using the Huffman coding algorithm. Huffman coding is a popular algorithm for lossless data compression, commonly used in file compression applications.",
    techStack:"Tech Stack: Java",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Cynthia Ugw Clone",
    img:"/src/assets/cynthiaugw.png",
    details:"This project is a clone of the animated website Cynthia Ugw.The website features stunning animations and showcases my skills in frontend web development.",
    techStack:"Tech Stack: HTML,CSS,JavaScript,GSAP",
    source:"Source Code",
    try:"Try it",
  }
]

function App() {
  return (
    <div className="h-auto w-full bg-[#181818]">
      <MenuBar/>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Projects projectInfo={projectInfo}/>
     <Contact/>
    </div>
  )
}

export default App

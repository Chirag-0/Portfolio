import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills";
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider,useLocation } from "react-router-dom"
import { useEffect,useState} from "react"


const projectInfo = [
  {
    name:"Movies Mania",
    img:"/moviemania.png",
    details:"Developed a Movie Mania app using React JS, utilizing the OMDB API to fetch movie data.Implemented custom hooks for localStorage to persist watched data.",
    techStack:"Tech Stack: HTML,CSS,React JS",
    source:"https://github.com/Chirag-0/Movies-Mania",
    try:"https://movies-manias.netlify.app/",
  },
  {
    name:"Notes App",
    img:"/notesapp.png",
    details:"Developed a notes app with add, delete, and edit functionality, including timestamp display for creation and last modification. It is fully responsive and uses local storage for data persistence.",
    techStack:"Tech Stack: HTML,CSS,JavaScript",
    source:"https://github.com/Chirag-0/Notes-App/tree/main",
    try:"https://take-yournotes.netlify.app/",
  },
  {
    name:"Snake Game",
    img:"/snake.png",
    details:"Classic snake game with movement in four directions to eat food, tracking score and high score. Includes music on/off buttons to enhance user experience and customizable gameplay settings.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"https://github.com/Chirag-0/Snake-Game/tree/main",
    try:"https://play-classic-snake-game.netlify.app/",
  },
  {
    name:"Weather App",
    img:"/weather.png",
    details:"Weather app with search functionality to fetch and display city weather, including temperature, wind speed, and humidity. Fully responsive for a seamless experience across all devices.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"https://github.com/Chirag-0/weather-app/tree/master",
    try:"https://open-weather-cast.netlify.app/",
  },
  {
    name:"File Compressor",
    img:"/filecompressor.png",
    details:"File compressor and decompressor in Java using the Huffman coding algorithm.It is a popular algorithm for lossless data compression.",
    techStack:"Tech Stack: Java",
    source:"https://github.com/Chirag-0/FileCompressor",
    try:null,
  },
  {
    name:"Cynthia Ugw Clone",
    img:"/cynthiaugw.png",
    details:"This project is a clone of the animated website Cynthia Ugw.The website features stunning animations and showcases my skills in frontend web development.",
    techStack:"Tech Stack: HTML,CSS,JavaScript,GSAP",
    source:"https://github.com/Chirag-0/Cynthia-Ugw-Clone",
    try:null,
  }
]


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1); // Slice to remove `/`
    const section = document.getElementById(sectionId);

    if (section) {
      // Scroll with a timeout to ensure the page is fully loaded
      setTimeout(() => {
        const navbarHeight = document.querySelector('nav').offsetHeight || 0;

        // Scroll with adjustment for fixed/sticky navbar height
        const scrollPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }, 100); // Delay scroll to allow for rendering
    }
  }, [location]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
   
   {loading ? <Loader setLoading={setLoading} /> : (
    <div className="h-auto w-full bg-[#181818] ">
      <Navbar />
      <ScrollToSection /> 
    
      <div id="home">
        <Hero />
      </div>
      <div>
        <Skills/>
      </div>
      <div id="project">
        <Projects projectInfo={projectInfo} />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>)}
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/home",
      element:<div><App /> </div>
    },
    {
      path: "/contact",
      element: <App />
    },
    {
      path: "/project",
      element: <App />
    }
  ]
);

function Root() {
  return (
    <RouterProvider router={router} />
  );
}

export default Root;

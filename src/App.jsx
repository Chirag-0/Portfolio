import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/skills"
import { createBrowserRouter, RouterProvider,useLocation } from "react-router-dom"
import { useEffect } from "react"


const projectInfo = [
  {
    name:"Movies Mania",
    img:"/public/moviemania.png",
    details:"Developed a Movie Mania app using React JS, utilizing the OMDB API to fetch movie data.Implemented custom hooks for localStorage to persist watched data.",
    techStack:"Tech Stack: HTML,CSS,React JS",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Notes App",
    img:"/public/notesapp.png",
    details:"Developed a notes app with add, delete, and edit functionality, including timestamp display for creation and last modification. It is fully responsive and uses local storage for data persistence.",
    techStack:"Tech Stack: HTML,CSS,JavaScript",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Snake Game",
    img:"/public/snake.png",
    details:"Classic snake game with movement in four directions to eat food, tracking score and high score. Includes music on/off buttons to enhance user experience and customizable gameplay settings.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Weather App",
    img:"/public/weather.png",
    details:"Weather app with search functionality to fetch and display city weather, including temperature, wind speed, and humidity. Fully responsive for a seamless experience across all devices.",
    techStack:"Tech Stack: HTML,CSS,Javascipt",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"File Compressor",
    img:"/public/filecompressor.png",
    details:"File compressor and decompressor in Java using the Huffman coding algorithm. Huffman coding is a popular algorithm for lossless data compression, commonly used in file compression applications.",
    techStack:"Tech Stack: Java",
    source:"Source Code",
    try:"Try it",
  },
  {
    name:"Cynthia Ugw Clone",
    img:"/public/cynthiaugw.png",
    details:"This project is a clone of the animated website Cynthia Ugw.The website features stunning animations and showcases my skills in frontend web development.",
    techStack:"Tech Stack: HTML,CSS,JavaScript,GSAP",
    source:"Source Code",
    try:"Try it",
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
  return (
    <div className="h-auto w-full bg-[#181818] ">
      <Navbar />
      <ScrollToSection /> {/* This component listens to route changes */}
      {/* Render all components initially */}
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
    </div>
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

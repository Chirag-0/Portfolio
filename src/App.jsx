import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from './components/Skills';
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider,useLocation } from "react-router-dom"
import { useEffect,useState} from "react"
import { projectInfo } from "./constants/projectInfo"



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
      {loading ? <Loader setLoading={setLoading} /> : 
        (
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
          </div>
        )}
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


function Navbar() {
  return (
    <nav className="font-[Roboto-Condensed,sans-serif] flex gap-48 md:gap-[43rem] w-[70%] md:w-full -ml-14 pt-4 md:ml-0 md:pt-0 ">
        <nav>
            <h3 className=" text-white font-semibold  inline-block ml-20 p-2 whitespace-nowrap">Chirag Chouhan</h3>
        </nav>
        <nav className="text-white font-semibold">
           
            <div className="hidden md:flex gap-7 p-2">
                <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2">About</ul>
                <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2">Projects</ul>
                <ul className="hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-2">Contact Me</ul>
            </div>

            <div>
            <div className=" h-6 w-12 p-2 ">
               <img className="h-6 w-6" src="\src\assets\menu.png" alt="menu" />
            </div>
            </div>
        </nav>
    </nav>
    
  )
}

export default Navbar
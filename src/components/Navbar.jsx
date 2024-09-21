
function Navbar() {
  return (
    <div className="w-full h-12">
        <div className="border-b-2 border-opacity-55 border-[#8a8787] h-12">

       <nav className='h-10 w-full font-[roboto-regular,sans-serif]  text-white font-semibold p-3 flex gap-[47rem] '>
        
        <div className="w-52 h-6 font-semibold ml-16">
            <h5 className="whitespace-nowrap"> Chirag Chouhan</h5>
        </div>
        <div className="flex gap-10 justify-evenly mr-16">
            <ul className='hover:underline'>about</ul>
            <ul className='hover:underline'>projects</ul>
            <ul className='hover:underline'>contact</ul>
        </div>
       </nav>
        </div>
    </div>
  )
}

export default Navbar
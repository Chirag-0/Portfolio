
function Contact() {
  return (
    <footer className="h-[137vh] md:h-[157vh] lg:h-[145vh] bg-[#181818] p-[0.2px] pt-4 -mt-6">
        <div className="flex justify-center items-center">

            <div className=" w-[85%] md:w-[69%] mt-16  h-[75%] mb-20 bg-[#EF9917] rounded-2xl ">

            <h2 className="uppercase font-titan text-white text-5xl  md:text-8xl mt-12 ml-6">Let&apos;s Connect</h2>

            <p className="font-roboto  md:w-72 font-semibold h-32 ml-7 mt-8 ">I&apos;m always open to connecting with new people and exploring potential opportunities. 
            If you have any questions, project ideas, or just want to say hello, feel free to 
            drop me a message!
            </p>

            <button className="bg-black text-white font-roboto p-2 ml-7 mt-12 pr-4 pl-4 rounded-lg hover:bg-gray-900">
                <a href="mailto:chiragchouhan119@email.com">Say hi!</a>
            </button>

            <div className="ml-[72vw] mb-3 md:ml-[63vw] -mt-12">
                <a href="mailto:chiragchouhan119@email.com">
                  <img className="rounded-sm  hover:scale-110 transition-transform duration-300" src="/icons8-email-30.png" alt="email" />
                </a>
                <a href="#">
                  <img className="rounded-sm hover:scale-110 transition-transform duration-300" src="/icons8-github-32.png" alt="github" />
                </a>
                <a href="#">
                  <img className="rounded-sm h-8 w-8  hover:scale-110 transition-transform duration-300"  src="/icons8-linkedin-24 (1).png" alt="linkedin" />
                </a>
            </div>
            </div>
        </div>  
       
        <div className="w-[80%] mt-8 md:w-[70%] md:-mt-6  mx-auto text-center border-t border-gray-400 pt-6">
           <p className="text-gray-400 text-xs">©2024 Designed by Chirag Chouhan</p>
         </div>
    </footer>
  )
}


  
export default Contact;
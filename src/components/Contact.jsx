
function Contact() {
  return (
    <footer className="h-auto bg-[#181818] p-[0.2px] pt-4 -mt-6">
        <div className="flex justify-center items-center">

            <div className=" w-[85%] md:w-[69%] mt-16  h-[75%] 3xl:h-[75vh] 3xl:w-[74vw] mb-20 bg-[#EF9917] rounded-2xl ">

            <h2 className="uppercase font-titan text-white text-5xl  md:text-8xl mt-12 ml-6 3xl:text-[9.5rem] 3xl:ml-24">Let&apos;s Connect</h2>

            <p className="font-roboto  md:w-72 font-semibold h-32 ml-7 mt-8 3xl:ml-24 3xl:w-[30vw] 3xl:text-3xl 3xl:h-[25vh]">I&apos;m always open to connecting with new people and exploring potential opportunities. 
            If you have any questions, project ideas, or just want to say hello, feel free to 
            drop me a message!
            </p>

            <button className="bg-black text-white font-roboto p-2 ml-7 mt-12 pr-4 pl-4 rounded-lg hover:bg-gray-900 3xl:ml-24 3xl:text-2xl 3xl:pr-6 3xl:pl-6 3xl:px-2 3xl:py-2 3xl:rounded-xl 3xl:mt-5">
                <a href="mailto:chiragchouhan119@email.com">Say hi!</a>
            </button>

            <div className="ml-[72vw] mb-3 md:ml-[63vw] -mt-12 3xl:ml-[70vw]">
                <a href="mailto:chiragchouhan119@email.com">
                  <img className="rounded-sm 3xl:h-14 3xl:w-14 hover:scale-110 transition-transform duration-300" src="/icons8-email-30.png" alt="email" />
                </a>
                <a href="https://github.com/Chirag-0" target="_blank">
                  <img className="rounded-sm 3xl:h-14 3xl:w-14 hover:scale-110 transition-transform duration-300" src="/icons8-github-32.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/chirag-chouhan-3a0286228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <img className="rounded-sm 3xl:h-14 3xl:w-14 h-8 w-8  hover:scale-110 transition-transform duration-300"  src="/icons8-linkedin-24 (1).png" alt="linkedin" />
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

function Contact() {
  return (
    <div className="h-[50%] w-full bg-[#181818]">
        <p className="text-5xl font-bold text-white pt-9 ml-14">Get In Touch With Me</p>
        
        <button className="text-black ml-14 font-semibold p-2 pr-3 pl-3 bg-[#F5C518] rounded-xl mt-6 hover:bg-[#d5ac1b] hover:border mb-3 ">Say Hi!</button>
       
        <div className="flex gap-4 pt-8 ml-14">
            <a href="#"><img className="bg-white rounded-sm  hover:scale-105" src="\src\assets\icons8-email-30.png" alt="" /></a>
            <a href="#"><img className="bg-white rounded-sm  hover:scale-105" src="\src\assets\icons8-github-32.png" alt="" /></a>
            <a href="#"><img className="bg-white rounded-sm h-8 w-8  hover:scale-105"  src="\src\assets\icons8-linkedin-24 (1).png" alt="" /></a>

        </div>
    </div>
  )
}

export default Contact;
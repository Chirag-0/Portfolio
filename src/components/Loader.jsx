import { useEffect, useState } from "react"

function Loader({ setLoading }) {
   const [count,setCount] = useState(0);

   useEffect(()=>{
     const interval = setInterval(()=>{
        setCount((prev) => {
            if(prev<100){
                return prev + 1;
            }else{
                clearInterval(interval);
                setLoading(false);
                return prev;
            }
        })
     },40);

     return () => clearInterval(interval);
   },[setLoading]);
  return (
    <div className="bg-[#181818] flex flex-col gap-5 items-center justify-center h-screen">
        <h2 className="font-titan text-white text-lg">{count}</h2>
        <h4 className="font-titan text-white animate-bounce">Loading...</h4>
    </div>
  )
}

export default Loader;
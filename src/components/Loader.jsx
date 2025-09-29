import { useEffect, useState } from "react"

function Loader({ setLoading }) {
   const [count,setCount] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const randomVal = Math.floor(Math.random() * 10);
        const nextVal = prev + randomVal;
        return nextVal >= 100 ? 100 : nextVal; // cap at 100
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // detect when loading finishes
  useEffect(() => {
    if (count >= 100) {
      setLoading(false);
    }
  }, [count, setLoading]);

  return (
    <div className="bg-[#181818] flex flex-col gap-5 items-center justify-center h-screen">
        <h2 className="font-titan text-white text-lg">{count}</h2>
        <h4 className="font-titan text-white animate-bounce">Loading...</h4>
    </div>
  )
}

export default Loader;
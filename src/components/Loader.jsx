
function Loader() {
  return (
    <div className="bg-[#181818] flex flex-col gap-5 items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-400"></div>
        <h4 className="font-titan text-white animate-bounce">Loading...</h4>
    </div>
  )
}

export default Loader
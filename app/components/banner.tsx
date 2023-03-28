
function Banner() {
  return ( 
  <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 relative">
    <div>
        <h1 className="text-5xl md:text-7xl text-[#ec2f3fe0]">SyntaxSoup</h1>
        <h2 className="mt-5 md:mt-0">welcome to a dev blog</h2>
    </div>
    <img  width={100} className="w-14 absolute right-11 top-2  md:w-24 md:relative md:right-auto md:top-auto" src="/soup.svg" />
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">A place to share thoughts on web dev trends, code, and stay inspired.</p>      
 </div>
    
  )
}

export default Banner
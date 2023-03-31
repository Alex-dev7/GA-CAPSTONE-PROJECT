
function Banner() {
  return ( 
  <div className="flex flex-col mt-16 mb-2 md:mt-0 lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 md:mb-10 relative">
    <div>
        <h1 className="text-4xl md:text-7xl text-[#ec2f3fe0]">SyntaxSoup</h1>
        <h2 className="hidden mt-0 md:mt-0 md:block">welcome to a dev blog</h2>
    </div>
    <img  width={100} className="w-14 absolute right-11 top-2  md:w-24 md:relative md:right-auto md:top-auto" src="/soup.svg" />
    <p className="mt-5 md:mt-2 text-center md:text-right text-gray-400 max-w-sm">A place to share thoughts on web trends, code, and stay inspired.</p>      
 </div>
    
  )
}

export default Banner
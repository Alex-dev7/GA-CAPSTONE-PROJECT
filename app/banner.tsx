
function Banner() {
  return ( 
  <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-8 py-5 mb-10 ">
    <div>
        <h1 className="text-7xl">SyntaxSoup</h1>
        <h2 className="mt-5 md:mt-0">Welcome to my blog </h2>
    </div>
    <img width={100} src="/soup.svg" />
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">A place to share and learn all things code, tricks, and tips.</p>      
 </div>
    
  )
}

export default Banner
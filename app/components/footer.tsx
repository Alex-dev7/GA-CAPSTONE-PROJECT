
export default function Footer() {
  return (
    <footer className="my-2 flex flex-col gap-3 md:justify-around items-center md:flex-row border-t-2 border-grey-600 py-8">
        <a className=" border px-2 hover:border-black hover:bg-white  hover:text-black transition-all duration-150" href="#top">scroll top</a>
        <p className="w-fit ">built by <a className="hover:underline text-gray-500 hover:text-inherit" href="https://github.com/Alex-dev7" target={"_blank"}>Alexei Rusu</a></p>
       <p className="text-sm">&#169; SyntaxSoup</p>

    </footer>
  )
}

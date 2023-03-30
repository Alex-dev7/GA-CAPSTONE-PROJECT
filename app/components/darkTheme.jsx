"use client"
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"

// type systemTheme = any


function DarkTheme() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])

    if (!mounted) {
        return null
      } 
      const currentTheme = theme === 'system' ? systemTheme : theme
     
  return (
    // <select value={theme} onChange={e => setTheme(e.target.value)}>
    //     <option value="system">System</option>
    //     <option value="dark">Dark</option>
    //     <option value="light">Light</option>
    // </select>       
    <div className='w-fit absolute right-4 top-6 md:sticky md:top-none'>
        {currentTheme === 'light' ?
        <button  onClick={e => setTheme('dark')} className="w-fit mx-auto flex rounded-lg pr-2 bg-neutral-200 transition-all ease-out duration-200">
           <img src="/moon.svg" alt='moon icon' className='w-5 my-auto'/> 
           <span className='ml-2 tracking-wider font-thin'>light</span>
        </button>
        :
        <button  onClick={e => setTheme('light')} className='w-fit mx-auto flex rounded-lg pl-2 bg-gray-900 transition-all ease-out duration-200'>
            <span className='mr-2 tracking-wider font-thin'>dark</span> 
             <img src="/sun.svg" alt='sun icon' className='w-5  my-auto'/>  
              
        </button>}
    </div>   
  )
}

export default DarkTheme
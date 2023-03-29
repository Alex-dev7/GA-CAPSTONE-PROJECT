"use client"
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"


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
    <div className='w-fit '>
        {currentTheme === 'light' ?
        <button  onClick={e => setTheme('dark')} className="w-fit mx-auto">
           <img src="/moon.svg" alt='moon icon' className='w-6'/> 
        </button>
        :
        <button  onClick={e => setTheme('light')}>
             <img src="/sun.svg" alt='sun icon' className='w-6 '/>    
        </button>}
    </div>   
  )
}

export default DarkTheme
'use client';

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Button from './ThemeButton';
import { useSelectedLayoutSegment } from 'next/navigation'



const Header = () => {
  const [navbar, setNavbar] = useState(false);
    const activeSegment = useSelectedLayoutSegment()

  return (
    <nav className="dark:bg-slate-900 relative lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
        <div className="max-w-5xl mx-auto sm:px-4 xs:px-2">

        <div className="flex items-center justify-between h-16">

      <div className="flex items-center">
                <Link href="/" className="hyper text-2xl uppercase boder-b-3 border-blue-500 hover:animate-pulse">Flo Shodan</Link>
      </div>


            <div className="hidden md:block">
                <div className="ml-10 flex items-end space-x-4">
                   <Link href="/posts" className={`${
      activeSegment === 'posts' ? 'text-sky-500 dark:text-sky-400' : 'text-slate-700'
    } font-semibold dark:text-gray-100 hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer p-3 rounded-md text-sm`}>
      posts
    </Link>
                   <Link href="/about" className={`${
      activeSegment === 'about' ? 'text-sky-500 dark:text-sky-400' : 'text-slate-700'
    } font-semibold dark:text-gray-100 hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer p-3 rounded-md text-sm`}>
      about
    </Link>

              <div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
                    <Button></Button>
                    <a href='https://github.com/floshodan' target='_blank' className='  font-semibold hover:text-sky-400 cursor-pointer p-3 rounded-md text-sm bg-gradient-to-r from-sky-900 via-sky-600 to-blue-600 bg-clip-text '>
                    <svg className='h-6 w-6 flex-none fill-slate-400 dark:fill-slate-400 transition dark:hover:fill-slate-100 hover:fill-slate-600'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
    </a>
                    </div>

                </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className='mobile-menu-button' onClick={()=> setNavbar(!navbar)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
              
              
        </div>

      

          </div>
        </div>
        	{navbar && (
   <div className='md:hidden mobile-menu' id='mobile-menu'>
          <Link className='block py-2 px-4 text-sm hover:bg-gray-400' href="/blog">blog</Link>
          <Link className='block py-2 px-4 text-sm hover:bg-gray-400' href="/resume">resume</Link>
          </div>
				)}

     
    </nav>


  )
}

export default Header

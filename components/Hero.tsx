import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
      <div className="max-w-2xl pattern-dots pattern-gray-500 pattern-bg-white pattern-size-6 pattern-opacity-40">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-900 dark:from-cyan-500 via-sky-600 to-blue-600 dark:to-blue-500 bg-clip-text text-transparent sm:text-5xl">Hi there, I'm Florian.</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-slate-100">
          I’m Florian, a devops engineer and software developer based in
          Augsburg, Germany. I enjoy competetive programming and tinker with a
          lot of different technologies both professionally and privately.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-slate-100">
          Welcome to my personal website where I share what I'm learning about
          all things IT, become a better developer and growing a career in tech.
        </p>
      
        <div className="mt-6 flex gap-6">
          <a href="https://github.com/floshodan" target="_blank" rel="noopener noreferrer" >
          <button className="bg-black flex justfiy-center items-center rounded shadow-xl">
            <p className="mx-auto py-2 px-7 text-white hover:text-sky-500">
              View Github
            </p>
          </button>
          </a>

          <button className="dark:bg-gray-200 flex justfiy-center items-center rounded shadow-xl">
            <p className="mx-auto py-2 px-7 text-base text-zinc-600 hover:text-sky-500">
              Download CV
            </p>
          </button>
        </div>
      </div>
  )
}

export default Hero

import React from 'react'

function EmailButton() {
  return (
    <div className='flex flex-col items-center'>
      <a href="mailto:code@floshodan.io">
       <button className="bg-transparent text-sky-500 dark:text-sky-400 hover:font-extrabold hover:text-sky-700 dark:hover:text-sky-700 font-semibold py-2 px-4 mt-3 rounded border border-sky-500 dark:border-sky-400">Contact me.</button>
       </a>
    </div>
  )
}

export default EmailButton

import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-3 bg-white dark:bg-slate-900'>
      <div className='md:block relative w-full h-[1px] flex-1 bg-gray-400'></div>
        <div className="py-5 flex w-full justify-between text-slate-100">
                <p>2023 floshodan.io</p>
                <div className="flex space-between">
                <p>Imprint</p>
                <p className='pl-2'>Pricacy</p>
                </div>

        </div>
      
    </footer>
  )
}

export default Footer

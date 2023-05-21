import React from 'react'

interface HeadingProps {
    title: string,
    subtitle: string
}

function Heading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mt-5 pt-5 pb-1 pr-64 flex flex-col">
      <div className="flex items-center">
        <p className="hyper heading text-3xl font-semi-bold">
          {title}
        </p>
        <div className="md:block relative w-40 h-[1px] ml-10 flex-1 bg-gray-400"></div>
      </div>
      <div>
        <h4 className="text-gray-500 dark:text-white">{subtitle}</h4>
      </div>
    </div>
  );
}


export default Heading

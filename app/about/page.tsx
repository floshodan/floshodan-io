import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/ich2.webp'



const About = () => {
  return (
      <main className="mt-16 px-4 pt-9 h-10 max-w-5xl mx-auto mb-auto" >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
                <div className='lg:pl-20'>
                    <div className='max-w-xs px-2.5 lg:max-w-none'>
                            <Image
      src={profilePic}
      alt="Picture of the author"
      width={500}
      height={623}
      className={"rotate-3 rounded-2xl shadow-2xl bg-zinc-100 dark:bg-zinc-800 object-cover"}
    />
                    </div>
                </div>
                <div className='lg:order-first lg:row-span-2'>
                  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-900 via-sky-600 to-blue-600 bg-clip-text text-transparent sm:text-5xl">I'm Florian Programmer from Augsburg, Germany.</h1>
                <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
                        <p>My interest in computers began at an early age, and by my early teens, I was already captivated by the power of technology. I spent hours tinkering with computers and learning all I could about how they worked. This passion eventually led me to pursue a career in the field of system administration.</p>
                        <p>After completing my education, I decided to embark on an apprenticeship to gain practical experience in the field. This experience proved invaluable in helping me develop the skills and knowledge necessary to succeed as a system administrator. Throughout my apprenticeship, I was able to work on a wide range of projects, honing my expertise and building a strong foundation for my future career.</p>
                        <p>Following my apprenticeship, I decided to take the leap into entrepreneurship. I was drawn to the freedom and flexibility that owning my own business could offer, and I was excited by the prospect of working on my own projects and pursuing my own interests. I began exploring the world of online marketing and quickly discovered a passion for building my own brand and developing innovative marketing strategies.</p>
                </div>

                </div>

                <div className='lg:pl-20'>



<div className="flex items-center space-x-4">
  <div className="text-gray-600">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='dark:white' ><path d="M0 0h24v24H0z" fill="none"></path><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></svg>
  </div>
  <div>
    <p className="font-medium text-gray-900 dark:text-slate-100">@Self employed</p>
  </div>
</div>

<div className="flex items-center space-x-4">
  <div className="text-gray-600">
    <svg width="24" height="24" className='dark:fill-slate-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>
  </div>
  <div>
    <p className="font-medium text-gray-900 dark:text-slate-100">Augsburg, Germany.</p>
  </div>
</div>

<div className="flex items-center space-x-4">
  <div className="text-gray-600">
    <svg width="24" height="24" className='dark:fill-slate-100' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
  </div>
  <div>
    <p className="font-medium text-gray-900 dark:text-slate-100 ">[firstname]@floshodan.io</p>
  </div>

  </div>


                </div>

            </div>
      
    </div>
    <div className="pt-7 max-w-2xl lg:max-w-5xl">
        <h2 className="hyper text-2xl font-bold tracking-tight sm:text-xl bg-gradient-to-r from-sky-900 via-sky-600 to-blue-600 bg-clip-text text-transparent ">Technologies I like to use</h2>
        <div className="flex flex-col p-1">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-row content-center">
              <svg width="18" height="21" fill="" xmlns="http://www.w3.org/2000/svg" className="dark:fill-slate-100"><path d="M8.998 20.5c-.267 0-.534-.07-.768-.206l-2.447-1.447c-.365-.205-.186-.277-.066-.32.487-.169.586-.208 1.106-.503.055-.03.126-.019.182.014l1.88 1.116a.242.242 0 0 0 .227 0l7.329-4.23a.23.23 0 0 0 .111-.198V6.268a.236.236 0 0 0-.114-.202L9.113 1.839a.232.232 0 0 0-.226 0L1.563 6.067a.237.237 0 0 0-.116.2v8.459c0 .08.045.157.116.196l2.007 1.16c1.09.545 1.757-.097 1.757-.742V6.99a.21.21 0 0 1 .213-.212h.93c.115 0 .212.094.212.211v8.351c0 1.454-.792 2.288-2.17 2.288-.424 0-.758 0-1.689-.46L.9 16.063a1.546 1.546 0 0 1-.768-1.337V6.268c0-.55.294-1.063.768-1.336L8.23.697a1.604 1.604 0 0 1 1.54 0l7.328 4.235c.475.274.77.786.77 1.336v8.458c0 .549-.295 1.06-.77 1.336l-7.329 4.232A1.53 1.53 0 0 1 9 20.5Zm5.918-8.34c0-1.582-1.07-2.004-3.323-2.302-2.275-.3-2.507-.456-2.507-.989 0-.44.196-1.027 1.881-1.027 1.506 0 2.061.324 2.29 1.339.02.096.107.166.206.166h.95a.214.214 0 0 0 .21-.23c-.146-1.75-1.308-2.564-3.655-2.564-2.09 0-3.337.881-3.337 2.36 0 1.604 1.24 2.048 3.246 2.246 2.4.235 2.585.586 2.585 1.058 0 .819-.657 1.168-2.201 1.168-1.94 0-2.366-.487-2.51-1.452a.213.213 0 0 0-.21-.179h-.948a.21.21 0 0 0-.211.211c0 1.235.671 2.707 3.879 2.707 2.323 0 3.655-.914 3.655-2.511Z"></path></svg>
              <p className='pl-2 dark:text-slate-100'>Node</p>
            </div>
            <div className="flex flex-row content-center">
              <svg width="20" height="19" fill="" xmlns="http://www.w3.org/2000/svg" className="dark:fill-slate-100"><path d="M11.858 9.503a1.864 1.864 0 1 1-3.727 0 1.864 1.864 0 0 1 3.727 0ZM14.065.595c-1.122 0-2.59.8-4.073 2.185C8.508 1.402 7.04.612 5.919.612a1.83 1.83 0 0 0-.921.231c-1.146.661-1.403 2.72-.811 5.304C1.65 6.931 0 8.183 0 9.503c0 1.325 1.658 2.581 4.202 3.359-.586 2.594-.325 4.656.824 5.316.267.156.575.23.918.23 1.121 0 2.59-.8 4.074-2.187 1.483 1.378 2.951 2.169 4.072 2.169.342 0 .652-.075.922-.23 1.145-.66 1.402-2.718.81-5.303C18.35 12.08 20 10.825 20 9.503c0-1.325-1.658-2.58-4.203-3.36.587-2.591.325-4.656-.823-5.316a1.806 1.806 0 0 0-.91-.232h.001Zm-.004.908v.005c.187 0 .338.037.465.106.555.318.796 1.53.608 3.087-.045.383-.118.787-.208 1.2-.8-.197-1.672-.348-2.59-.445a19.91 19.91 0 0 0-1.695-2.04c1.326-1.233 2.572-1.91 3.42-1.912Zm-8.142.017c.844 0 2.095.673 3.425 1.9-.571.6-1.141 1.28-1.683 2.035-.923.097-1.795.248-2.594.448a12.515 12.515 0 0 1-.212-1.183c-.192-1.557.045-2.767.595-3.09a1.22 1.22 0 0 1 .47-.11Zm4.069 2.542c.379.39.758.826 1.133 1.303A24.673 24.673 0 0 0 10 5.337a21.1 21.1 0 0 0-1.133.028c.366-.477.745-.913 1.12-1.304ZM10 6.25c.617 0 1.23.028 1.835.077A22.018 22.018 0 0 1 13.669 9.5a22.652 22.652 0 0 1-.844 1.625c-.317.55-.644 1.073-.983 1.558a21.369 21.369 0 0 1-3.677.005 22.193 22.193 0 0 1-.986-1.55 20.904 20.904 0 0 1-.848-1.622c.252-.548.538-1.094.844-1.628.317-.55.644-1.072.983-1.557A21.039 21.039 0 0 1 10 6.248v.002Zm-3.03.212c-.2.314-.4.635-.586.966-.187.325-.362.652-.529.979a17.259 17.259 0 0 1-.563-1.623 20.353 20.353 0 0 1 1.679-.322Zm6.05 0c.58.085 1.138.191 1.673.322a17.88 17.88 0 0 1-.55 1.611 21.625 21.625 0 0 0-1.12-1.933h-.002Zm2.553.562c.404.125.787.264 1.146.415 1.444.617 2.377 1.423 2.377 2.063-.004.64-.938 1.45-2.381 2.063-.35.15-.733.285-1.13.41a19.973 19.973 0 0 0-.916-2.483c.375-.847.675-1.675.904-2.47v.002Zm-11.162.003c.232.8.537 1.631.917 2.484a19.284 19.284 0 0 0-.905 2.47 11.822 11.822 0 0 1-1.142-.417C1.837 10.95.904 10.143.904 9.502c0-.64.933-1.451 2.377-2.063.35-.15.733-.285 1.13-.412Zm9.732 3.567c.22.548.408 1.094.563 1.623-.534.131-1.097.242-1.68.325a21.516 21.516 0 0 0 1.117-1.948Zm-8.288.017c.167.326.342.652.533.979.192.325.388.643.588.953a18.338 18.338 0 0 1-1.672-.322c.15-.525.338-1.069.55-1.611h.001Zm9.078 2.489c.094.41.167.807.212 1.186.192 1.556-.045 2.766-.595 3.09a.893.893 0 0 1-.47.107c-.842 0-2.094-.673-3.424-1.9.571-.6 1.141-1.28 1.683-2.034.923-.098 1.795-.25 2.594-.45v.001Zm-9.858.008c.8.195 1.672.346 2.59.444.55.754 1.12 1.439 1.695 2.038-1.33 1.236-2.577 1.913-3.425 1.913a.988.988 0 0 1-.46-.11c-.556-.317-.797-1.529-.61-3.086.046-.384.12-.787.21-1.199Zm3.8.534c.367.016.742.028 1.12.028.384 0 .763-.008 1.134-.028-.367.476-.746.912-1.12 1.304-.38-.392-.759-.828-1.134-1.304Z"></path></svg>
              <p className='pl-2 dark:text-slate-100'>ReactJS</p>
            </div>

            <div className="flex flex-row content-center">
              <svg width="20" height="21" fill="" xmlns="http://www.w3.org/2000/svg" className="dark:fill-slate-100"><g clipPath="url(#cplusplus_svg__a)"><path d="M18.031 5.297 10.484.953c-.125-.078-.296-.11-.484-.11s-.36.048-.484.11l-7.5 4.36c-.266.156-.454.546-.454.843v8.703c0 .172.032.375.157.547L18.406 5.72a1.106 1.106 0 0 0-.375-.422Z"></path><path d="M1.672 15.39a.897.897 0 0 0 .297.297l7.531 4.36c.125.078.297.11.484.11.188 0 .36-.048.485-.11l7.5-4.36c.265-.156.453-.546.453-.843V6.14a.888.888 0 0 0-.094-.438L1.672 15.391Z"></path><path d="M13.328 12.39A3.83 3.83 0 0 1 10 14.329 3.834 3.834 0 0 1 6.172 10.5 3.834 3.834 0 0 1 10 6.672c1.422 0 2.672.781 3.328 1.953l2.031-1.172A6.175 6.175 0 0 0 10 4.328 6.175 6.175 0 0 0 3.828 10.5 6.175 6.175 0 0 0 10 16.672a6.173 6.173 0 0 0 5.344-3.094l-2.016-1.187Z" fill="#F9F9F9"></path><path d="M12.828 10.156h.813v-.828h.687v.828h.828v.688h-.828v.812h-.687v-.812h-.813v-.688Zm2.89 0h.813v-.828h.688v.828h.828v.688h-.828v.812h-.688v-.812h-.812v-.688Z" fill="#F9F9F9"></path></g><defs><clipPath id="cplusplus_svg__a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
              <p className='pl-2 dark:text-slate-100'>C++</p>
</div>

            <div className="flex flex-row content-center">
              <svg width="20" height="21" fill="" xmlns="http://www.w3.org/2000/svg" className="dark:fill-slate-100"><path d="M9.648.5a4.26 4.26 0 0 0-.3.006l-.302.027C6.206.789 3.545 2.32 1.859 4.677A9.896 9.896 0 0 0 .094 9.046c-.08.549-.09.711-.09 1.456s.01.907.09 1.456c.543 3.755 3.216 6.91 6.84 8.08.65.208 1.334.351 2.112.437.303.033 1.613.033 1.916 0 1.343-.149 2.48-.48 3.603-1.054.172-.088.205-.111.182-.13a184.89 184.89 0 0 1-1.629-2.184l-1.599-2.16-2.004-2.965a282.176 282.176 0 0 0-2.017-2.964 161.75 161.75 0 0 0-.02 2.925c-.006 2.816-.008 2.93-.043 2.996a.355.355 0 0 1-.172.178c-.062.031-.117.037-.412.037h-.339l-.09-.056a.365.365 0 0 1-.13-.143l-.042-.088.005-3.92.005-3.92.06-.077a.538.538 0 0 1 .145-.119c.08-.04.112-.043.45-.043.399 0 .465.016.569.129.03.031 1.114 1.665 2.413 3.634 1.314 1.992 2.629 3.984 3.945 5.975l1.583 2.399.08-.053c.71-.461 1.46-1.118 2.055-1.802a9.953 9.953 0 0 0 2.354-5.112c.08-.549.09-.711.09-1.456s-.01-.907-.09-1.456c-.544-3.755-3.216-6.91-6.84-8.08-.64-.206-1.32-.35-2.083-.435-.14-.015-.903-.03-1.343-.03V.5Zm3.39 6.014c.29 0 .34.005.405.04.094.046.17.136.197.23.016.05.02 1.138.016 3.587l-.006 3.514-.62-.95-.621-.95V9.431c0-1.652.007-2.58.02-2.626.03-.11.099-.195.193-.246.08-.041.11-.045.416-.045Z"></path></svg>
              <p className='pl-2 dark:text-slate-100'>NextJS</p>
            </div>

            <div className="flex flex-row content-center">
              <svg width="20" height="21" fill="" xmlns="http://www.w3.org/2000/svg" className="dark:fill-slate-100"><g clipPath="url(#tailwind_svg__a)"><path d="M10 4.5c-2.666 0-4.332 1.333-5 4C6 7.167 7.169 6.667 8.5 7c.762.19 1.305.742 1.908 1.353.98.995 2.115 2.147 4.593 2.147 2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.304-.742-1.907-1.353-.98-.995-2.114-2.147-4.593-2.147Zm-5 6c-2.666 0-4.332 1.333-5 4 1-1.333 2.168-1.833 3.5-1.5.762.19 1.305.742 1.908 1.353.98.995 2.115 2.147 4.593 2.147 2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.304-.742-1.907-1.353-.98-.995-2.114-2.147-4.593-2.147Z"></path></g><defs><clipPath id="tailwind_svg__a"><path fill="#fff" transform="translate(0 .5)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
              <p className='pl-2 dark:text-slate-100 '>Tailswind CSS</p>
            </div>




          </div>

        </div>
      </div>
    </main>
  )
}

export default About

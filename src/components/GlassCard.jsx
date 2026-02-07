import React from 'react'

const GlassCard = () => {
  return (
    <div className="h-150 w-90 rounded-4xl bg-black flex justify-center relative pt-5 overflow-hidden">
      <div className="relative h-140 w-full rounded-t-4xl inset-0 z-0 overflow-hidden group">
        <div className="absolute inset-0 w-85 ml-2 overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('https://framer-ui-components.vercel.app/Halftone.png')]
            bg-cover bg-center bg-no-repeat
            transition-transform duration-700 ease-out
            group-hover:scale-105"
          />
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-55 backdrop-blur-[2px] bg-gradient-to-b from-transparent  via-black/90 to-black text-white pl-6 pt-2">  
          <h1 className='text-[23px] font-medium text-white w-60 pb-2 group-hover:-translate-y-1 transition-transform duration-700 ease-out'>
            Crafting a Timeless Brand Identity
          </h1>
          <p className='text-[17px] text-neutral-400 w-75 group-hover:-translate-y-1 group-hover:text-neutral-300 transition-transform duration-700 ease-out'>
            We're a small team in Berlin doing design work for brands that want to stand out.
          </p>
          <div className='absolute w-75 bottom-0 pb-2 flex justify-between group-hover:-translate-y-1 transition-transform duration-700 ease-out'>
            <div className=' text-neutral-400 group-hover:text-neutral-300 transition-transform duration-700 ease-out'>
              5 min read
            </div>
            <div className='flex'>
              <svg className='' xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 24 24" fill="var(--color-green-400)" stroke="none" ><path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z"></path></svg>
              320
            </div>
          </div>
        
        </div>
      </div>
    </ div>
  )
}

export default GlassCard
import React from 'react'

const GlassCard = () => {
  return (
    <div className="h-150 w-90 rounded-4xl bg-black flex justify-center relative pt-5">
      <div className="relative h-140 w-85 bg-[url('https://framer-ui-components.vercel.app/Halftone.png')] rounded-4xl bg-cover bg-center bg-no-repeat inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-55 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-black/90  to-black text-white pl-6 ">
          <h1 className='text-[23px] font-medium text-white w-60 pb-2'>
            Crafting a Timeless Brand Identity
          </h1>
          <p className='text-[17px] text-neutral-300 w-75'>
            We're a small team in Berlin doing design work for brands that want to stand out.
          </p>
          <div className='absolute w-70 bottom-0 pb-2 flex justify-between'>
            <div>
              
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
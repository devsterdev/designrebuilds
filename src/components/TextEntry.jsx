import React, { useEffect } from 'react'
import { motion, useAnimate, stagger} from 'motion/react'

const TextEntry = () => {
  const [scope, animate] = useAnimate();
  const text = "Sometimes things feel complicated for no clear reason, and we get caught up in small details that don’t really matter. We overthink, we hesitate, and we let simple situations turn into something bigger than they need to be. But in the end, most problems pass, and we realize we could have taken things a little easier"

  useEffect(()=>{
    startAnimating()
  }, [])

  const startAnimating = () => {
     animate("span", {
      opacity: 1,
      y: 0,
       color: ["#ff6b6b", "#6bcBef", "#ffd93d", "#000000"]
    }, {
      duration: 0.6,
      ease: "easeInOut",
      delay: stagger(0.015)
    })
  }


  return (
    <div className='flex flex-col items-center gap-10 px-50 pt-10'>
      <div 
        ref={scope}
        className='text-black max-w-2xl mx-auto text-xl font-dalius '
      >
        {text.split("").map((char, index) => <motion.span
        style={{
          opacity: 0,
          y: 10
        }}
        className='inline-block'
        key={char + index}> {char === " " ? "\u00A0" : char}</motion.span>)}
      </div>
      <button onClick={() => window.location.reload()} className='cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
        <path d="m10,6h-4c-1.657,0-3,1.343-3,3v2c0,1.657,1.343,3,3,3" fill="none" stroke="#1c1f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        <path d="m10,14h4c1.657,0,3-1.343,3-3v-2c0-1.657-1.343-3-3-3" fill="none" stroke="#1c1f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-color="color-2"></path>
        <polyline points="12.75 11.25 10 14 12.75 16.75" fill="none" stroke="#1c1f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-color="color-2"></polyline>
        <polyline points="7.25 8.75 10 6 7.25 3.25" fill="none" stroke="#1c1f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
      </svg>
      </button>
    </div>
  )
}

export default TextEntry
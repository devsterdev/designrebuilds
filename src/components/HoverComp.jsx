import React from "react";
import { easeInOut, motion } from "motion/react";

const HoverComp = ({before, after, img}) => {
  
  return (
    <div className='h-screen bg-gray-50 flex flex-col items-center gap-5'>
      <Item before="the " after="cat slept" img="https://i.pinimg.com/1200x/dc/00/eb/dc00ebc8d85a3cf802aecb502cf7e212.jpg" />
      <Item before="a small" after="bird flew" img="https://i.pinimg.com/736x/bc/f7/83/bcf783bf7bbc924fe62886b04e0736bf.jpg" />
      <Item before="people watched the" after="clocktower chime" img="https://i.pinimg.com/736x/2d/cd/7b/2dcd7b3aa2fd63985ceb509a3e60f678.jpg" />
      <Item before="sun" after="shines bright" img="https://i.pinimg.com/736x/86/a3/d1/86a3d11a2a62555a69fd627d1bb5ce95.jpg" />
      <Item before="they built" after="homes" img="https://i.pinimg.com/736x/e3/49/f7/e349f70e305b68acc344ef64afb0b1f6.jpg" />
    </div>
  );
};

export default HoverComp;


const Item = ({before, after, img}) => {
  return(
    <motion.div
    initial="hidden"
    whileHover="show"
    className="text-orange-500 text-[50px] whitespace-nowrap w-fit flex justify-center items-center cursor-default font-quando">
      {before}

      <span className="flex items-center pl-3">
        
        <motion.span
          variants={{
            hidden: { 
              width: 0,
              transition: { delay: 3, duration: 0.3 }
            },
            show: { 
              width: 75,
            }
          }}
        >
        <img
          className="h-20 px-2 object-cover"
          src={img}
          alt=""
        />
        </motion.span>
        
      </span>

      {" "}{after}
    </motion.div>
  )
}
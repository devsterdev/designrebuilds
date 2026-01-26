import React, { useState, useRef } from "react";

const ParticleCanvas = () => {
  return (
    <div className="p-5 bg-white rounded-2xl flex justify-center items-center">
      <div className="h-75 w-100">
      {Array.from({ length: 225 }).map((_, i) => (
        <Unti key={i} />
      ))}
      </div>
    </div>
  );
};

export default ParticleCanvas;

const Unti = () => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setActive(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, 40);
  };

  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-block text-2xl font-bold cursor-pointer font-playfair tracking-tighter p-0 m-0
        transform origin-center transition-all duration-0 ease-in-out hover:delay-0 [transition-delay:0.5s] 
        ${active ? "scale-[1.2] text-black" : "text-gray-500"}
      `}
    >
      +
    </p>
  );
};

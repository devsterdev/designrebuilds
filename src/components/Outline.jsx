import React from "react";
import cn from "classnames"

const Outline = ({ text, link, children, className }) => {
  return (
    <div
      className={cn(
        "relative mx-auto  max-w-4xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50 min-w-0",
        className
      )}
    >

      <div className="flex h-12 items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 backdrop-blur-xl">
        
 
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/20" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
          <div className="h-3 w-3 rounded-full bg-green-500/20" />
        </div>


        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
            {text}
          </span>
        </div>


        <div className="flex items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-[10px] font-medium text-zinc-400 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <span>Inspiration</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          )}
        </div>
      </div>


      <div className="relative flex min-h-[300px] w-full items-center justify-center bg-zinc-950 p-8 md:p-12">

        <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `radial-gradient(#a1a1aa 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
            }}
        ></div>
        

        <div className="relative z-10 w-full flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Outline;

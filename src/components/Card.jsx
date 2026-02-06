import React, { useState } from "react";

const Card = () => {
  const [enabled, setEnabled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const dev = enabled ? " + Dev" : "";
  const price = enabled ? 7149 : 5149;

  const theme = {
    bg: isDark ? "bg-neutral-900" : "bg-white",
    innerBg: isDark ? "bg-neutral-900/50" : "bg-gray-100",
    textPrimary: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-neutral-400" : "text-gray-600",
    textMuted: isDark ? "text-neutral-500" : "text-gray-400",
    border: isDark ? "border-neutral-700" : "border-gray-300",
    subTagBg: isDark ? "bg-neutral-700 text-neutral-300" : "bg-gray-200 text-gray-600",
    divider: isDark ? "bg-neutral-700" : "bg-gray-300",
  };

  return (
    <div className={`relative h-125 w-90 ${theme.bg} rounded-3xl ease-in-out shadow-2xl hover:-translate-y-2 transform transition-transform duration-200`}>
      

      <div className="absolute top-5 right-5 z-20">
        <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      </div>

      <div className="relative w-full p-1">
        <div
          className={`${theme.innerBg} rounded-3xl border-2 border-solid ${theme.border} pb-7 p-4 transition-colors duration-300`}
        >
          <div className="w-full">
            <div className="mb-2">
              <WindowsIcon color={isDark ? "white" : "black"} />
            </div>
            <h1 className={`font-sans text-2xl font-medium mb-2 ${theme.textPrimary}`}>
              Landing Page Design <span>{dev}</span>
            </h1>
            <p className={`text-xs p-1 pl-2 rounded-[10px] w-fit ${theme.subTagBg}`}>
              Bring your dream website to life in just days.
            </p>
            <div className={`w-full h-[1px] mt-5 ${theme.divider}`}></div>
          </div>
          <div className="w-full pt-5">
            <CheckList content={"Wireframes"} isDark={isDark} />
            <CheckList content={"Custom Layout"} isDark={isDark} />
            <CheckList content={"Desktop, Tablet, Mobile Responsive Design"} isDark={isDark} />
            <CheckList content={"Brand Consistency"} isDark={isDark} />
            <CheckList content={"Figma File"} isDark={isDark} />
            <CheckList content={"Updates every 48 hours"} isDark={isDark} />
          </div>

          <div className="flex items-center w-full h-full pt-5">
            <CheckBox enabled={enabled} onClick={() => setEnabled(!enabled)} isDark={isDark} />
            <p className="text-[10px] text-green-600 pl-3">
              Website development (Framer) +2k
            </p>
          </div>
        </div>
        <div className="h-100%">
          <div className="flex items-center pl-3 pt-3">
            <h1 className={`pr-2 text-2xl font-medium ${theme.textPrimary}`}>${price}</h1>
            <p className={`text-sm ${theme.textMuted}`}>one time</p>
          </div>
          <div className="w-full h-full flex items-center justify-between px-7 pt-2 mb-2">
            <button
              className={`
                ${isDark ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"} 
                font-medium py-2 px-6 rounded-2xl cursor-pointer transition-all duration-200
                hover:-translate-y-0.5 active:scale-[0.98] relative overflow-hidden
                after:content-[''] after:absolute after:w-1/2 after:h-[400px]
                after:bg-white/20 after:-left-20 after:-top-20 after:rotate-12
                after:-translate-x-20 after:transition-all after:duration-700
                hover:after:translate-x-[220%]
              `}
            >
              Book a Call
            </button>
            <button
              className={`
                 ${isDark ? "bg-neutral-800 text-white border-neutral-600 hover:bg-neutral-700" : "bg-white text-black border-gray-300 hover:bg-gray-100"}
                font-medium py-2 px-5 rounded-2xl border cursor-pointer transition-all duration-200
                hover:-translate-y-0.5 active:scale-[0.98] relative overflow-hidden
              `}
            >
              Connect on Tele
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`
        p-2 rounded-full transition-colors duration-200
        ${isDark ? "bg-neutral-700 text-yellow-300 hover:bg-neutral-600" : "bg-gray-200 text-neutral-600 hover:bg-gray-300"}
      `}
    >
      <div 
        className={`transition-transform duration-500 ease-in-out ${isDark ? "rotate-180" : "rotate-0"}`}
      >
        {isDark ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
         </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </div>
    </button>
  );
};

const CheckList = ({ content, isDark }) => {
  const iconColor = isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.3)";
  const textColor = isDark ? "text-neutral-300" : "text-gray-700";
  const dividerColor = isDark ? "bg-neutral-700" : "bg-gray-300";

  return (
    <div className="mt-2">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          style={{
            userSelect: "none",
            width: "12px",
            height: "12px",
            display: "inline-block",
            fill: iconColor,
            color: iconColor,
            flexShrink: 0,
            transition: "fill 0.3s ease"
          }}
        >
          <g weight="bold">
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
          </g>
        </svg>
        <p className={`text-[10px] pl-2 ${textColor} transition-colors duration-300`}>{content}</p>
      </div>
      <div className={`w-full h-[1px] mt-1 transition-colors duration-300 ${dividerColor}`}></div>
    </div>
  );
};

const WindowsIcon = ({ size = 25, color = "black", strokeWidth = 1, className = "" }) => {
  const transition = "transition-transform duration-300 ease-out";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer group ${className} transition-colors duration-300`}
      style={{ perspective: "1000px" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path 
        className={`${transition} group-hover:translate-x-[3px] group-hover:-translate-y-[3px]`} 
        d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407z" 
      />
      <path 
        className={`${transition} group-hover:-translate-x-[3px] group-hover:translate-y-[3px]`} 
        d="M11 13v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6z" 
      />
      <path 
        className={`${transition} group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]`} 
        d="M11 3.842v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87z" 
      />
      <path 
        className={`${transition} group-hover:translate-x-[3px] group-hover:translate-y-[3px]`} 
        d="M21 5.9v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" 
      />
    </svg>
  );
};

const CheckBox = ({ enabled, onClick, isDark }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      <div
        className={`
          relative inline-flex h-4 w-8 items-center rounded-full
          transition-colors duration-200
          ${enabled ? "bg-blue-600" : isDark ? "bg-neutral-600" : "bg-gray-300"}
        `}
      >
        <span
          className={`
            inline-block h-3 w-3 transform rounded-full bg-white
            transition-transform duration-200
            ${enabled ? "translate-x-4" : "translate-x-1"}
          `}
        />
      </div>
    </label>
  );
};


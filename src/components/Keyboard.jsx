import cn from "classnames";
import React from "react";

const Keyboard = () => {
  return (
    <div className='relative bg-[#27272a] rounded-xl p-4 gap-[3px] inline-flex flex-col'>
      {/* Container Font Size Reduced to 11px */}
      <div className="flex flex-col gap-[3px] text-[11px]"> 
      
      {/* Row 1 */}
      <div className="flex gap-[3px]">
        <BigKey className="left-0" btnw="" char="esc" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-dim text-white" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 4h.01"></path><path d="M20 12h.01"></path><path d="M12 20h.01"></path><path d="M4 12h.01"></path><path d="M17.657 6.343h.01"></path><path d="M17.657 17.657h.01"></path><path d="M6.343 17.657h.01"></path><path d="M6.343 6.343h.01"></path></svg>} char2="F1" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun text-white" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>} char2="F2" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid text-white" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>} char2="F3" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-white" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>} char2="F4" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic text-white" aria-hidden="true"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg>} char2="F5" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon text-white" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>} char2="F6" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rewind text-white" aria-hidden="true"><path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"></path><path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"></path></svg>} char2="F7" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward text-white" aria-hidden="true"><path d="M21 4v16"></path><path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path></svg>} char2="F8" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fast-forward text-white" aria-hidden="true"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>} char2="F9" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x text-white" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>} char2="F10" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume1 lucide-volume-1 text-white" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path></svg>} char2="F11" />

        <DoubleKey char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2 lucide-volume-2 text-white" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>} char2="F12" />

        {/* TouchID Circle: 10*4*0.75 = 30px (w-7.5) - using explicit pixels */}
        <SingleKey textProp="bg-[#000000] w-[30px] h-[30px] rounded-full border-t-2 border-b-2 border-[#171717] " />
      </div>

      {/* Row 2 */}
      <div className="flex gap-[3px]">
        <DoubleKey char1="~" char2="`" />
        <DoubleKey char1="!" char2="1" />
        <DoubleKey char1="@" char2="2" />
        <DoubleKey char1="#" char2="3" />
        <DoubleKey char1="$" char2="4" />
        <DoubleKey char1="%" char2="5" />
        <DoubleKey char1="^" char2="6" />
        <DoubleKey char1="&" char2="7" />
        <DoubleKey char1="*" char2="8" />
        <DoubleKey char1="(" char2="9" />
        <DoubleKey char1=")" char2="0" />
        <DoubleKey char1="_" char2="-" />
        <DoubleKey char1="+" char2="=" />
        <BigKey className="right-0" btnw="" char="delete" />
      </div>

      {/* Row 3 */}
      <div className="flex gap-[3px]">
        {/* Tab - standard big key */}
        <BigKey className="left-0" btnw="" char="tab" />
        <SingleKey char="Q" className="rounded-xl" />
        <SingleKey char="E" className="rounded-xl" />
        <SingleKey char="W" className="rounded-xl" />
        <SingleKey char="R" className="rounded-xl" />
        <SingleKey char="T" className="rounded-xl" />
        <SingleKey char="Y" className="rounded-xl" />
        <SingleKey char="U" className="rounded-xl" />
        <SingleKey char="I" className="rounded-xl" />
        <SingleKey char="O" className="rounded-xl" />
        <SingleKey char="P" className="rounded-xl" />
        <DoubleKey char1="{" char2="[" />
        <DoubleKey char1="}" char2="]" />
        <DoubleKey char1="|" char2="\" />
      </div>

      {/* Row 4 */}
      <div className="flex gap-[3px]">
        {/* Caps: 134 * 0.75 = 100px */}
        <BigKey className="left-0" btnw="w-[100px]" char="Caps Lock" />
        <SingleKey char="A" className="rounded-xl" />
        <SingleKey char="S" className="rounded-xl" />
        <SingleKey char="D" className="rounded-xl" />
        <SingleKey char="F" className="rounded-xl" />
        <SingleKey char="G" className="rounded-xl" />
        <SingleKey char="H" className="rounded-xl" />
        <SingleKey char="J" className="rounded-xl" />
        <SingleKey char="K" className="rounded-xl" />
        <SingleKey char="L" className="rounded-xl" />
        <DoubleKey char1=":" char2=";" />
        <DoubleKey char1='"' char2="'" />
        {/* Return: 134 * 0.75 = 100px */}
        <BigKey className="right-0" btnw="w-[100px]" char="return" />
      </div>

      {/* Row 5 */}
      <div className="flex gap-[3px]">
        {/* Shift: 172 * 0.75 = 129px */}
        <BigKey className="left-0" btnw="w-[129px]" char="shift" />
        <SingleKey char="Z" className="rounded-xl" />
        <SingleKey char="X" className="rounded-xl" />
        <SingleKey char="C" className="rounded-xl" />
        <SingleKey char="V" className="rounded-xl" />
        <SingleKey char="B" className="rounded-xl" />
        <SingleKey char="N" className="rounded-xl" />
        <SingleKey char="M" className="rounded-xl" />
        <DoubleKey char1="<" char2="," />
        <DoubleKey char1=">" char2="." />
        <DoubleKey char1="?" char2="/" />
        <BigKey className="right-0" btnw="w-[129px]" char="shift" />
      </div>

      {/* Row 6 */}
      <div className="flex gap-[3px]">
        {/* fn: 72 * 0.75 = 54px */}
        <RemainingBtn 
        className="w-[54px]"
        char1="fn"
        char2={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="llucide lucide-globe ml-1 mb-1" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>}
        char1class="right-1"
        />

        <RemainingBtn 
        className="w-[54px]"
        char1={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up absolute  top-0 right-0" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>}
        char2="control"
        char1class="right-2"
        char2class=""
        />

        <RemainingBtn 
        className="w-[54px]"
        char1={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-option absolute mr-1 mt-1   top-0 right-0" aria-hidden="true"><path d="M3 3h6l6 18h6"></path><path d="M14 3h7"></path></svg>}
        char2="option"
        char1class="right-2"
        char2class=""
        />

        {/* Command: 96 * 0.75 = 72px */}
        <RemainingBtn 
        className="w-[72px]"
        char1={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command absolute ml-1  mt-0.5   top-0 right-0" aria-hidden="true"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>}
        char2="command"
        char1class="right-2"
        char2class=""
        />

        {/* Space: 376 * 0.75 = 282px */}
        <SingleKey className="w-[282px] rounded-xl" />

        <RemainingBtn 
        className="w-[72px]"
        char1={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command absolute ml-1  mt-0.5   top-0 right-0" aria-hidden="true"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>}
        char2="command"
        char1class="left-4"
        char2class=""
        />

        <RemainingBtn 
        className="w-[54px]"
        char1={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-option absolute mr-1 mt-1   top-0 right-0" aria-hidden="true"><path d="M3 3h6l6 18h6"></path><path d="M14 3h7"></path></svg>}
        char2="option"
        char1class="left-4"
        char2class=""
        />
        
        <div className="flex flex-1 flex-col items-center justify-between">
          <div className="relative">
            
            <SingleKey 
            char={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>} 
            className="w-[54px] h-[25px] rounded-[7px]"
            />
          </div>
          <div className="flex gap-[3px]">
            <SingleKey 
            char={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>} 
            className="w-[54px] h-[25px] rounded-[7px]"
            />

            <SingleKey 
            char={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>} 
            className="w-[54px] h-[25px] rounded-[7px]"
            />

            <SingleKey 
            char={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>} 
            className="w-[54px] h-[25px] rounded-[7px]"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;

// Standard key size reduced from h-18/w-18 (72px) to 54px
const DoubleKey = ({ className, char1, char2 }) => {
  return (
    <div
      className={cn(
        " relative h-[54px] w-[54px] bg-black rounded-xl cursor-pointer",
        "text-white items-center justify-center hover:translate-y-1 hover:scale-[0.98] flex flex-col ",
        "border-t-2 border-b-2 border-[#525255] hover:shadow-none hover:border-r-2 hover:border-t-0 transition-all transform duration-100",
        "shadow-lg shadow-[#9d9b9f]",
        "group",
        className,
      )}
    >
      <div className="group-hover:-translate-y-[1px]">{char1}</div>
      <div className="group-hover:-translate-y-[1px]">{char2}</div>
    </div>
  );
};

const SingleKey = ({ className, char, textProp }) => {
  return (
    <div
      className={cn(
        " relative  w-[54px] bg-black cursor-pointer",
        "text-white flex items-center justify-center hover:translate-y-1 hover:scale-[0.98]",
        "border-t-2 border-b-2 border-[#525255] hover:shadow-none hover:border-r-2 hover:border-t-0 transition-all transform duration-100",
        "shadow-lg shadow-[#9d9b9f]",
        "group",
        className,
      )}
    >
      <span className={cn("group-hover:-translate-y-[1px]", textProp)}>{char}</span>
    </div>
  );
};

const BigKey = ({className, btnw, char}) => {
  return (
    <div
      className={cn(
        " relative h-[54px] w-[90px] bg-black rounded-xl cursor-pointer", // Default width 90px (prev 120px)
        "text-white flex hover:translate-y-1 hover:scale-[0.98]",
        "border-t-2 border-b-2 border-[#525255] hover:shadow-none hover:border-r-2 hover:border-t-0 transition-all transform duration-100",
        "shadow-lg shadow-[#9d9b9f]",
        "group", btnw
      )}
    >
      <div className="relative h-full w-full">
        <span
          className={cn(
            "absolute bottom-0 right-0 mb-1 transition-transform duration-100 ease-in-out",
            "group-hover:-translate-y-1 p-2", // Reduced padding
            className
          )}
        >
          {char}
        </span>
      </div>
    </div>
  );
};

const RemainingBtn = ({ className, char1, char2, char1class, char2class }) => {
  return (
    <div
      className={cn(
        " relative h-[54px] w-[54px] bg-black rounded-xl cursor-pointer",
        "text-white items-center justify-center hover:translate-y-1 hover:scale-[0.98] flex flex-col ",
        "border-t-2 border-b-2 border-[#525255] hover:shadow-none hover:border-r-2 hover:border-t-0 transition-all transform duration-100",
        "shadow-lg shadow-[#9d9b9f]",
        "group",
        className,
      )}
    >
      <div className=" text-white relative h-full w-full p-1 box-border">
        <div className={cn("absolute top-1 group-hover:-translate-y-[1px] pr-2", char1class)}>{char1}</div>
        <div className={cn("absolute bottom-0 left-0 ml-1 group-hover:-translate-y-[1px] p-1", char2class)}>{char2}</div>
      </div>
    </div>
  );
};
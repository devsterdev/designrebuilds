import React, { useEffect, useState, useRef } from "react";
import cls from "classnames";
import { motion, AnimatePresence } from "motion/react"

export const useOutsideClick = (ref, callback, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback, enabled]);
};

const Delet = () => {
  const wrapperRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [delet, setDelet] = useState(false)
  useOutsideClick(wrapperRef, () => {
    setOpen(false)
    setDelet(false)
  }, open)
  
  const menuItems = [
      {
        icon: <InfoIcon />,
        text: "Info"
      },
      {
        icon: <DublicateIcon />,
        text: "Rename"
      },
      {
        icon: <DownloadIcon />,
        text: "Download"
      },
      {
        icon: <ShareIcon />,
        text: "Share"
      }
  ]
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      filter: "blur(4px)",
      transition: { duration: 0.3, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const listVariants = {
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 24 } },
  };

  return (
    <div ref={wrapperRef}  className="relative flex items-start h-10">
      <button
        onClick={() => {
          if (open) {
            setOpen(false);
            setTimeout(() => setDelet(false), 200);
          } else {
            setOpen(true);
          }
        }}
        className="p-2  shadow-[0_1px_1px_rgba(0,0,0,0.04),0_6px_18px_rgba(0,0,0,0.12)] rounded-xl bg-neutral-50 active:scale-95 transition-transform duration-100"
      >
        <DotSvg />  
      </button>
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 10 },
            scale: { type: "spring", stiffness: 260, damping: 18 },
            opacity: { duration: 0.2 }
          }}
          exit={{
            opacity: 0,
            y: 10,
            scale: 0.8
          }}
        className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-xl z-50 w-52 border border-gray-200 overflow-hidden">
          <p className="text-xs bg-gray-50 px-3 py-2 border-b border-gray-200 text-gray-500 font-medium">
            More Options
          </p>

          <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="p-1 flex flex-col"
          >
            {menuItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <IconComp key={index} icon={item.icon} text={item.text} />
              </motion.div>
            ))}
            <div className="my-1 border-t border-gray-200"></div>
            <div className="relative">
              
              <AnimatePresence mode="wait">
                {!delet ? (
                  <motion.div
                  variants={itemVariants}
                    key="delete-btn"
                    initial={{ opacity: 1, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconComp
                      icon={<DeleteIcon />}
                      text="Delete"
                      onClick={() => setDelet(true)}
                      className="text-red-500 hover:bg-red-50"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="confirm-ui"
                    initial={{ opacity: 1, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="flex gap-2 px-2 py-1"
                  >
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg py-1.5 transition">
                      Yes, Delete
                    </button>

                    <button
                      onClick={() => setDelet(false)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg py-1.5 transition"
                    >
                      Cancel
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Delet;

const DotSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-dots-vertical"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 12a2 2 0 1 1 -4 0q 0 -.053 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2" />
    <path d="M14 19a2 2 0 1 1 -4 0q 0 -.052 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2" />
    <path d="M14 5a2 2 0 1 1 -4 0q 0 -.053 .005 -.102a1.996 1.996 0 0 1 1.995 -1.898a2 2 0 0 1 2 2" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
);

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
);

const DublicateIcon =() => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M10.507 10.498l-1.507 1.502v3h3l1.493 -1.498m2 -2.01l4.89 -4.907a2.1 2.1 0 0 0 -2.97 -2.97l-4.913 4.896" /><path d="M16 5l3 3" /><path d="M3 3l18 18" /></svg>
)

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
)

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7" /></svg>
)

const IconComp = ({ icon, text, className, onClick }) => (
  <button
  onClick={onClick}
    className={cls(
      "flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors w-full text-left",
      className,
    )}
  >
    {icon}
    <span>{text}</span>
  </button>
);
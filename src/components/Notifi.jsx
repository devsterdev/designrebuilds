import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Notifi() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-24 font-sans text-white w-full">
      <Notif />
    </div>
  );
}

const Notif = () => {
  const [step, setStep] = useState("idle"); // idle | dropping | open
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  

  const youtube = [
    {
      pfp: "https://yt3.googleusercontent.com/ytc/AIdro_mpYedipdXUXCKkwjQEeFrepFlDHZ0LiczqWeKyG0YmJvA=s160-c-k-c0x00ffffff-no-rj",
      name: "Vsauce",
      desc: "uploaded: An Illusion You Can Hug",
      time: "3 days ago",
    },
    {
      pfp: "https://yt3.googleusercontent.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s160-c-k-c0x00ffffff-no-rj",
      name: "Veritasium",
      desc: "uploaded: This Paradox Splits Smart People 50/50",
      time: "3 days ago",
    },
    {
      pfp: "https://yt3.googleusercontent.com/ay7v4Wq0rVbojc_glLjXt4hZSiar_SjG13NQVX4ZLyO2N9VjKeY7FvpNatDFOaS6Z4oucci8=s160-c-k-c0x00ffffff-no-rj",
      name: "Varun Mayya",
      desc: "uploaded: Why Indian Startups Are Unprofitable",
      time: "3 days ago",
    },
  ];

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (step === "idle") {
      setStep("dropping");

      setTimeout(() => {
        setStep("open");

        // wait panel morph finish
        setTimeout(() => {
          setShowContent(true);
          setIsAnimating(false);
        }, 420);
      }, 200);
    } else if (step === "open") {
      setShowContent(false);
      setStep("dropping");

      setTimeout(() => {
        setStep("idle");
        setIsAnimating(false);
      }, 420);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[380px] relative">
      {/* BUTTON */}
      <button
        onClick={handleToggle}
        className="relative flex items-center justify-center h-14 w-14 bg-black border border-white/10 rounded-full shadow-2xl hover:bg-neutral-900 active:scale-95 transition-all z-30"
      >
        <NotificationIcon />
      </button>

      {/* MORPH ELEMENT */}
      <motion.div
        layoutId="noti-container"
        animate={{
          width: step === "open" ? 380 : 56,
          height: step === "open" ? 320 : 56,
          y: step === "idle" ? 0 : 70,
          borderRadius: step === "open" ? 18 : 999,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 32,
        }}
        className="absolute top-0 bg-black border border-white/10 shadow-2xl z-20 overflow-hidden"
      >
        {/* CONTENT */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-4 h-full flex flex-col"
            >
              {/* HEADER */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="flex justify-between items-center mb-6 mt-2 px-2"
              >
                <h2 className="text-white text-2xl font-bold tracking-tight">
                  Notifications
                </h2>

                <button
                  onClick={handleToggle}
                  className="text-[#8e8e93] hover:text-white transition-colors p-1.5 rounded-full hover:bg-[#1c1c1e]"
                >
                  <CloseIcon />
                </button>
              </motion.div>

              {/* LIST */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.09,
                    },
                  },
                }}
                className="flex flex-col gap-5"
              >
                {youtube.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="flex items-center gap-4 cursor-pointer group px-2"
                  >
                    <img
                      src={item.pfp}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-semibold truncate group-hover:text-blue-400">
                          {item.name}
                        </h3>
                        <span className="text-xs text-neutral-400">
                          {item.time}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-400 truncate">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// ICONS

const NotificationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" stroke="white" fill="none">
    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);
import { motion, AnimatePresence } from "motion/react";
import { IconCheck, IconAlertCircle } from "@tabler/icons-react";

const Alert = ({ type, text }) => {
  const isError = type === "danger";

  const alertVariants = {
    hidden: { opacity: 0, y: 20, x: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[9999] bottom-10 right-10"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className={`
          relative overflow-hidden
          min-w-[320px] max-w-[400px]
          flex items-center gap-4
          p-4 rounded-2xl
          backdrop-blur-xl bg-navy/60
          border border-white/10
          shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        `}>
          {/* Accent Glow */}
          <div className={`
            absolute -left-10 -top-10 w-24 h-24 blur-3xl opacity-20 rounded-full
            ${isError ? "bg-red-500" : "bg-lavender"}
          `} />

          {/* Icon Container */}
          <div className={`
            flex-shrink-0 flex items-center justify-center
            w-10 h-10 rounded-xl
            ${isError 
              ? "bg-red-500/10 text-red-400 border border-red-500/20" 
              : "bg-lavender/10 text-lavender border border-lavender/20"}
          `}>
            {isError ? <IconAlertCircle size={22} /> : <IconCheck size={22} />}
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-0.5">
            <h4 className={`text-[10px] font-black tracking-[0.15em] uppercase ${isError ? "text-red-400" : "text-lavender"}`}>
              {isError ? "Failed" : "Success"}
            </h4>
            <p className="text-sm text-neutral-300 font-medium leading-tight">
              {text}
            </p>
          </div>

          {/* Progress Bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className={`
              absolute bottom-0 left-0 h-[2px]
              ${isError ? "bg-red-500/40" : "bg-lavender/40"}
            `}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;

import { motion } from "framer-motion";

export default function PageIntro({ children, darkTo, header }) {
  return (
    <div className="relative">
      <div
        className={`absolute -inset-px opacity-50 dark:bg-gradient-to-r dark:from-white ${darkTo} bg-gradient-to-r from-[#dcd5fc] via-[#c7fdf1] to-[#d3c8ff] rounded-lg border-[1px] dark:blur transition duration-500`}
      ></div>
      <div className="relative dark:bg-[#050505] rounded-lg p-8 mb-10 sm:flex items-end justify-between">
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className="my-0"
        >
          {header}
        </motion.h1>
        <motion.p
          className="sm:my-0 mb-0"
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.p>
      </div>
    </div>
  );
}

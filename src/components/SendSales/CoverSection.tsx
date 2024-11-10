import { motion } from "framer-motion";

export function CoverSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            delay: 0.5,
          }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
          >
            Discover Amazing Products
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Scroll down to explore our offerings
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
}

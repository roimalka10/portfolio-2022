import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const AnimateLeft = ({ children }) => {
  return (
    <motion.div
      className="left-transition about"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateLeft;

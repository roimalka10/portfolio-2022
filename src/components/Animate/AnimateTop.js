import { motion } from "framer-motion";

const animations = {
  exit: {
    opacity: 0,
  },
};

const AnimateTop = ({ children }) => {
  return (
    <motion.div
      className="top-transition home"
      variants={animations}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateTop;

import { motion } from "framer-motion";

const animations = {
  exit: {
    opacity: 0,
  },
};

const AnimateHome = ({ children }) => {
  return (
    <motion.div
      className="home-transition"
      variants={animations}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateHome;

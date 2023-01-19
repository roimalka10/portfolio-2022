import { useScroll, useSpring } from "framer-motion";

export default function UseScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });

  return [scrollYProgress, scaleX];
}

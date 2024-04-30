import { motion } from "framer-motion";

export default function FramerTest() {

  return (
    // <motion.div
    //   className="w-24 h-24 bg-blue-400"
    //   animate={{
    //     scale: [1, 2, 2, 1, 1],
    //     rotate: [0, 0, 180, 180, 0],
    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     repeat: Infinity,
    //     repeatDelay: 1
    //   }}
    // />
    <>
    <motion.div
  className="w-24 h-24 bg-blue-400"
  drag="x"
  dragConstraints={{ left: 0, right: 300 }}
/>
<motion.div
  className="w-24 h-24 bg-cyan-400"
  drag
  dragConstraints={{ left: 0, right: 300 }}
  dragElastic={0.2}
/>
<motion.div
  className="w-24 h-24 bg-green-400"
  drag
  dragConstraints={{ left: 0, right: 300 }}
  dragMomentum={false}
/>

<motion.div
  className="w-24 h-24 bg-yellow-400"
  drag
  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
/>

    <motion.div 
    className="w-24 h-24 bg-blue-400"
    animate={{ x: 100 }} />
    </>
  );
}

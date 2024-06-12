// import { motion } from "framer-motion";

// const stairAnimation = {
//   initial: {
//     top: "0%",
//   },
//   animate: {
//     top: "100%",
//   },
//   exit: {
//     top: ["100%", "0%"],
//   },
// };

// const reverseIndex = (index) => {
//   const totalStep = 6;
//   return totalStep - index - 1;
// };
// const Stairs = () => {
//   return (
//     <>
//       {[...Array(6)].map((_, index) => {
//         return (
//           <motion.div
//             key={index}
//             variants={stairAnimation}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//               delay: reverseIndex(index) * 0.1,
//             }}
//             className="h-full w-full bg-white relative"
//           />
//         );
//       })}
//     </>
//   );
// };

// export default Stairs;

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    top: "100%",
    opacity: 1,
    scale: 1,
  },
  exit: {
    top: ["100%", "0%"],
    opacity: [1, 0],
    scale: [1, 0.9],
  },
};

const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const colors = ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d"];

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full relative"
            style={{ backgroundColor: colors[index] }}
          />
        );
      })}
    </>
  );
};

export default Stairs;

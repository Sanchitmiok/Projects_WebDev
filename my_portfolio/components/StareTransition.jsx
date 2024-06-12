"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
const StareTransition = () => {
  const pahtname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pahtname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StareTransition;

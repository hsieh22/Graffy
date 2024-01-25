'use-client';

import { motion } from "framer-motion";

type SlideOutProps = {
  slideOut?: boolean;
}

export const SlideOut = ({ slideOut = true }: SlideOutProps) => {
  return (
    <div className="relative z-50">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: slideOut ? 0 : 1 }}
        exit={{ scaleY: 0 }}
        className="fixed top-0 left-0 w-full h-screen bg-[#0f0f0f] transition-transform duration-1000 ease-out origin-top"
      />
    </div>
  );
}

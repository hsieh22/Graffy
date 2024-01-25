'use-client';

import { motion } from "framer-motion";

type SlideInProps = {
  slideIn?: boolean;
}

export const SlideIn = ({ slideIn = false }: SlideInProps) => {
  return (
    <div className="relative z-50">
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: slideIn ? 1 : 0 }}
        exit={{ scaleY: 1 }}
        className="fixed top-0 left-0 w-full h-screen bg-[#000] transition-transform duration-1000 ease-out origin-top"
      />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CAPTIONS = [
  "Crafted in Silence.",
  "Where Form Meets Identity.",
  "Not Just Worn. Remembered.",
  "Defined by Detail.",
  "Luxury in Motion.",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [caption] = useState(() => CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3500); // Total duration before starting exit

    return () => clearTimeout(timer);
  }, [onComplete]);

  const brandName = "VAULT 26";
  const letters = brandName.split("");

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Noise/Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Main Brand Name */}
            <div className="flex overflow-hidden mb-4">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block text-[60px] md:text-[100px] tracking-[0.15em] font-serif leading-none text-black"
                  style={{ fontFamily: "'Playfair Display', serif", whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Accent Line */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="h-[1px] bg-[#B11226] mb-6"
            />

            {/* Subtext Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
              className="text-sm md:text-lg font-light tracking-[0.2em] text-black/60 uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {caption}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

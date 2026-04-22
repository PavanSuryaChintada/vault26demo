import { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const LINE1_WORDS = ['The', 'journey', 'starts', 'here'];
const LINE2_WORDS = ['&', 'changes', 'your', 'style.'];
const ALL_WORDS = [...LINE1_WORDS, ...LINE2_WORDS];

export default function Preloader({ onComplete }: PreloaderProps) {
  const bgControls = useAnimation();
  const overlayControls = useAnimation();
  const searchControls = useAnimation();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const totalWords = ALL_WORDS.length;
    // Each word takes ~0.18s stagger + 0.5s base duration
    // Last word finishes around: 0.3 + (totalWords - 1) * 0.18 + 0.5 ≈ 2.1s
    const textRevealDone = 0.3 + (totalWords - 1) * 0.18 + 0.5 + 0.4; // ~2.5s

    // After text is done, start dissolving in the bg image
    const timer = setTimeout(async () => {
      // Fade in the hero background image (overlaid under the white)
      await bgControls.start({
        opacity: 1,
        transition: { duration: 1.0, ease: 'easeInOut' },
      });

      // Fade out the white overlay so image shows through
      await overlayControls.start({
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });

      // Fade in the search bar
      await searchControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });

      // Brief hold, then signal completion
      setTimeout(onComplete, 600);
    }, textRevealDone * 1000);

    return () => clearTimeout(timer);
  }, [bgControls, overlayControls, searchControls, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Hero background image — fades in beneath the white */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={bgControls}
      >
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </motion.div>

      {/* White overlay — fades out to reveal image */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={overlayControls}
      />

      {/* Content — identical layout to hero so text sits in same spot */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6">
        <div className="text-center w-full max-w-4xl">
          {/* Line 1 */}
          <h1
            className="text-[40px] md:text-[64px] lg:text-[76px] leading-[1.05] mb-0 font-normal text-black"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="block">
              {LINE1_WORDS.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  className="inline-block mr-[0.28em]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.18,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 2 */}
            <span className="block">
              {LINE2_WORDS.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  className="inline-block mr-[0.28em]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + (LINE1_WORDS.length + i) * 0.18,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Search bar — same as hero, appears after bg transition */}
          <motion.div
            className="relative w-full max-w-[800px] mx-auto bg-white flex items-center h-16 md:h-20 shadow-2xl mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={searchControls}
          >
            <div className="pl-6 md:pl-8 text-black/50 flex items-center justify-center">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <input
              type="text"
              placeholder="SEARCH FOR A PRODUCT, CATEGORY, COLLECTION..."
              readOnly
              className="w-full h-full bg-transparent border-none outline-none px-4 md:px-6 text-sm md:text-base text-black placeholder:text-black/40 font-medium uppercase tracking-wide"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

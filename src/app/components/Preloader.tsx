import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Search } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

// ─── EXACT same text as hero h1 ───────────────────────────────────────────────
const FULL_TEXT_L1 = 'The journey starts here';
const FULL_TEXT_L2 = '& changes your style.';
const CHAR_DELAY_MS = 48;        // speed per character
const CURSOR_BLINK_MS = 530;     // cursor blink speed
const HOLD_AFTER_TYPED_MS = 700; // pause after fully typed before dissolve

export default function Preloader({ onComplete }: PreloaderProps) {
  const [typedL1, setTypedL1] = useState('');
  const [typedL2, setTypedL2] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'typing' | 'dissolve' | 'done'>('typing');

  const bgControls = useAnimation();
  const whiteControls = useAnimation();
  const searchControls = useAnimation();

  const completedRef = useRef(false);

  // ── Typewriter effect ──────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    let charIdx = 0;
    const total = FULL_TEXT_L1.length + FULL_TEXT_L2.length;

    const type = () => {
      if (cancelled) return;
      if (charIdx <= total) {
        if (charIdx <= FULL_TEXT_L1.length) {
          setTypedL1(FULL_TEXT_L1.slice(0, charIdx));
        } else {
          setTypedL1(FULL_TEXT_L1);
          setTypedL2(FULL_TEXT_L2.slice(0, charIdx - FULL_TEXT_L1.length));
        }
        charIdx++;
        setTimeout(type, CHAR_DELAY_MS);
      } else {
        // Fully typed — hold, then dissolve
        setTimeout(() => {
          if (!cancelled) setPhase('dissolve');
        }, HOLD_AFTER_TYPED_MS);
      }
    };

    type();
    return () => { cancelled = true; };
  }, []);

  // ── Blinking cursor ────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'typing') return;
    const iv = setInterval(() => setShowCursor(v => !v), CURSOR_BLINK_MS);
    return () => clearInterval(iv);
  }, [phase]);

  // ── Dissolve sequence ──────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'dissolve' || completedRef.current) return;
    completedRef.current = true;

    // Hide cursor immediately
    setShowCursor(false);

    const run = async () => {
      // 1. Fade in the background image (behind everything)
      await bgControls.start({
        opacity: 1,
        transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
      });

      // 2. Fade out the white overlay so image shows through
      await whiteControls.start({
        opacity: 0,
        transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
      });

      // 3. Slide-in the search bar
      await searchControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      });

      // 4. Brief hold → done
      setTimeout(onComplete, 400);
    };

    run();
  }, [phase, bgControls, whiteControls, searchControls, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* ── Layer 1: Hero background image ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={bgControls}
      >
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </motion.div>

      {/* ── Layer 2: White overlay (starts fully opaque, fades away) ── */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={whiteControls}
      />

      {/* ── Layer 3: Content — identical layout to hero ── */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center w-full max-w-4xl">

          {/* Headline — identical font/size/line-height to App.tsx hero h1 */}
          <h1
            className="text-[40px] md:text-[64px] lg:text-[76px] leading-[1.05] mb-12 font-normal text-black"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {/* Line 1 */}
            <span className="block min-h-[1.05em]">
              {typedL1}
              {/* Cursor only on L1 while still typing L1, and on L2 after */}
              {phase === 'typing' && typedL2 === '' && (
                <span
                  className="inline-block w-[3px] ml-[2px] bg-black"
                  style={{
                    height: '0.85em',
                    verticalAlign: 'middle',
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.05s',
                  }}
                />
              )}
            </span>

            {/* Line 2 */}
            <span className="block min-h-[1.05em]">
              {typedL2}
              {phase === 'typing' && typedL2.length > 0 && (
                <span
                  className="inline-block w-[3px] ml-[2px] bg-black"
                  style={{
                    height: '0.85em',
                    verticalAlign: 'middle',
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.05s',
                  }}
                />
              )}
            </span>
          </h1>

          {/* Search bar — appears during dissolve, identical to hero */}
          <motion.div
            className="relative w-full max-w-[800px] mx-auto bg-white flex items-center h-16 md:h-20 shadow-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={searchControls}
          >
            <div className="pl-6 md:pl-8 text-black/50 flex items-center">
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

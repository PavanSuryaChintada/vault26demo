import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import BentoGrid from './components/BentoGrid';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="w-full bg-white text-black overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {/* Navigation */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
          }}
        >
          <div className="px-8 lg:px-14 py-7 flex items-center justify-between">

            {/* ── Brand ── */}
            <a href="#" className="flex items-center group h-16">
              <img
                src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png"
                alt="VAULT 26"
                className={`h-full w-auto object-contain transition-all duration-500 ${scrolled ? 'brightness-0' : 'brightness-0 invert'}`}
              />
            </a>

            {/* ── Center nav links ── */}
            <div
              className="hidden lg:flex items-center gap-10"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              {[
                { label: 'New Drops', href: '#new-drops' },
                { label: 'Men', href: '#men' },
                { label: 'Women', href: '#women' },
                { label: 'Lookbook', href: '#lookbook' },
                { label: 'About', href: '#about' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative text-[13px] font-light tracking-[0.2em] uppercase transition-colors duration-300 group py-1 ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/80 hover:text-white'}`}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B11226] group-hover:w-full transition-all duration-400" />
                </a>
              ))}
            </div>

            {/* ── Right utilities ── */}
            <div className="flex items-center gap-6">
              <button
                className={`hidden md:flex items-center gap-2 transition-colors duration-300 group ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span
                  className="text-[11px] tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                >
                  Search
                </span>
              </button>

              <div className={`hidden md:block w-[1px] h-4 transition-colors duration-500 ${scrolled ? 'bg-black/20' : 'bg-white/20'}`} />

              <button
                className={`flex items-center gap-2 transition-colors duration-300 ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
                aria-label="Bag"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span
                  className="hidden md:inline text-[11px] tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                >
                  Bag
                </span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden transition-colors ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'}`}
              >
                {menuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {/* ── Mobile menu ── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden bg-black/60 backdrop-blur-xl border-t border-white/10"
              >
                <div className="px-8 py-8 flex flex-col gap-6">
                  {[
                    { label: 'New Drops', href: '#new-drops' },
                    { label: 'Men', href: '#men' },
                    { label: 'Women', href: '#women' },
                    { label: 'Lookbook', href: '#lookbook' },
                    { label: 'About', href: '#about' },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[13px] tracking-[0.3em] uppercase font-light text-white/80 hover:text-white hover:pl-2 transition-all duration-300"
                      style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
              alt="Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6 mt-8 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="text-center z-10 w-full max-w-4xl"
            >
              <h1
                className="text-[40px] md:text-[64px] lg:text-[76px] leading-[1.05] mb-12 text-white font-normal"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The journey starts here<br />& changes your style.
              </h1>

              <div className="relative w-full max-w-[800px] mx-auto bg-white flex items-center h-16 md:h-20 shadow-2xl">
                <div className="pl-6 md:pl-8 text-black/50 flex items-center justify-center">
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <input
                  type="text"
                  placeholder="SEARCH FOR AN ITEM"
                  className="w-full h-full bg-transparent border-none outline-none text-sm md:text-base px-6 tracking-widest text-black placeholder:text-black/30 font-light"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                />
                <button className="h-full bg-[#B11226] text-white px-8 md:px-12 text-[10px] md:text-[12px] font-bold tracking-[0.2em] hover:bg-black transition-colors duration-300">
                  SEARCH
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ATTITUDE / CONFIDENCE — clip-mask reveal from bottom */}
        <section id="about" className="py-28 px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  ATTITUDE
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight text-right"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  CONFIDENCE
                </motion.h2>
              </div>
            </div>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-[#B11226] mt-8 w-full"
            />
          </div>
        </section>

        {/* Editorial Split — staggered word lift */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden group"
              >
                <img
                  src="https://images.unsplash.com/photo-1637536701306-3214e9cec64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Editorial"
                  className="w-full h-[600px] object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </motion.div>

              <div className="space-y-6">
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[#B11226] text-8xl leading-none"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    26
                  </motion.span>
                </div>

                {['Redefining', 'Street Culture'].map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.h3
                      initial={{ y: '100%' }}
                      whileInView={{ y: '0%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="text-5xl lg:text-6xl leading-tight"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                    >
                      {word}
                    </motion.h3>
                  </div>
                ))}

                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-20 h-[1px] bg-[#B11226]"
                />

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-base leading-relaxed text-black/60"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                >
                  Where high fashion meets street authenticity. Vault 26 is more than clothing — it's a statement of individuality and fearless self-expression.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="border border-black px-10 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-400"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                >
                  Discover More
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Bento Grid — Latest Drops */}
        <div id="new-drops">
          <BentoGrid />
        </div>

        {/* Category Section (H&M Editorial Style) */}
        <section className="py-24 bg-white">
          <div className="px-6 lg:px-12 max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-1">

              {/* Men */}
              <motion.div
                id="men"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden w-full h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                  <img
                    src="https://images.unsplash.com/photo-1617137984095-74ef55a92ca9?q=80&w=1000&auto=format&fit=crop"
                    alt="Menswear"
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-0.5">
                  <h3
                    className="text-[13px] tracking-[0.06em] text-black uppercase"
                    style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}
                  >
                    MENSWEAR
                  </h3>
                  <div
                    className="text-[13px] tracking-[0.06em] text-black/60 group-hover:text-black transition-colors duration-400 uppercase"
                    style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                  >
                    → EXPLORE COLLECTION
                  </div>
                </div>
              </motion.div>

              {/* Women */}
              <motion.div
                id="women"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden w-full h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
                    alt="Womenswear"
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-0.5">
                  <h3
                    className="text-[13px] tracking-[0.06em] text-black uppercase"
                    style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}
                  >
                    WOMENSWEAR
                  </h3>
                  <div
                    className="text-[13px] tracking-[0.06em] text-black/60 group-hover:text-black transition-colors duration-400 uppercase"
                    style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                  >
                    → EXPLORE COLLECTION
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* NOT FOR EVERYONE — letter-stagger mega reveal */}
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 0.04, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] pointer-events-none"
            >
              <img 
                src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png" 
                alt="" 
                className="w-full h-auto object-contain opacity-20" 
              />
            </motion.div>

            {/* NOT FOR — each letter staggers up */}
            <div className="flex justify-center flex-wrap gap-x-6 mb-2">
              {'NOT FOR'.split('').map((char, i) => (
                <div key={i} className="overflow-hidden" style={{ display: 'inline-block' }}>
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{ y: '0%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight relative z-10"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* EVERYONE — italic, delayed */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight relative z-10"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic' }}
              >
                EVERYONE
              </motion.span>
            </div>

            <motion.div
              initial={{ scaleX: 0, originX: 0.5 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-[2px] bg-[#B11226] mx-auto mt-8 mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-base max-w-2xl mx-auto text-black/50 tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
            >
              For those who dare to stand out
            </motion.p>
          </div>
        </section>

        {/* Lookbook */}
        <section id="lookbook" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="overflow-hidden mb-16">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl lg:text-9xl tracking-tight leading-none"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic' }}
              >
                Lookbook
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop',
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Lookbook ${index + 1}`}
                    className="w-full h-[400px] md:h-[600px] object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        {/* Redesigned Join the Vault Section */}
        <section className="py-48 px-6 lg:px-12 bg-white relative overflow-hidden">
          {/* Animated Marquee Typography Background */}
          <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] pointer-events-none select-none">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[20vw] font-light uppercase tracking-tighter flex"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span>VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp;</span>
              <span>VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp;</span>
            </motion.div>
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[20vw] font-light italic uppercase tracking-tighter flex"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span>VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp;</span>
              <span>VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp; VAULT 26 &nbsp;</span>
            </motion.div>
          </div>

          <div className="max-w-[1600px] mx-auto text-center relative z-10">
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none text-black"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Join the
              </motion.span>
            </div>
            <div className="overflow-hidden mb-16">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none italic text-[#B11226]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Vault
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <p
                className="text-black/60 mb-12 text-sm md:text-base tracking-[0.2em] uppercase font-light leading-relaxed"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                BE THE FIRST TO RECEIVE EXCLUSIVE ACCESS TO LIMITED DROPS, EDITORIAL CONTENT, AND SECRET ARCHIVE RELEASES.
              </p>

              {/* Premium Newsletter Input */}
              <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
                <div className="relative flex-grow w-full">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-transparent border-b border-black/20 py-4 text-[12px] tracking-[0.3em] font-light outline-none focus:border-[#B11226] transition-colors placeholder:text-black/20"
                    style={{ fontFamily: 'Jost, sans-serif' }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#000000', color: '#ffffff' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto border border-black px-12 py-4 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 bg-transparent text-black whitespace-nowrap"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                >
                  Join Now
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-8 opacity-40">
                {['INSTAGRAM', 'TWITTER', 'TIKTOK'].map(social => (
                  <a key={social} href="#" className="text-[9px] tracking-[0.3em] hover:text-[#B11226] transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Floating Editorial Elements */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[5%] top-[20%] hidden xl:block w-48 h-72 overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                alt="" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[8%] bottom-[15%] hidden xl:block w-56 h-80 overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                alt="" 
              />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-black/10 py-16 px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="mb-4 h-16">
                  <img
                    src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png"
                    alt="VAULT 26"
                    className="h-full w-auto object-contain brightness-0"
                  />
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Jost, sans-serif' }}>
                  Premium streetwear for those who dare to be different.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: 'Jost, sans-serif' }}>Shop</h4>
                <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Jost, sans-serif' }}>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">New Arrivals</a></li>
                  <li><a href="#men" className="hover:text-[#B11226] transition-colors">Men</a></li>
                  <li><a href="#women" className="hover:text-[#B11226] transition-colors">Women</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Accessories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: 'Jost, sans-serif' }}>Support</h4>
                <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Jost, sans-serif' }}>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Shipping</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: 'Jost, sans-serif' }}>Follow</h4>
                <ul className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Jost, sans-serif' }}>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">TikTok</a></li>
                  <li><a href="#" className="hover:text-[#B11226] transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-black/10 pt-8 text-center text-[10px] tracking-widest uppercase text-gray-400" style={{ fontFamily: 'Jost, sans-serif' }}>
              © 2026 Vault 26. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

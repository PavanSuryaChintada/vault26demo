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
            <a href="#" className="flex items-center group h-12 md:h-24">
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
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className="lg:hidden overflow-hidden bg-white border-t border-black/5 shadow-xl"
              >
                <div className="px-8 py-10 flex flex-col gap-6">
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
                      className="text-[14px] tracking-[0.3em] uppercase font-light text-black/60 hover:text-black transition-all duration-300"
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

        {/* Cinematic Editorial Hero Section */}
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* Layer 1: Background Media with Cinematic Grade */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=90&w=1920"
              alt="Hero"
              className="w-full h-full object-cover object-center scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          </div>

          {/* Layer 2: Massive Brand Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none">
            <h2 
              className="text-[60vw] leading-none text-white select-none"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, WebkitTextStroke: '2px white', color: 'transparent' }}
            >
              26
            </h2>
          </div>

          {/* Layer 3: Main Editorial Content */}
          <div className="relative h-full flex items-center px-6 lg:px-24">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span 
                  className="inline-block text-[10px] tracking-[0.5em] uppercase text-white/50 mb-8"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                >
                  ESTABLISHED MMXXVI // ARCHIVE 01
                </span>
                
                <h1
                  className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white font-normal mb-12 tracking-tighter"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  BEYOND <br />
                  <span className="italic ml-8 md:ml-16">TRENDS.</span>
                </h1>

                {/* Sleek Minimalist Search Bar (Glassmorphic) */}
                <div className="relative w-full max-w-[500px] flex items-center h-14 bg-white/5 backdrop-blur-xl border border-white/10 group transition-all duration-500 hover:border-white/30">
                  <div className="pl-6 text-white/40 group-hover:text-[#B11226] transition-colors duration-300">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="FIND YOUR PIECE..."
                    className="w-full h-full bg-transparent border-none outline-none text-[11px] px-4 tracking-[0.2em] text-white placeholder:text-white/20 font-light"
                    style={{ fontFamily: 'Jost, sans-serif' }}
                  />
                  <button className="h-full bg-white text-black px-8 text-[9px] font-bold tracking-[0.2em] hover:bg-[#B11226] hover:text-white transition-all duration-500 uppercase">
                    EXPLORE
                  </button>
                </div>

                <div className="mt-12 flex gap-12 items-center">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                   <p className="text-[10px] tracking-[0.1em] text-white/40 uppercase font-light" style={{ fontFamily: 'Jost, sans-serif' }}>
                      JOIN 2K+ COLLECTORS <br /> IN THE ARCHIVE
                   </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Layer 4: Vertical Scroll Hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
             <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
             <span className="text-[9px] tracking-[0.4em] uppercase text-white font-light">Scroll</span>
          </div>
        </section>

        {/* ATTITUDE / CONFIDENCE — clip-mask reveal from bottom */}
        <section id="about" className="pt-28 pb-10 px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-row items-baseline justify-center gap-6 md:gap-12 flex-wrap">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[10vw] md:text-[7vw] leading-none tracking-tighter"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
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
                  className="text-[10vw] md:text-[7vw] leading-none tracking-tighter italic"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
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
        <section className="pb-20 pt-4 px-6 lg:px-12 bg-white">
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
                  className="w-full h-[450px] md:h-[600px] object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
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

        {/* Category Section (High-End Editorial Split) */}
        <section className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Men */}
              <motion.div
                id="men"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden w-full h-[500px] md:h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                  <img
                    src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop"
                    alt="Menswear"
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3 
                      className="text-[20vw] md:text-[10vw] font-light text-white/20 uppercase tracking-[0.2em] transition-all duration-700 group-hover:text-white/40 group-hover:scale-110"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      MEN
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-0.5 px-6 pb-12">
                  <h3
                    className="text-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    Menswear
                  </h3>
                  <span className="text-black/60 text-xs tracking-[0.4em] uppercase font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Shop Collection
                  </span>
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
                <div className="relative overflow-hidden w-full h-[500px] md:h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
                    alt="Womenswear"
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3 
                      className="text-[20vw] md:text-[10vw] font-light text-white/20 uppercase tracking-[0.2em] transition-all duration-700 group-hover:text-white/40 group-hover:scale-110"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      WOMEN
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-0.5 px-6 pb-12">
                  <h3
                    className="text-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    Womenswear
                  </h3>
                  <span className="text-black/60 text-xs tracking-[0.4em] uppercase font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Shop Collection
                  </span>
                </div>
              </motion.div>

          </div>
        </section>

        {/* NOT FOR EVERYONE — Graphical Editorial Statement */}
        <section className="py-64 px-6 lg:px-12 bg-white relative overflow-hidden border-y border-black/5">
          
          {/* Layer 1: Multi-Directional Marquees */}
          <div className="absolute inset-0 flex flex-col justify-around py-20 opacity-[0.015] pointer-events-none select-none">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-30%" }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[20vw] md:text-[15vw] font-bold uppercase tracking-tighter flex"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span>VAULT 26 &nbsp; ARCHIVE &nbsp; VAULT 26 &nbsp; ARCHIVE &nbsp;</span>
              <span>VAULT 26 &nbsp; ARCHIVE &nbsp; VAULT 26 &nbsp; ARCHIVE &nbsp;</span>
            </motion.div>
            <motion.div 
              initial={{ x: "-30%" }}
              animate={{ x: 0 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[20vw] md:text-[15vw] font-bold italic uppercase tracking-tighter flex opacity-20"
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#B11226' }}
            >
              <span>NOT FOR EVERYONE &nbsp; NOT FOR EVERYONE &nbsp;</span>
              <span>NOT FOR EVERYONE &nbsp; NOT FOR EVERYONE &nbsp;</span>
            </motion.div>
          </div>

          {/* Layer 2: Massive '26' Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
            <h4 
              className="text-[60vw] leading-none select-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, WebkitTextStroke: '1px #B11226', color: 'transparent' }}
            >
              26
            </h4>
          </div>

          {/* Layer 3: Technical Brutalist Accents */}
          <div className="absolute top-12 left-12 text-[10px] tracking-[0.4em] uppercase text-black/30 font-medium vertical-text hidden lg:block" style={{ fontFamily: 'Jost, sans-serif' }}>
            REF: VAULT_ARCHIVE_2026 // 51.5074° N, 0.1278° W
          </div>
          <div className="absolute bottom-12 right-12 text-[10px] tracking-[0.4em] uppercase text-black/30 font-medium text-right hidden lg:block" style={{ fontFamily: 'Jost, sans-serif' }}>
            LIMITED RELEASE // NOT FOR REPRODUCTION
          </div>

          {/* Layer 4: Red Artistic Arc */}
          <div className="max-w-[1600px] mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] lg:w-[800px] pointer-events-none"
            >
              <img 
                src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png" 
                alt="" 
                className="w-full h-auto object-contain opacity-10 md:opacity-20 brightness-0" 
              />
            </motion.div>

              <div className="overflow-hidden mb-6">
                <motion.h2
                  initial={{ y: '100%', opacity: 0 }}
                  whileInView={{ y: '0%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-none text-black/80 tracking-tighter"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  NOT FOR <span className="italic text-[#B11226]">EVERYONE</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ scaleX: 0, originX: 0.5 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 h-[1px] bg-[#B11226]/40 mx-auto mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-base max-w-2xl mx-auto text-black/40 tracking-[0.25em] uppercase font-medium"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                CURATED FOR THE ARCHIVE. DEFINED BY THE BOLD.
              </motion.p>
            </div>
          </section>

        {/* Testimonials Section — Editorial Horizontal Carousel */}
        <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden border-b border-black/5">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl tracking-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Voices of the <span className="italic">Archive</span>
                </motion.h2>
              </div>
              <div className="hidden md:block text-[9px] tracking-[0.4em] uppercase text-black/30 font-medium">
                Scroll to Explore →
              </div>
            </div>

            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -600 }}
              className="flex gap-16 cursor-grab active:cursor-grabbing"
            >
              {[
                {
                  quote: "Vault 26 isn't just a brand; it's a curated experience. The quality of the Archive releases is unparalleled.",
                  author: "Julian R.",
                  role: "Fashion Consultant"
                },
                {
                  quote: "The intersection of high-fashion tailoring and street authenticity is hard to find. Vault 26 executes it flawlessly.",
                  author: "Elena M.",
                  role: "Creative Director"
                },
                {
                  quote: "Every drop tells a story. I don't just wear the pieces; I carry the confidence of the Vault.",
                  author: "Marcus T.",
                  role: "Stylist"
                },
                {
                  quote: "A rare blend of brutalist aesthetic and premium comfort. Truly understands the modern silhouette.",
                  author: "Sophia L.",
                  role: "Visual Artist"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] md:min-w-[450px] flex flex-col"
                >
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#B11226] mb-8 font-medium" style={{ fontFamily: 'Jost, sans-serif' }}>
                    0{index + 1} // Archive Review
                  </span>
                  <p 
                    className="text-xl md:text-2xl leading-relaxed text-black mb-10 select-none"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                  >
                    "{item.quote}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-[12px] tracking-[0.2em] uppercase font-bold text-black" style={{ fontFamily: 'Jost, sans-serif' }}>
                      {item.author}
                    </h4>
                    <span className="text-[10px] tracking-[0.1em] text-black/40 uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>
                      {item.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Carousel Progress Line */}
            <div className="w-full h-[1px] bg-black/5 mt-16 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#B11226] w-1/4"
                initial={{ x: 0 }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
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

        {/* Redesigned Join the Vault Section */}
        <section className="py-24 md:py-48 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center opacity-[0.05] pointer-events-none select-none">
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

          {/* Decorative Technical Accents */}
          <div className="absolute top-12 left-12 text-[9px] tracking-[0.4em] uppercase text-black/20 font-medium hidden md:block" style={{ fontFamily: 'Jost, sans-serif' }}>
            SUB_PORTAL: V26_COMMUNITY // EST. 2026
          </div>
          <div className="absolute top-12 right-12 text-[9px] tracking-[0.4em] uppercase text-black/20 font-medium hidden md:block" style={{ fontFamily: 'Jost, sans-serif' }}>
            LAT: 51.5074° N // LNG: 0.1278° W
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.5em] uppercase text-[#B11226]/40 font-bold hidden md:block">
            AUTHENTIC ARCHIVE ACCESS
          </div>

          <div className="max-w-[1600px] mx-auto text-center relative z-10">
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[12vw] md:text-[6vw] lg:text-[5vw] leading-tight text-black uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
              >
                JOIN THE
              </motion.span>
            </div>
            <div className="overflow-hidden mb-16">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none italic text-[#B11226] -mt-4"
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
                    className="w-full bg-transparent border-b border-black/20 py-4 text-[12px] tracking-[0.3em] font-light outline-none focus:border-[#B11226] transition-colors placeholder:text-black/60"
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
                <div className="mb-6 h-24">
                  <img
                    src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png"
                    alt="VAULT 26"
                    className="h-full w-auto object-contain brightness-0"
                  />
                </div>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed" style={{ fontFamily: 'Jost, sans-serif' }}>
                  WHERE HIGH FASHION MEETS STREET AUTHENTICITY. DEFYING CONVENTION SINCE 2026.
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

            {/* Massive Footer Brand Anchor */}
            <div className="border-t border-black/10 mt-20 pt-24 flex flex-col items-center">

              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-[10px] text-gray-400 tracking-[0.3em] uppercase font-medium" style={{ fontFamily: 'Jost, sans-serif' }}>
                <p>© 2026 VAULT 26. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                  <span className="cursor-pointer hover:text-black transition-colors">United Kingdom (GBP £)</span>
                  <span className="cursor-pointer hover:text-black transition-colors">Privacy Policy</span>
                  <span className="cursor-pointer hover:text-black transition-colors">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

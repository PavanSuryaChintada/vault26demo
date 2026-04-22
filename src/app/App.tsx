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
<<<<<<< HEAD
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
          <div className="px-6 lg:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="#" className="flex items-center">
                <img src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png" alt="Vault 26" className="h-12 md:h-16 w-auto object-contain" />
              </a>
              
              <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                {['New Arrivals', 'Men', 'Women', 'Collections', 'About'].map((item, i) => (
                  <motion.a key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} href="#" className="hover:text-white/70 transition-colors">
                    {item}
                  </motion.a>
=======
        <div className="px-8 lg:px-14 py-7 flex items-center justify-between">

          {/* ── Brand ── */}
          <a href="#" className="flex items-baseline gap-1 group">
            <span
              className={`text-[28px] lg:text-[32px] font-light tracking-[0.08em] leading-none transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VAULT
            </span>
            <span
              className="text-[28px] lg:text-[32px] font-light tracking-[0.08em] text-[#B11226] leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              &thinsp;26
            </span>
          </a>

          {/* ── Center nav links ── */}
          <div
            className="hidden lg:flex items-center gap-10"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            {[
              { label: 'New Drops', href: '#new-drops' },
              { label: 'Men',       href: '#men' },
              { label: 'Women',     href: '#women' },
              { label: 'Lookbook',  href: '#lookbook' },
              { label: 'About',     href: '#about' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative text-[11px] font-light tracking-[0.28em] uppercase transition-colors duration-300 group py-1 ${scrolled ? 'text-black/60 hover:text-black' : 'text-white/80 hover:text-white'}`}
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
              <Search className="w-[17px] h-[17px]" strokeWidth={1.5} />
              <span
                className="text-[10px] tracking-[0.28em] uppercase font-light"
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
              <ShoppingBag className="w-[17px] h-[17px]" strokeWidth={1.5} />
              <span
                className="hidden md:inline text-[10px] tracking-[0.28em] uppercase font-light"
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
                  { label: 'Men',       href: '#men' },
                  { label: 'Women',     href: '#women' },
                  { label: 'Lookbook',  href: '#lookbook' },
                  { label: 'About',     href: '#about' },
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
>>>>>>> e35c84b839302206a243d5afb36bcf5b49d83d71
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

<<<<<<< HEAD
          <div className="relative h-full flex flex-col items-center justify-center px-6 pt-16">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center z-10 max-w-4xl">
              <div className="overflow-hidden mb-4">
                <motion.h1 variants={textReveal} className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.9] text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  ELEVATED
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1 variants={textReveal} className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.9] text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  STREETWEAR
                </motion.h1>
              </div>
              
              <div className="overflow-hidden mb-12">
                <motion.p variants={textReveal} className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium quality materials. Uncompromising design for those who dare to stand out.
                </motion.p>
              </div>

              <motion.button 
                variants={fadeUp}
                whileHover={{ scale: 1.02, backgroundColor: '#C1121F', color: '#ffffff', borderColor: '#C1121F' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white text-black px-12 py-4 text-sm tracking-widest font-semibold border border-transparent" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                SHOP NOW
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Typography Break Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center">
              <div className="overflow-hidden py-2">
                <motion.h2
                  variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-[14vw] md:text-[8vw] lg:text-[8.5vw] leading-[0.85] tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  ATTITUDE
                </motion.h2>
              </div>
              <div className="overflow-hidden py-2">
                <motion.h2
                  variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-[14vw] md:text-[8vw] lg:text-[8.5vw] leading-[0.85] tracking-tight text-gray-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  CONFIDENCE
                </motion.h2>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Split Section (Brand Story) */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal}
                className="relative overflow-hidden group h-[600px] lg:h-[800px]"
              >
                <motion.img
                  style={{ y: subtleY }}
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1080"
                  alt="Editorial"
                  className="w-full h-[110%] object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
                />
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <div className="overflow-hidden">
                  <motion.div variants={textReveal} className="inline-block">
                    <span className="text-[#C1121F] text-8xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>26</span>
                  </motion.div>
                </div>
                
                <div className="overflow-hidden">
                  <motion.h3 variants={textReveal} className="text-5xl lg:text-7xl leading-[0.95] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    The Intersection<br />of Luxury & Culture
                  </motion.h3>
                </div>
                
                <motion.div variants={fadeUp} className="w-16 h-[2px] bg-[#C1121F]"></motion.div>
                
                <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed text-gray-600 font-light max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Vault 26 was born from the intersection of high fashion and authentic street culture. We believe in clothing as a canvas for individuality, crafting pieces that are as defiant as they are refined.
                </motion.p>
                
                <motion.div variants={fadeUp}>
                  <motion.button 
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}
                    className="border border-black px-10 py-4 text-sm tracking-widest flex items-center gap-4 hover:bg-black hover:text-white transition-colors duration-300 group" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    READ OUR STORY 
                    <motion.div transition={{ duration: 0.3 }} className="group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-24 px-6 lg:px-12 bg-[#fafafa]">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="overflow-hidden">
                <motion.h2
                  variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-5xl lg:text-7xl tracking-tight leading-[0.9]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Featured<br />Collection
                </motion.h2>
              </div>
              <motion.a 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                href="#" className="flex items-center gap-3 text-xs tracking-widest font-semibold hover:text-[#C1121F] transition-colors pb-2 group uppercase" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                VIEW ALL 
                <motion.div transition={{ duration: 0.3 }} className="group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { img: 'https://images.unsplash.com/photo-1635650804263-1a1941e14df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Heavyweight Hoodie', price: '$120' },
                { img: 'https://images.unsplash.com/photo-1576790807856-b9205fb5703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Tactical Cargo Pants', price: '$145' },
                { img: 'https://images.unsplash.com/photo-1652110959665-81bdbb478489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Distressed Graphic Tee', price: '$65' },
                { img: 'https://images.unsplash.com/photo-1560257437-628e0fcabc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Nylon Bomber Jacket', price: '$220' },
              ].map((product, index) => (
                <motion.div key={index} variants={fadeUp} className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden mb-4 bg-gray-100 flex-1 aspect-[3/4]">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <motion.button whileTap={{ scale: 0.97 }} className="w-full bg-white text-black py-4 text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                        QUICK ADD
                      </motion.button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-4 mt-2">
                    <h4 className="text-sm font-medium tracking-wide leading-snug text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>{product.name}</h4>
                    <p className="text-sm font-light text-gray-500 shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal}
              className="relative h-[500px] lg:h-[700px] overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1564628185238-bc6921b4ddb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8c3RyZWV0d2VhciUyMGZhc2hpb24lMjBtb2RlbCUyMHVyYmFufGVufDF8fHx8MTc3Njc1NzkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-6xl lg:text-8xl tracking-tight drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  MEN
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal}
              className="relative h-[500px] lg:h-[700px] overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1554235748-40ff2b5d9277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-6xl lg:text-8xl tracking-tight drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  WOMEN
                </h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Limited Drop / Urgency Section */}
        <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] text-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 space-y-8">
                <motion.div variants={fadeUp} className="inline-block px-3 py-1.5 bg-[#C1121F] text-[10px] font-bold tracking-widest uppercase">
                  LIMITED DROP
                </motion.div>
                
                <div className="overflow-hidden">
                  <motion.h2 variants={textReveal} className="text-5xl md:text-7xl leading-[0.95] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    The Obsidian<br />Capsule
                  </motion.h2>
                </div>

                <motion.p variants={fadeUp} className="text-gray-400 text-lg font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Only 100 pieces crafted worldwide. Premium Japanese denim meets modern utility.
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4 pb-2 border-b border-white/20 inline-block">
                  <p className="text-xl font-light tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Releasing in: <span className="font-semibold text-white">24:00:00</span>
                  </p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.3 }}
                    className="border border-white/50 px-10 py-4 text-xs font-semibold tracking-widest uppercase mt-4 transition-colors" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    GET NOTIFIED
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
                  'https://images.unsplash.com/photo-1635650805000-f31dee3133bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
                ].map((img, i) => (
                  <motion.div key={i} variants={imageReveal} className="relative h-[400px] lg:h-[600px] overflow-hidden group">
                    <img src={img} className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] opacity-80 group-hover:opacity-100" />
                    <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-3 py-1.5 tracking-widest uppercase shadow-md">
                      LOW STOCK
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Graphic Statement Section */}
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[300px] md:h-[400px] pointer-events-none z-0">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                <motion.path 
                  d="M 20 120 Q 80 20, 150 120 T 280 120" 
                  stroke="#F9E5E5" 
                  strokeWidth="50" 
                  fill="none" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: premiumEase }}
                />
              </svg>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 flex flex-col items-center">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 1.05, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: premiumEase } }
                }} 
                className="mb-12"
              >
                <img src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png" alt="Vault 26 Logo" className="h-24 md:h-32 w-auto object-contain" />
              </motion.div>

              <div className="overflow-hidden mb-8">
                <motion.h2 variants={textReveal} className="text-[12vw] lg:text-[9vw] leading-[0.9] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  NOT FOR<br />EVERYONE
                </motion.h2>
              </div>
              
              <motion.div 
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: { scaleX: 1, opacity: 1, transition: { duration: 1.5, ease: premiumEase } }
                }} 
                className="mb-10 origin-center"
              >
                <div className="w-32 h-[3px] bg-[#C1121F] mx-auto"></div>
              </motion.div>
              
              <div className="overflow-hidden">
                <motion.p variants={textReveal} className="text-sm md:text-base max-w-2xl mx-auto text-gray-500 tracking-[0.3em] uppercase font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  For those who dare to stand out
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lookbook Style Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="overflow-hidden mb-12">
=======
      {/* ATTITUDE / CONFIDENCE — clip-mask reveal from bottom */}
      <section id="about" className="py-28 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div className="overflow-hidden">
>>>>>>> e35c84b839302206a243d5afb36bcf5b49d83d71
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
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
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

<<<<<<< HEAD
        {/* Footer */}
        <footer className="bg-[#050505] text-white py-16 px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
              <div className="lg:col-span-2">
                <img src="https://res.cloudinary.com/dsqeawg67/image/upload/v1776861404/WhatsApp_Image_2026-04-21_at_23.40.39-removebg-preview_1_ztvyke.png" alt="Vault 26" className="h-16 md:h-20 w-auto object-contain mb-6" />
                <p className="text-xs text-gray-400 max-w-sm mb-8 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium streetwear crafted with uncompromising attention to detail. Defying convention since 2026.
                </p>
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Instagram className="w-3 h-3" /></motion.a>
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Twitter className="w-3 h-3" /></motion.a>
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Youtube className="w-3 h-3" /></motion.a>
=======
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden w-full h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                <img
                  src="https://images.unsplash.com/photo-1564628185238-bc6921b4ddb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Menswear"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
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
>>>>>>> e35c84b839302206a243d5afb36bcf5b49d83d71
                </div>
              </div>
            </motion.div>

            {/* Women */}
            <motion.div
              id="women"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden w-full h-[600px] lg:h-[850px] bg-[#f5f5f5]">
                <img
                  src="https://images.unsplash.com/photo-1554235748-40ff2b5d9277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Womenswear"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
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
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-8 pointer-events-none"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M 10 100 Q 50 10, 100 50 T 190 100"
                stroke="#B11226"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.08 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.2, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-x-6 mb-2 overflow-hidden">
            {'NOT FOR'.split('').map((char, i) => (
              <div key={i} className="overflow-hidden" style={{ display: 'inline-block' }}>
                <motion.span
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.0, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight relative z-10"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
              'https://images.unsplash.com/photo-1650464595868-fd12e3047d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1637536701374-073adb2ee745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1654777673904-d2bbdb3447a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1652281846249-fd131a6cca36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
                  className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-36 px-6 lg:px-12 bg-black text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-center">
          <div className="overflow-hidden mb-3">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Join the
            </motion.span>
          </div>
          <div className="overflow-hidden mb-14">
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none italic text-[#B11226]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Vault
            </motion.span>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="border border-white/40 text-white px-16 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-400"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/10 py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4
                className="mb-3 text-xl font-light tracking-[0.12em]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                VAULT <span className="text-[#B11226]">26</span>
              </h4>
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

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, Instagram, Twitter, Youtube, Search } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import Preloader from './components/Preloader';

// Premium Animation Constants
const premiumEase = [0.22, 1, 0.36, 1];
const premiumTransition = { duration: 0.8, ease: premiumEase };

const textReveal = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: premiumTransition }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: premiumTransition }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 1.2, ease: premiumEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const subtleY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <div className="w-full bg-white text-black overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: premiumEase }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
          <div className="px-6 lg:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="text-3xl tracking-tighter text-[#C1121F]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                VAULT 26
              </div>
              
              <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                {['New Arrivals', 'Men', 'Women', 'Collections', 'About'].map((item, i) => (
                  <motion.a key={i} whileHover={{ y: -2 }} transition={{ duration: 0.2 }} href="#" className="hover:text-white/70 transition-colors">
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-[11px] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
                <Search className="w-4 h-4" />
                <span>Search Products</span>
              </motion.div>
              <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
                <span>🇬🇧 United Kingdom</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                <span>Bag (0)</span>
              </motion.div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden bg-black">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
              alt="Hero"
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
          </motion.div>

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
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
              <div className="overflow-hidden mb-8">
                <motion.h2 variants={textReveal} className="text-[12vw] lg:text-[9vw] leading-[0.9] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  NOT FOR<br />EVERYONE
                </motion.h2>
              </div>
              <motion.div variants={fadeUp} className="inline-block mb-10">
                <div className="w-32 h-[4px] bg-[#C1121F] mx-auto"></div>
              </motion.div>
              <div className="overflow-hidden">
                <motion.p variants={textReveal} className="text-xl md:text-2xl max-w-2xl mx-auto text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
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
              <motion.h2
                variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-6xl lg:text-8xl tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Lookbook
              </motion.h2>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1635650805000-f31dee3133bc?auto=format&fit=crop&q=80&w=1080',
              ].map((img, index) => (
                <motion.div key={index} variants={imageReveal} className="relative overflow-hidden group cursor-pointer aspect-[3/4] md:aspect-auto md:h-[600px]">
                  <img src={img} alt={`Lookbook ${index + 1}`} className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.02] grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-24 px-6 lg:px-12 bg-[#fafafa]">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <div className="overflow-hidden mb-16">
                <motion.h2 
                  variants={textReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-4xl lg:text-5xl tracking-tight" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  The Word on the Street
                </motion.h2>
              </div>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left">
                <motion.div variants={fadeUp} className="space-y-6">
                  <div className="flex text-[#C1121F] text-lg">★★★★★</div>
                  <p className="text-lg md:text-xl italic leading-relaxed text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                    "The quality is unmatched. These pieces feel like they should cost three times as much. Vault 26 has completely taken over my wardrobe."
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 pt-2" style={{ fontFamily: 'Inter, sans-serif' }}>— Marcus T., New York</p>
                </motion.div>
                <motion.div variants={fadeUp} className="space-y-6">
                  <div className="flex text-[#C1121F] text-lg">★★★★★</div>
                  <p className="text-lg md:text-xl italic leading-relaxed text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                    "Finally a brand that understands modern silhouettes. The cut on the heavyweight hoodie is absolute perfection."
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 pt-2" style={{ fontFamily: 'Inter, sans-serif' }}>— Sarah J., London</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="mt-20">
            <div className="flex justify-between items-end max-w-[1600px] mx-auto mb-6 px-4">
              <h3 className="text-2xl lg:text-3xl tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>@VAULT26</h3>
              <motion.a 
                whileHover={{ y: -2 }} href="#" 
                className="text-[10px] font-semibold tracking-widest hover:text-[#C1121F] transition-colors uppercase border-b border-black/20 hover:border-black pb-1" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Follow Us
              </motion.a>
            </div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-5 gap-1 max-w-[1600px] mx-auto">
              {[
                'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1635650805000-f31dee3133bc?auto=format&fit=crop&q=80&w=1080',
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1080'
              ].map((img, i) => (
                <motion.a key={i} variants={imageReveal} href="#" className="relative aspect-square overflow-hidden group block bg-gray-100">
                  <img src={img} className="w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-[1.03] grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white scale-90 group-hover:scale-100 transition-transform duration-500 ease-out" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 lg:px-12 bg-white text-center border-t border-black/5">
          <div className="max-w-2xl mx-auto">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="overflow-hidden mb-6">
                <motion.h2 variants={textReveal} className="text-4xl md:text-5xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Join the Inner Circle
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-500 mb-12 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get early access to limited drops, exclusive events, and editorial content.
              </motion.p>
              <motion.form variants={fadeUp} className="flex w-full max-w-md mx-auto border-b border-black/30 hover:border-black transition-colors duration-300 pb-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" placeholder="Enter your email" 
                  className="flex-1 bg-transparent border-none outline-none text-sm md:text-base px-2 placeholder:text-gray-400 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="font-bold tracking-widest text-[10px] hover:text-[#C1121F] transition-colors uppercase px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  SUBSCRIBE
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#050505] text-white py-16 px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h4 className="mb-6 text-3xl tracking-widest text-[#C1121F]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>VAULT 26</h4>
                <p className="text-xs text-gray-400 max-w-sm mb-8 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium streetwear crafted with uncompromising attention to detail. Defying convention since 2026.
                </p>
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Instagram className="w-3 h-3" /></motion.a>
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Twitter className="w-3 h-3" /></motion.a>
                  <motion.a whileHover={{ y: -3, backgroundColor: '#ffffff', color: '#000000' }} transition={{ duration: 0.2 }} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-full transition-colors"><Youtube className="w-3 h-3" /></motion.a>
                </div>
              </div>
              <div>
                <h4 className="mb-6 text-[10px] tracking-widest font-bold uppercase text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Shop</h4>
                <ul className="space-y-4 text-xs text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">New Arrivals</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Best Sellers</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Menswear</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Womenswear</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Accessories</motion.a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-[10px] tracking-widest font-bold uppercase text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Help</h4>
                <ul className="space-y-4 text-xs text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">FAQ</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Shipping & Returns</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Order Tracking</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Contact Us</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Size Guide</motion.a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-[10px] tracking-widest font-bold uppercase text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Legal</h4>
                <ul className="space-y-4 text-xs text-gray-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Privacy Policy</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Terms of Service</motion.a></li>
                  <li><motion.a whileHover={{ x: 3, color: '#ffffff' }} href="#" className="inline-block transition-colors">Cookie Policy</motion.a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-500 tracking-widest font-semibold uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>© 2026 VAULT 26. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-6">
                <motion.span whileHover={{ color: '#ffffff' }} className="cursor-pointer transition-colors">USD ($)</motion.span>
                <motion.span whileHover={{ color: '#ffffff' }} className="cursor-pointer transition-colors">ENGLISH</motion.span>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

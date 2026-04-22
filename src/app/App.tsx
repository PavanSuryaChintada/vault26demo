import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full bg-white text-black overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
        <div className="px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-3xl tracking-tighter text-[#C1121F]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              VAULT 26
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#" className="hover:text-white/70 transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-white/70 transition-colors">Men</a>
              <a href="#" className="hover:text-white/70 transition-colors">Women</a>
              <a href="#" className="hover:text-white/70 transition-colors">Collections</a>
              <a href="#" className="hover:text-white/70 transition-colors">About</a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
              <Search className="w-4 h-4" />
              <span>Search Products</span>
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
              <span>🇬🇧 United Kingdom</span>
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-white/70 transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span>Bag (0)</span>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 mt-8 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center z-10 max-w-4xl"
          >
            <h1
              className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-[0.9] mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              ELEVATED<br />STREETWEAR
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Premium quality materials. Uncompromising design for those who dare to stand out.
            </p>
            <button className="bg-white text-black px-12 py-4 text-sm tracking-wider hover:bg-[#C1121F] hover:text-white transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              SHOP NOW
            </button>
          </motion.div>
        </div>
      </section>

      {/* Typography Break Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                ATTITUDE
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight text-right"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                CONFIDENCE
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Split Section (Brand Story) */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1637536701306-3214e9cec64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Editorial"
                className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="text-[#C1121F] text-8xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>26</span>
              </div>
              <h3
                className="text-5xl lg:text-7xl leading-[0.9]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Intersection of Luxury & Culture
              </h3>
              <div className="w-20 h-1 bg-[#C1121F]"></div>
              <p className="text-xl leading-relaxed text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
                Vault 26 was born from the intersection of high fashion and authentic street culture. We believe in clothing as a canvas for individuality, crafting pieces that are as defiant as they are refined.
              </p>
              <button className="border-2 border-black px-10 py-4 text-sm tracking-wider flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                READ OUR STORY <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl lg:text-8xl tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Featured<br />Collection
            </motion.h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm tracking-widest hover:text-[#C1121F] transition-colors pb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1635650804263-1a1941e14df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Oversized Heavyweight Hoodie', price: '$120' },
              { img: 'https://images.unsplash.com/photo-1576790807856-b9205fb5703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Tactical Cargo Pants', price: '$145' },
              { img: 'https://images.unsplash.com/photo-1652110959665-81bdbb478489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Distressed Graphic Tee', price: '$65' },
              { img: 'https://images.unsplash.com/photo-1560257437-628e0fcabc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080', name: 'Nylon Bomber Jacket', price: '$220' },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden mb-6 bg-gray-100 flex-1">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      QUICK ADD
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-medium max-w-[70%]" style={{ fontFamily: 'Inter, sans-serif' }}>{product.name}</h4>
                  <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1564628185238-bc6921b4ddb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8c3RyZWV0d2VhciUyMGZhc2hpb24lMjBtb2RlbCUyMHVyYmFufGVufDF8fHx8MTc3Njc1NzkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3
                className="text-white text-7xl lg:text-8xl tracking-tight mix-blend-difference"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                MEN
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] overflow-hidden group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1554235748-40ff2b5d9277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3
                className="text-white text-7xl lg:text-8xl tracking-tight mix-blend-difference"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                WOMEN
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Drop / Urgency Section */}
      <section className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#C1121F] text-xs font-bold tracking-widest mb-4">
                LIMITED DROP
              </div>
              <h2 className="text-5xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Obsidian<br />Capsule
              </h2>
              <p className="text-gray-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Only 100 pieces crafted worldwide. Premium Japanese denim meets modern utility.
              </p>
              <p className="text-xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Releasing in: <span className="font-bold">24:00:00</span>
              </p>
              <button className="border-2 border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                GET NOTIFIED
              </button>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx1cmJhbiUyMHN0cmVldCUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzc2Nzk2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1635650805000-f31dee3133bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzc2NzU3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080'
              ].map((img, i) => (
                <div key={i} className="relative h-[600px] overflow-hidden group">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 tracking-wider">
                    LOW STOCK
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Statement Section */}
      <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M 10 100 Q 50 10, 100 50 T 190 100" stroke="#C1121F" strokeWidth="40" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight mb-6 relative z-10"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              NOT FOR<br />EVERYONE
            </h2>
            <div className="inline-block">
              <div className="w-32 h-2 bg-[#C1121F] mx-auto"></div>
            </div>
            <p className="text-xl mt-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              For those who dare to stand out
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lookbook Style Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl lg:text-9xl mb-16 tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Lookbook
          </motion.h2>

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

      {/* Social Proof / Testimonials */}
      <section className="py-32 px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>The Word on the Street</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <div className="flex text-[#C1121F] text-xl">
                  ★★★★★
                </div>
                <p className="text-xl italic leading-relaxed text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "The quality is unmatched. These pieces feel like they should cost three times as much. Vault 26 has completely taken over my wardrobe."
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-black pt-2" style={{ fontFamily: 'Inter, sans-serif' }}>— Marcus T., New York</p>
              </div>
              <div className="space-y-4">
                <div className="flex text-[#C1121F] text-xl">
                  ★★★★★
                </div>
                <p className="text-xl italic leading-relaxed text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "Finally a brand that understands modern silhouettes. The cut on the heavyweight hoodie is absolute perfection."
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-black pt-2" style={{ fontFamily: 'Inter, sans-serif' }}>— Sarah J., London</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="mt-16">
          <div className="flex justify-between items-end max-w-[1600px] mx-auto mb-8">
            <h3 className="text-3xl tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>@VAULT26</h3>
            <a href="#" className="text-sm tracking-widest hover:text-[#C1121F] transition-colors uppercase border-b border-black pb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Follow Us</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1 max-w-[1600px] mx-auto">
            {[
              'https://images.unsplash.com/photo-1650464595868-fd12e3047d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1637536701374-073adb2ee745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1654777673904-d2bbdb3447a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1652281846249-fd131a6cca36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1637536701306-3214e9cec64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzY3OTY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
            ].map((img, i) => (
              <a href="#" key={i} className="relative aspect-square overflow-hidden group block">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 lg:px-12 bg-white text-center border-t border-black/10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join the Inner Circle
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get early access to limited drops, exclusive events, and editorial content.
            </p>
            <form className="flex w-full max-w-md mx-auto border-b-2 border-black pb-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-none outline-none text-lg px-2 placeholder:text-gray-400 font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button type="submit" className="font-bold tracking-widest text-sm hover:text-[#C1121F] transition-colors uppercase px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                SUBSCRIBE
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h4 className="mb-6 text-3xl tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>VAULT 26</h4>
              <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Premium streetwear crafted with uncompromising attention to detail. Defying convention since 2026.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h4 className="mb-6 text-xs tracking-widest font-bold uppercase text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Shop</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Menswear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Womenswear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xs tracking-widest font-bold uppercase text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Help</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xs tracking-widest font-bold uppercase text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Legal</h4>
              <ul className="space-y-4 text-sm text-gray-300 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-wider font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>© 2026 VAULT 26. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">USD ($)</span>
              <span className="hover:text-white cursor-pointer transition-colors">ENGLISH</span>
            </div>
          </div>
        </div>
      </footer>
      </motion.div>
    </div>
  );
}

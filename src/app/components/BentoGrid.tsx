import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// ── Product Data ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1637536701306-3214e9cec64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Editorial Noir',
    price: '$280',
    no: '01',
  },
  {
    img: 'https://images.unsplash.com/photo-1635650804263-1a1941e14df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Oversized Silhouette',
    price: '$120',
    no: '02',
  },
  {
    img: 'https://images.unsplash.com/photo-1652110959665-81bdbb478489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Utility Form',
    price: '$95',
    no: '03',
  },
  {
    img: 'https://images.unsplash.com/photo-1560257437-628e0fcabc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Vault Bomber',
    price: '$185',
    no: '04',
  },
  {
    img: 'https://images.unsplash.com/photo-1576790807856-b9205fb5703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Street Canvas',
    price: '$65',
    no: '05',
  },
  {
    img: 'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Leather Archive',
    price: '$320',
    no: '06',
  },
];

// ── Single editorial card ─────────────────────────────────────────────────────
function EditorialCard({
  product,
  index,
  className = '',
  imgClass = 'h-[360px] md:h-[480px]',
  featured = false,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
  className?: string;
  imgClass?: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer ${className}`}
    >
      {/* Image container — sharp edges, no rounding */}
      <div className={`relative overflow-hidden ${imgClass}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
        />

        {/* Feather-thin red top line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#B11226] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {featured && (
          <div className="absolute bottom-8 left-8 right-8">
            <p
              className="text-[10px] tracking-[0.3em] text-white/60 uppercase mb-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Spring / Summer 2026
            </p>
            <h3
              className="text-4xl lg:text-5xl text-white font-normal leading-tight mb-5"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              New<br />Collection
            </h3>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#B11226]" />
              <button
                className="text-[10px] tracking-[0.25em] uppercase text-white border border-white/40 hover:border-[#B11226] hover:text-[#B11226] px-6 py-2.5 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Dark gradient only on featured */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        )}
      </div>

      {/* Below-card meta — tight, editorial */}
      {!featured && (
        <div className="mt-4 border-t border-black/10 pt-4 flex items-start justify-between">
          <div>
            <span
              className="text-[10px] tracking-[0.25em] text-black/30 uppercase block mb-1"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {product.no}
            </span>
            <h4
              className="text-sm tracking-wide text-black font-normal group-hover:text-[#B11226] transition-colors duration-300"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {product.name}
            </h4>
          </div>
          <span
            className="text-[11px] tracking-widest text-black/50 mt-0.5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.price}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for ghost typography
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 lg:px-16 bg-white overflow-hidden"
    >
      {/* ── Ghost typography — ultra-faint background ─────────────────── */}
      <motion.div
        style={{ y: ghostY }}
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="absolute -top-4 right-0 text-[clamp(100px,20vw,300px)] font-bold leading-none text-black/[0.035] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          DROPS
        </span>
        <span
          className="absolute bottom-0 left-0 text-[clamp(80px,14vw,200px)] font-bold leading-none text-[#B11226]/[0.04] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          VAULT
        </span>
      </motion.div>

      <div className="relative max-w-[1600px] mx-auto">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-16 pb-6 border-b border-black/10"
        >
          <div className="flex items-end gap-8">
            <h2
              className="text-[56px] lg:text-[80px] leading-none tracking-tight text-black"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Latest Drops
            </h2>
            <span
              className="text-[10px] tracking-[0.3em] text-black/30 uppercase pb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Spring 2026
            </span>
          </div>
          <a
            href="#"
            className="text-[10px] tracking-[0.25em] uppercase text-black/40 hover:text-[#B11226] transition-colors pb-1 border-b border-black/20 hover:border-[#B11226]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View All
          </a>
        </motion.div>

        {/* ── EDITORIAL BENTO GRID ────────────────────────────────────────
          Desktop 12-col:
          Row 1-2: [Featured 5col tall] │ [02 3.5col] │ [03 3.5col]
          Row 2:                         │ [04 3.5col] │ [05 3.5col]
          Row 3: [05 4col] ─────────────── [06 4col] ─── [small 4col]
        ─────────────────────────────────────────────────────────────────── */}

        {/* ── TOP ZONE ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-5 mb-5">
          {/* Featured — col 1-5, row spans 2 */}
          <div className="col-span-12 md:col-span-5 md:row-span-2">
            <EditorialCard
              product={PRODUCTS[0]}
              index={0}
              featured
              imgClass="h-[500px] md:h-[700px] lg:h-[780px]"
            />
          </div>

          {/* Top-right column — 2 stacked cards */}
          <div className="col-span-6 md:col-span-4">
            <EditorialCard
              product={PRODUCTS[1]}
              index={1}
              imgClass="h-[280px] md:h-[360px] lg:h-[370px]"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <EditorialCard
              product={PRODUCTS[2]}
              index={2}
              imgClass="h-[280px] md:h-[360px] lg:h-[370px]"
            />
          </div>

          {/* Bottom-right — 2 more stacked */}
          <div className="col-span-6 md:col-span-4">
            <EditorialCard
              product={PRODUCTS[3]}
              index={3}
              imgClass="h-[260px] md:h-[330px] lg:h-[340px]"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <EditorialCard
              product={PRODUCTS[4]}
              index={4}
              imgClass="h-[260px] md:h-[330px] lg:h-[340px]"
            />
          </div>
        </div>

        {/* ── BOTTOM ROW — 3 landscape cards ──────────────────────────── */}
        <div className="grid grid-cols-12 gap-5">
          {/* Wide landscape card */}
          <div className="col-span-12 md:col-span-6">
            <EditorialCard
              product={PRODUCTS[5]}
              index={5}
              imgClass="h-[280px] md:h-[320px]"
            />
          </div>

          {/* Two portrait cards */}
          <div className="col-span-6 md:col-span-3">
            <EditorialCard
              product={PRODUCTS[0]}
              index={6}
              imgClass="h-[280px] md:h-[320px]"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <EditorialCard
              product={PRODUCTS[2]}
              index={7}
              imgClass="h-[280px] md:h-[320px]"
            />
          </div>
        </div>

        {/* ── Footer rule + issue info ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 pt-6 border-t border-black/10 flex items-center justify-between"
        >
          <p
            className="text-[10px] tracking-[0.3em] text-black/25 uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Vault 26 — Issue No. 01
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#B11226]" />
            <p
              className="text-[10px] tracking-[0.3em] text-black/25 uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Not For Everyone
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1635650804263-1a1941e14df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Oversized Hoodie',
    price: '$120',
    tag: 'BESTSELLER',
  },
  {
    img: 'https://images.unsplash.com/photo-1576790807856-b9205fb5703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Cargo Pants',
    price: '$95',
    tag: null,
  },
  {
    img: 'https://images.unsplash.com/photo-1652110959665-81bdbb478489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Graphic Tee',
    price: '$65',
    tag: null,
  },
  {
    img: 'https://images.unsplash.com/photo-1560257437-628e0fcabc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Bomber Jacket',
    price: '$185',
    tag: 'NEW',
  },
  {
    img: 'https://images.unsplash.com/photo-1559038295-f32f4d5bb27c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Leather Jacket',
    price: '$280',
    tag: null,
  },
  {
    img: 'https://images.unsplash.com/photo-1635650805000-f31dee3133bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    name: 'Utility Vest',
    price: '$110',
    tag: null,
  },
];

// ── Small product card ────────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
  imageHeight = 'h-[320px] lg:h-[420px]',
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
  imageHeight?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer relative"
    >
      <div className={`relative overflow-hidden rounded-xl shadow-sm ${imageHeight}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Tag badge */}
        {product.tag && (
          <span
            className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-white bg-[#B11226] px-3 py-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.tag}
          </span>
        )}

        {/* Hover info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                {product.name}
              </h4>
              <div className="w-0 group-hover:w-full h-[1px] bg-[#B11226] transition-all duration-500 mt-1" />
            </div>
            <span className="text-white text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              {product.price}
            </span>
          </div>
        </div>
      </div>

      {/* Below-card info */}
      <div className="mt-3 px-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
            {product.name}
          </h4>
          <p className="text-sm text-[#B11226] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            {product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Feature / Hero card ───────────────────────────────────────────────────────
function FeatureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md"
      style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
    >
      <img
        src="https://images.unsplash.com/photo-1637536701306-3214e9cec64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="New Collection"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ minHeight: '560px' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
        <span
          className="text-[10px] text-white/70 tracking-[0.25em] uppercase font-medium block mb-3"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Spring / Summer 2026
        </span>
        <h3
          className="text-4xl lg:text-5xl text-white font-normal leading-tight mb-5"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          New<br />Collection
        </h3>
        <div className="w-12 h-[1px] bg-[#B11226] mb-5 group-hover:w-24 transition-all duration-500" />
        <button
          className="bg-[#B11226] text-white text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Shop Now
        </button>
      </div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for background typography
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 lg:px-12 bg-white overflow-hidden">
      {/* ── Background typography layer ─────────────────────────────────── */}
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-8 -left-6 text-[clamp(100px,18vw,280px)] font-bold leading-none text-black opacity-[0.04] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          COLLECTION
        </div>
        <div
          className="absolute bottom-16 right-0 text-[clamp(80px,14vw,220px)] font-bold leading-none text-[#B11226] opacity-[0.05] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          VAULT 26
        </div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(60px,10vw,160px)] font-bold leading-none text-black opacity-[0.03] whitespace-nowrap"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          SPRING '26
        </div>
      </motion.div>

      {/* ── Section heading ──────────────────────────────────────────────── */}
      <div className="relative max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-end justify-between"
        >
          <h2
            className="text-6xl lg:text-8xl tracking-tight leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Latest Drops
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-black hover:text-[#B11226] transition-colors pb-1 border-b border-black hover:border-[#B11226]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View All
          </a>
        </motion.div>

        {/* ── BENTO GRID ───────────────────────────────────────────────── */}
        {/*
          12-col layout (desktop):
          Row 1–2: [Feature 6col] [Card1 3col] [Card2 3col]
          Row 3:   [Card3 4col]   [Card4 4col] [Card5 4col]
        */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
          }}
        >
          {/* Feature card — col 1-6, row 1-2 */}
          <div style={{ gridColumn: '1 / 7', gridRow: '1 / 3' }}>
            <FeatureCard />
          </div>

          {/* Medium card — col 7-9, row 1 */}
          <div style={{ gridColumn: '7 / 10', gridRow: '1 / 2' }}>
            <ProductCard product={PRODUCTS[0]} index={1} imageHeight="h-[260px] lg:h-[340px]" />
          </div>

          {/* Medium card — col 10-12, row 1 */}
          <div style={{ gridColumn: '10 / 13', gridRow: '1 / 2' }}>
            <ProductCard product={PRODUCTS[1]} index={2} imageHeight="h-[260px] lg:h-[340px]" />
          </div>

          {/* Small card — col 7-9, row 2 */}
          <div style={{ gridColumn: '7 / 10', gridRow: '2 / 3' }}>
            <ProductCard product={PRODUCTS[2]} index={3} imageHeight="h-[200px] lg:h-[260px]" />
          </div>

          {/* Small card — col 10-12, row 2 */}
          <div style={{ gridColumn: '10 / 13', gridRow: '2 / 3' }}>
            <ProductCard product={PRODUCTS[3]} index={4} imageHeight="h-[200px] lg:h-[260px]" />
          </div>

          {/* Bottom row — 3 equal cards spanning 4 cols each */}
          <div style={{ gridColumn: '1 / 5', gridRow: '3 / 4' }}>
            <ProductCard product={PRODUCTS[4]} index={5} imageHeight="h-[320px] lg:h-[400px]" />
          </div>

          <div style={{ gridColumn: '5 / 9', gridRow: '3 / 4' }}>
            <ProductCard product={PRODUCTS[5]} index={6} imageHeight="h-[320px] lg:h-[400px]" />
          </div>

          <div style={{ gridColumn: '9 / 13', gridRow: '3 / 4' }}>
            <ProductCard product={PRODUCTS[0]} index={7} imageHeight="h-[320px] lg:h-[400px]" />
          </div>
        </div>

        {/* Mobile fallback — simple 2-col grid */}
        <style>{`
          @media (max-width: 768px) {
            .bento-grid-inner > div {
              grid-column: span 6 !important;
              grid-row: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

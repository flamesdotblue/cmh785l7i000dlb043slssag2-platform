import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CupSoda, Sparkles } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -40]);
  const y2 = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="w-full">
          <motion.div style={{ y: y1, opacity }} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 shadow">
            <Sparkles className="h-4 w-4 text-pink-500" />
            New: Autumn Caramel Swirl
          </motion.div>

          <motion.h1 style={{ y: y1 }} className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Sip the Chill. Taste the Thrill.
          </motion.h1>

          <motion.p style={{ y: y1 }} className="mt-4 max-w-2xl text-lg md:text-xl text-slate-700">
            Handcrafted milkshakes, real ingredients, and a swirl of fun. Smooth, creamy, and
            irresistibly cool.
          </motion.p>

          <motion.div style={{ y: y1 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-6 py-3 shadow hover:bg-indigo-700 transition active:scale-[0.98]">
              <CupSoda className="h-5 w-5" /> Browse Menu
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-slate-900 px-6 py-3 shadow border hover:bg-white transition">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div style={{ y: y2 }} className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700">
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <span className="mt-2 h-8 w-[2px] bg-slate-400/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

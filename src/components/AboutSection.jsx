import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Small-batch bliss in every sip</h2>
          <p className="mt-4 text-slate-700">
            At Froth & Swirl, we churn happiness one shake at a time. Our team sources high-quality
            dairy and seasonal produce, blending them into creamy creations with a playful twist.
          </p>
          <p className="mt-3 text-slate-700">
            No syrups that taste like science class—just real flavors, house-made sauces, and toppings
            that crackle, swirl, and shine.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Real Ingredients', value: '100%' },
              { label: 'Handcrafted', value: 'Daily' },
              { label: 'Happy Customers', value: '10k+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-white/70 backdrop-blur px-4 py-5 text-center">
                <div className="text-2xl font-extrabold">{stat.value}</div>
                <div className="text-xs text-slate-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 via-indigo-100 to-white shadow-lg">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-90">
              <div className="rounded-2xl bg-white/50" />
              <div className="rounded-2xl bg-white/40" />
              <div className="rounded-2xl bg-white/50" />
              <div className="rounded-2xl bg-white/40" />
              <div className="rounded-2xl bg-white/50" />
              <div className="rounded-2xl bg-white/40" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-pink-300/40 blur-2xl" aria-hidden />
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-300/40 blur-2xl" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}

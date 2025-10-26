import React from 'react';
import { motion } from 'framer-motion';
import { IceCream, Star } from 'lucide-react';

const shakes = [
  {
    name: 'Classic Vanilla Bean',
    desc: 'Madagascar vanilla, whole milk, whipped cloud.',
    price: '$6.50',
    badge: 'Most loved',
    gradient: 'from-amber-100 to-amber-50',
    emoji: '🍦',
  },
  {
    name: 'Double Chocolate Fudge',
    desc: 'Cocoa duo, fudge ripple, choco drizzle.',
    price: '$7.25',
    badge: 'Rich & creamy',
    gradient: 'from-violet-100 to-purple-50',
    emoji: '🍫',
  },
  {
    name: 'Strawberry Fields',
    desc: 'Real berries, strawberry coulis, sweet cream.',
    price: '$6.95',
    badge: 'Fresh pick',
    gradient: 'from-rose-100 to-pink-50',
    emoji: '🍓',
  },
  {
    name: 'Caramel Sea Salt Swirl',
    desc: 'Buttery caramel, sea salt flakes, toffee crunch.',
    price: '$7.50',
    badge: 'New',
    gradient: 'from-orange-100 to-yellow-50',
    emoji: '🧂',
  },
  {
    name: 'Matcha Dream',
    desc: 'Uji matcha, vanilla cream, white chocolate.',
    price: '$7.95',
    badge: 'Earthy & smooth',
    gradient: 'from-emerald-100 to-green-50',
    emoji: '🍵',
  },
  {
    name: 'Peanut Butter Crunch',
    desc: 'Roasted peanut butter, chocolate chips, crunch.',
    price: '$7.75',
    badge: 'Protein kick',
    gradient: 'from-stone-100 to-amber-50',
    emoji: '🥜',
  },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="relative py-20">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
            <IceCream className="h-5 w-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Our Signature Shakes</h2>
        </div>
        <p className="mt-2 text-slate-600 max-w-2xl">Crafted with real ingredients and blended to silky perfection. Pick your favorite or try something new.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shakes.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${s.gradient} p-5 shadow-sm border border-white/60`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1 text-amber-600">
                    <Star className="h-4 w-4 fill-amber-400/80 text-amber-500" />
                    <span className="text-xs font-medium">{s.badge}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold leading-tight">{s.name}</h3>
                  <p className="mt-1 text-slate-700/90 text-sm">{s.desc}</p>
                </div>
                <div className="text-4xl select-none" aria-hidden>{s.emoji}</div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-lg font-semibold">{s.price}</div>
                <button className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 active:scale-[0.98]">
                  Add to cart
                </button>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava M.',
    quote: 'Best shakes in town. The caramel sea salt is a dream and the texture is perfect.',
  },
  {
    name: 'Jordan P.',
    quote: 'You can taste the real fruit. Strawberry Fields took me back to summer fairs.',
  },
  {
    name: 'Keon R.',
    quote: 'Rich, creamy, not too sweet. I appreciate the balance—and the fun vibe!',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">People are talking</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">A swirl of five-star moments from our community of milkshake lovers.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-600">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-medium text-slate-700">4.9/5 average</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <p className="text-slate-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-2xl font-bold">Join the Swirl Club</h3>
            <p className="text-white/90">Exclusive flavors, early drops, and sweet surprises in your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex gap-3">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full md:w-80 rounded-full px-5 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-white/90 active:scale-[0.98]">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

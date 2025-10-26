import React from 'react';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-slate-900">
      <Hero />
      <MenuGrid />
      <AboutSection />
      <Testimonials />
      <footer id="contact" className="border-t border-slate-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Froth & Swirl Shakes</h4>
            <p className="text-slate-600">Made fresh. Loved always.</p>
          </div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Froth & Swirl. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

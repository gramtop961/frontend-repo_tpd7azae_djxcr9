import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.9)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/70 pointer-events-none" />

      {/* Floating leaf particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/60"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${(i * 9) % 100}%`, top: `${(i * 7) % 100}%` }}
          >
            <Leaf className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-28 sm:pt-40 sm:pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-[#3e6553] shadow-sm">
            <Leaf className="w-3 h-3" /> Sustainable impact starts here
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
            Empowering Sustainable Rice Farming
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            EcoBeras connects farmers, donors, and eco-partners to cultivate climate-smart rice,
            support local communities, and nourish a greener future with transparency and trust.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3e6553] text-white px-6 py-3 text-base font-medium shadow-lg shadow-black/10 hover:bg-[#35584a] transition-colors"
            >
              Join the Movement <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-white/90 text-[#3e6553] px-6 py-3 text-base font-medium backdrop-blur hover:bg-white transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

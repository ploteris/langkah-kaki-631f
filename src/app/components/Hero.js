'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200" />
      
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-terracotta-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-charcoal-200/30 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-charcoal-500 font-medium tracking-widest text-sm uppercase mb-6"
            >
              Handcrafted Excellence
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-charcoal-950 leading-[1.1] mb-8"
            >
              Step Into
              <br />
              <span className="text-charcoal-600">Intention</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-charcoal-600 text-lg leading-relaxed max-w-lg mb-10"
            >
              Discover footwear that embodies mindful craftsmanship. Each pair is thoughtfully designed for those who appreciate the art of walking with purpose and style.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Collection
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Story
              </motion.button>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-charcoal-200"
            >
              <div>
                <span className="block font-serif text-3xl font-semibold text-charcoal-950">2.5K+</span>
                <span className="text-charcoal-500 text-sm">Happy Customers</span>
              </div>
              <div className="w-px h-12 bg-charcoal-200" />
              <div>
                <span className="block font-serif text-3xl font-semibold text-charcoal-950">50+</span>
                <span className="text-charcoal-500 text-sm">Unique Designs</span>
              </div>
              <div className="w-px h-12 bg-charcoal-200" />
              <div>
                <span className="block font-serif text-3xl font-semibold text-charcoal-950">100%</span>
                <span className="text-charcoal-500 text-sm">Handcrafted</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-100 to-cream-200 rounded-[2rem] transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-charcoal-100 rounded-[2rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                  alt="Premium minimalist sneakers showcasing clean design and quality craftsmanship"
                  fill
                  className="object-cover rounded-[2rem]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-terracotta-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-charcoal-950">New Collection</span>
                    <span className="text-charcoal-500 text-sm">Spring 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#collection"
          className="flex flex-col items-center text-charcoal-400 hover:text-charcoal-600 transition-colors duration-300"
          aria-label="Scroll to collection"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Discover</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
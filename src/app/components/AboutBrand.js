'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Thoughtful Design',
    description: 'Every curve, every stitch is intentional. We believe in purposeful design that serves both form and function.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Crafted with Care',
    description: 'Handcrafted by skilled artisans using traditional techniques passed down through generations.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Sustainable Future',
    description: 'We source responsibly and minimize waste, because caring for the planet is part of our journey.',
  },
];

export default function AboutBrand() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream-50 overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-full h-full bg-terracotta-300/20 rounded-3xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
                  alt="Artisan crafting footwear with meticulous attention to detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <motion.div
              className="absolute -bottom-8 -right-8 bg-charcoal-950 text-cream-50 p-8 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-serif text-5xl font-semibold">7+</span>
              <p className="text-cream-200 mt-2">Years of Crafting Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="text-charcoal-500 font-medium tracking-widest text-sm uppercase">
              Our Story
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-950 mt-4 mb-8">
              Where Tradition<br />Meets Modernity
            </h2>
            
            <div className="space-y-6 text-charcoal-600 text-lg leading-relaxed mb-10">
              <p>
                Langkah Kaki was born from a simple belief: the shoes you wear should reflect who you are. Founded in 2019 in the heart of Yogyakarta, we started as a small workshop with big dreams.
              </p>
              <p>
                Today, we continue our journey with the same passion and dedication. Each pair represents our commitment to quality, sustainability, and timeless design that transcends trends.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-cream-200 rounded-2xl flex items-center justify-center text-charcoal-700 mb-4 group-hover:bg-charcoal-950 group-hover:text-cream-50 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-charcoal-950 mb-2">{value.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
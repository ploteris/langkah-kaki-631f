'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Urban Walker',
    category: 'Everyday Sneakers',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
    description: 'Minimalist design meets maximum comfort',
    isNew: true,
  },
  {
    id: 2,
    name: 'Heritage Classic',
    category: 'Classic Collection',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    description: 'Timeless elegance for every occasion',
    isNew: false,
  },
  {
    id: 3,
    name: 'Terra Runner',
    category: 'Outdoor Series',
    price: 1050000,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    description: 'Built for adventure, styled for life',
    isNew: true,
  },
  {
    id: 4,
    name: 'Canvas slip',
    category: 'Casual Line',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    description: 'Effortless simplicity in every step',
    isNew: false,
  },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-200 mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className={`absolute inset-0 bg-charcoal-950/0 transition-all duration-500 ${isHovered ? 'bg-charcoal-950/10' : ''}`} />
        
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-charcoal-950 text-cream-50 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
            New
          </span>
        )}
        
        <motion.button
          className="absolute bottom-4 left-4 right-4 bg-cream-50 text-charcoal-950 py-3 rounded-xl font-medium opacity-0 translate-y-4 transition-all duration-300 hover:bg-white"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(16px)' }}
          whileTap={{ scale: 0.98 }}
        >
          Quick View
        </motion.button>
      </div>
      
      <div className="space-y-2">
        <span className="text-charcoal-400 text-sm">{product.category}</span>
        <h3 className="font-serif text-xl font-semibold text-charcoal-950 group-hover:text-charcoal-700 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-charcoal-500 text-sm">{product.description}</p>
        <span className="block font-semibold text-charcoal-950 mt-2">
          {formatPrice(product.price)}
        </span>
      </div>
    </motion.div>
  );
}

export default function ProductCollection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(products.map((p) => p.category))];
  
  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="collection" className="section-padding bg-cream-100" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-charcoal-500 font-medium tracking-widest text-sm uppercase">
            Our Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal-950 mt-4 mb-6">
            Crafted with Purpose
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed">
            Each design tells a story of meticulous craftsmanship and thoughtful consideration, created for those who value substance over excess.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-charcoal-950 text-cream-50'
                  : 'bg-cream-200 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
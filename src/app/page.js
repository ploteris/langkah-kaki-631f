'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCollection from './components/ProductCollection';
import AboutBrand from './components/AboutBrand';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <ProductCollection />
      <AboutBrand />
      <ContactForm />
      <Footer />
    </main>
  );
}
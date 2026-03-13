'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-stone-900'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

          {/* Logo — Cormorant Garamond for brand name */}
          <Link
            href="/"
            className="text-white hover:text-stone-300 transition-colors"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.35rem',
              fontWeight: 400,
              letterSpacing: '0.08em',
            }}
          >
            Soulfood
          </Link>

          {/* Nav — Montserrat, spaced caps */}
          <nav
            className="hidden md:flex gap-10 text-stone-500 hover:[&_a]:text-white [&_a]:transition-colors"
            style={{ fontFamily: 'var(--font-montserrat)', fontSize: '0.6rem', letterSpacing: '0.25em' }}
          >
            <Link href="/" className="uppercase">Home</Link>
            <Link href="/collection" className="uppercase">Collection</Link>
            <a href="#about" className="uppercase">About</a>
            <a href="#contact" className="uppercase">Contact</a>
          </nav>

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
            aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black text-[9px] font-bold leading-none">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <CartDrawer />
    </>
  );
}

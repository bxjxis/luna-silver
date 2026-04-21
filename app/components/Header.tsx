'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const SCROLL_THRESHOLD = 80;

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/collection', label: 'Collection' },
  { href: '/bespoke',   label: 'Bespoke' },
  { href: '/#about',    label: 'About' },
  { href: '/#contact',  label: 'Contact' },
] as const;

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]      = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
            <Image
              src="/logo-badge.png"
              alt="Soulfood"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex gap-10 text-stone-500 hover:[&_a]:text-white [&_a]:transition-colors font-montserrat"
            style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="uppercase">{label}</Link>
            ))}
          </nav>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center gap-1">
            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
              aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
              <span aria-live="polite" aria-atomic="true" className="sr-only">
                {totalItems > 0 ? `${totalItems} items in cart` : 'Cart is empty'}
              </span>
              {totalItems > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black text-[9px] font-bold leading-none"
                >
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen nav overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-10" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-white text-4xl font-light hover:text-stone-400 transition-colors"
              style={{ letterSpacing: '0.05em' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Brand whisper */}
        <p className="absolute bottom-10 font-montserrat text-stone-700 text-[9px] tracking-[0.4em] uppercase">
          Handcrafted S925 Sterling Silver
        </p>
      </div>

      <CartDrawer />
    </>
  );
}

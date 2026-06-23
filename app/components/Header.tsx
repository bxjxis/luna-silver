'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const SCROLL_THRESHOLD = 80;

const NAV_LINKS = [
  { href: '/collection', label: 'Shop' },
  { href: '/bespoke',    label: 'Custom' },
  { href: '/#about',     label: 'About' },
  { href: '/#contact',   label: 'Contact' },
] as const;

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]        = useState(false);
  const [searchOpen, setSearchOpen]    = useState(false);
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/collection?q=${encodeURIComponent(q)}` : '/collection');
    setSearchOpen(false);
    setQuery('');
    setMenuOpen(false);
  };

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSearchOpen(false); setQuery(''); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

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
        <div className="w-full px-5 md:px-8 h-20 grid grid-cols-3 items-center">

          {/* Logo — left */}
          <Link href="/" className="flex items-center hover:opacity-70 transition-opacity shrink-0">
            <Image
              src="/logo-wordmark.png"
              alt="Soulfood"
              width={700}
              height={261}
              className="h-[72px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav — truly centred */}
          <nav
            className="hidden md:flex justify-center gap-10 text-stone-500 hover:[&_a]:text-white [&_a]:transition-colors font-montserrat"
            style={{ fontSize: '0.75rem', letterSpacing: '0.25em' }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="uppercase">{label}</Link>
            ))}
          </nav>

          {/* Right: Search + Cart + Hamburger */}
          <div className="flex items-center justify-end gap-1">

            {/* Search — icon only, expands on click */}
            <div className="hidden sm:flex items-center">
              {searchOpen ? (
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 border-b border-stone-400 transition-colors"
                >
                  <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    aria-label="Search the collection"
                    className="font-montserrat bg-transparent w-32 lg:w-44 py-1.5 text-[10px] tracking-[0.25em] uppercase text-stone-200 placeholder:text-stone-600 focus:outline-none"
                  />
                  <button type="submit" aria-label="Submit search" className="p-2 text-stone-400 hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                </form>
              ) : (
                <button
                  onClick={openSearch}
                  aria-label="Open search"
                  className="p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              )}
            </div>

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

        {/* Mobile search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-3 mb-12 border-b border-stone-700 focus-within:border-stone-400 transition-colors px-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-500" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search the collection"
            className="font-montserrat bg-transparent w-56 py-2 text-xs tracking-[0.3em] uppercase text-stone-200 placeholder:text-stone-600 focus:outline-none"
          />
        </form>

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

'use client';

import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-widest text-stone-800 uppercase">
            Luna Silver
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-stone-500 font-medium">
            <a href="#" className="hover:text-stone-900 transition-colors">Home</a>
            <a href="#shop" className="hover:text-stone-900 transition-colors">Shop</a>
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </nav>

          {/* Cart button with badge */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-stone-800 text-white text-[10px] font-bold leading-none">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Cart drawer rendered here so it overlays the whole page */}
      <CartDrawer />
    </>
  );
}

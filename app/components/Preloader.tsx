'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'done'>('visible');

  useEffect(() => {
    // Start exit after progress bar finishes (~2s)
    const exitTimer = setTimeout(() => setPhase('exiting'), 1500);
    // Remove from DOM after curtain rises (~750ms transition)
    const doneTimer = setTimeout(() => setPhase('done'), 2250);
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
      style={{
        transition: 'transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: phase === 'exiting' ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      {/* Logo */}
      <div
        className="w-[min(560px,80vw)]"
        style={{
          opacity: 0,
          animation: 'preloader-fadein 0.8s ease forwards 0.2s',
        }}
      >
        <Image
          src="/logo-wordmark.png"
          alt="Soulfood"
          width={700}
          height={261}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Tagline */}
      <p
        className="font-montserrat text-stone-500 text-xs tracking-[0.5em] uppercase mt-8"
        style={{
          opacity: 0,
          animation: 'preloader-fadein 0.8s ease forwards 0.5s',
        }}
      >
        Hand Made With Love
      </p>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-stone-900">
        <div
          className="h-full bg-stone-500"
          style={{ animation: 'preloader-progress 1.8s ease forwards 0.3s', width: 0 }}
        />
      </div>

      <style>{`
        @keyframes preloader-fadein {
          to { opacity: 1; }
        }
        @keyframes preloader-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

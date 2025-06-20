// Em um arquivo LenisContext.js
import { createContext, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const LenisContext = createContext();

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp:0.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <LenisContext.Provider value={null}>{children}</LenisContext.Provider>;
}
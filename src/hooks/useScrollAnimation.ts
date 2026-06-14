import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Returns a 0→1 progress value based on how far the element
 * has scrolled through the viewport. Useful for parallax, reveals, etc.
 */
export function useScrollProgress(offset = 0) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when element enters viewport bottom, 1 when it exits top
      const raw = (windowH - rect.top + offset) / (windowH + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { ref, progress };
}

/**
 * Tracks mouse position relative to a container for subtle tilt/parallax.
 * Returns normalized values from -1 to 1 (center = 0).
 */
export function useMouseParallax(intensity = 0.02) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * intensity;
      const y = (e.clientY - centerY) * intensity;
      setOffset({ x, y });
    },
    [intensity]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return { ref, offset };
}

/**
 * Simple "has entered viewport" boolean for triggering one-time CSS animations.
 */
export function useInViewOnce(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

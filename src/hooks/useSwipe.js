import { useRef } from 'react';

/**
 * Lightweight touch swipe hook for smooth mobile gestures.
 * Reduces cyclomatic complexity in carousel/slider components.
 */
export function useSwipe({ onSwipedLeft, onSwipedRight, threshold = 45 }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > threshold) {
      onSwipedLeft?.();
    } else if (diff < -threshold) {
      onSwipedRight?.();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo?.(0, 0);

    const scrollableElements = Array.from(
      document.querySelectorAll<HTMLElement>('*')
    ).filter((el) => {
      const style = window.getComputedStyle(el);
      const overflowY = style.overflowY;
      const canScroll =
        (overflowY === 'auto' || overflowY === 'scroll') &&
        el.scrollHeight > el.clientHeight;
      return canScroll;
    });

    scrollableElements.forEach((el) => {
      el.scrollTo(0, 0);
    });
  }, [pathname, search, hash, key]);

  return null;
}

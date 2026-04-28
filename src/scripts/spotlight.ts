export function initSpotlight() {
  const cards = document.querySelectorAll('[data-spotlight]');
  if (!cards.length) return;

  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouch) return;

  cards.forEach((card) => {
    const el = card as HTMLElement;

    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--spotlight-x', `${x}px`);
      el.style.setProperty('--spotlight-y', `${y}px`);
    });

    el.addEventListener('mouseenter', () => {
      el.style.setProperty('--spotlight-opacity', '1');
    });

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--spotlight-opacity', '0');
    });
  });
}

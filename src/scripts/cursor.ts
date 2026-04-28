export function initCursorFollower() {
  const cursor = document.getElementById('cursor-follower');
  if (!cursor) return;

  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReduced) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursor.classList.contains('visible')) {
      cursor.classList.add('visible');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
  });

  const hoverSelectors = 'a, button, [role="button"], input, textarea, select';
  document.addEventListener('mouseover', (e) => {
    if ((e.target as Element).closest(hoverSelectors)) {
      cursor.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if ((e.target as Element).closest(hoverSelectors)) {
      cursor.classList.remove('hovering');
    }
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animate);
  }
  animate();
}

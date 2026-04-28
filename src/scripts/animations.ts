import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  ScrollTrigger.getAll().forEach(st => st.kill());

  revealElements.forEach((el) => {
    const computedDelay = parseFloat(getComputedStyle(el).transitionDelay) || 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        if (computedDelay > 0) {
          setTimeout(() => el.classList.add('revealed'), computedDelay * 1000);
        } else {
          el.classList.add('revealed');
        }
      },
    });
  });

  const splitTitles = document.querySelectorAll('[data-split-text]');
  splitTitles.forEach((title) => {
    const el = title as HTMLElement;
    const text = el.textContent || '';
    el.innerHTML = '';
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      el.appendChild(span);
    });

    const chars = el.querySelectorAll('.split-char');
    gsap.set(chars, { opacity: 0, y: 20, display: 'inline-block' });

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.out',
        });
      },
    });
  });

  const heroCircle = document.getElementById('hero-parallax-circle');
  if (heroCircle) {
    gsap.to(heroCircle, {
      y: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  }

  const heroText = document.querySelector('#hero > div:first-child');
  if (heroText) {
    gsap.to(heroText, {
      y: -60,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

export function scheduleRefreshes() {
  if (document.readyState === 'complete') {
    refreshScrollTrigger();
  } else {
    window.addEventListener('load', refreshScrollTrigger, { once: true });
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshScrollTrigger);
  }
  setTimeout(refreshScrollTrigger, 300);
  setTimeout(refreshScrollTrigger, 1200);
}

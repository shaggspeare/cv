'use client';

import { useEffect } from 'react';

/**
 * The motion layer. Renders nothing; wires up the behaviours on the static markup:
 * scroll reveals, headline word masks, stat counters, the fixed nav with its sliding
 * section indicator, card tilt and magnetic buttons.
 *
 * The reveal attributes (data-r, --d) and word-mask spans (.w > .wi) are already in the
 * markup, and layout.tsx adds class "js" to <html> before first paint, so nothing flashes.
 * If "js" is absent (reduced motion, or no IntersectionObserver) this does nothing.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('js')) return;

    const $ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) =>
      Array.from(ctx.querySelectorAll<T>(sel));
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof HTMLElementEventMap>(
      el: HTMLElement | Window,
      type: K | 'scroll' | 'resize',
      fn: EventListener,
      opts?: AddEventListenerOptions,
    ) => {
      el.addEventListener(type, fn, opts);
      cleanups.push(() => el.removeEventListener(type, fn, opts));
    };

    // --- scroll reveals + headline word masks
    const heads = $('h1, h2');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('in');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    $('[data-r]')
      .concat(heads)
      .forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // failsafe: never leave anything in view hidden
    const failsafe = window.setTimeout(() => {
      $('[data-r]:not(.in), h1:not(.in), h2:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
      });
    }, 3500);
    cleanups.push(() => window.clearTimeout(failsafe));

    // --- stat counters
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const m = /^(\d+)(.*)$/.exec((el.textContent || '').trim());
          if (!m) return;
          const to = Number(m[1]);
          const suffix = m[2];
          const dur = 1400;
          let t0: number | null = null;
          el.style.fontVariantNumeric = 'tabular-nums';
          const tick = (t: number) => {
            if (t0 === null) t0 = t;
            const p = Math.min(1, (t - t0) / dur);
            el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          el.textContent = '0' + suffix;
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 },
    );
    $('[data-count]').forEach((n) => cio.observe(n));
    cleanups.push(() => cio.disconnect());

    // --- nav: fixed pill, hides on scroll down, indicator slides to the current section
    const header = document.querySelector<HTMLElement>('header');
    const nav = header?.querySelector<HTMLElement>('nav') ?? null;
    const top = document.getElementById('top');
    const ind = nav?.querySelector<HTMLElement>('.ind') ?? null;
    const links = nav ? $<HTMLAnchorElement>('a', nav).filter((a) => a.getAttribute('href') !== '#hi') : [];
    const secs = links.map((a) => document.querySelector<HTMLElement>(a.getAttribute('href') || '#none'));
    const photo = document.querySelector<HTMLElement>('.heroR figure img');
    const footer = document.getElementById('hi');
    let lastY = window.scrollY;
    let ticking = false;
    let current: HTMLAnchorElement | null = null;

    const pad = () => {
      if (header && top) top.style.marginTop = header.offsetHeight + 'px';
    };
    const place = (a: HTMLAnchorElement | null) => {
      links.forEach((l) => l.classList.toggle('on', l === a));
      if (!ind) return;
      if (!a) {
        ind.style.opacity = '0';
        return;
      }
      ind.style.left = a.offsetLeft + 'px';
      ind.style.top = a.offsetTop + 'px';
      ind.style.width = a.offsetWidth + 'px';
      ind.style.height = a.offsetHeight + 'px';
      ind.style.opacity = '1';
    };
    const setActive = (a: HTMLAnchorElement | null) => {
      if (a === current) return;
      current = a;
      place(a);
    };
    const frame = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (header) {
        if (y > 500 && y > lastY + 4) header.classList.add('hide');
        else if (y < lastY - 4 || y < 500) header.classList.remove('hide');
      }
      lastY = y;
      let act: HTMLAnchorElement | null = null;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < vh * 0.45) act = links[i];
      });
      if (footer && footer.getBoundingClientRect().top < vh * 0.45) act = null;
      setActive(act);
      if (photo) photo.style.setProperty('--py', Math.max(-7, Math.min(7, y * 0.03 - 4)).toFixed(1) + 'px');
      if (footer) {
        const p = Math.max(0, Math.min(1, (vh - footer.getBoundingClientRect().top) / (vh * 0.7)));
        footer.style.setProperty('--fs', (0.93 + 0.07 * p).toFixed(4));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    const onResize = () => {
      pad();
      place(current);
      onScroll();
    };
    on(window, 'scroll', onScroll, { passive: true });
    on(window, 'resize', onResize);
    pad();
    frame();
    document.fonts?.ready.then(() => {
      pad();
      place(current);
    });
    cleanups.push(() => {
      if (top) top.style.marginTop = '';
    });

    // --- pointer effects, only where there is a real pointer
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      $('article').forEach((card) => {
        on(card, 'pointermove', ((e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.classList.add('tilting');
          card.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
        }) as EventListener);
        on(card, 'pointerleave', () => {
          card.classList.remove('tilting');
          card.style.transform = '';
        });
      });
      $('.mag').forEach((b) => {
        on(b, 'pointermove', ((e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          b.classList.add('moving');
          b.style.transform = `translate(${(x * 0.18).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`;
        }) as EventListener);
        on(b, 'pointerleave', () => {
          b.classList.remove('moving');
          b.style.transform = '';
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

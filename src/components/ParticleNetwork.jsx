import { useEffect, useRef } from 'react';

/**
 * Fondo dinámico tipo "particles.js": red de nodos cibernéticos
 * con conexiones interactivas que reaccionan al cursor.
 *
 * Guards de rendimiento (regla 2.4 de MEMORY.md — NO animaciones
 * lentas o sobrecargadas en móvil):
 *  - respeta prefers-reduced-motion (red estática, sin bucle)
 *  - en móvil: menos nodos, DPR = 1 y sin seguimiento de cursor
 *  - pausa el bucle cuando la pestaña está oculta (ahorra CPU/batería)
 */
export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let running = false;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    const mouse = { x: -9999, y: -9999 };

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    const finePointer = window.matchMedia('(pointer: fine)');

    const isMobile = () =>
      window.innerWidth < 768 || coarsePointer.matches;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = isMobile() ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const base = Math.min(110, Math.floor((w * h) / 14000));
      const count = isMobile() ? Math.min(35, base) : base;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random() > 0.45 ? '0,242,254' : '159,0,255',
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 130;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.28;
            ctx.strokeStyle = `rgba(0,242,254,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // conexión con el cursor (solo puntero fino / escritorio)
        if (finePointer.matches) {
          const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dm < 190) {
            const alpha = (1 - dm / 190) * 0.5;
            ctx.strokeStyle = `rgba(159,0,255,${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.hue},0.85)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = () => {
      const MOUSE_LINK = 190;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        // repulsión suave cerca del cursor (solo escritorio)
        if (finePointer.matches) {
          const dxm = n.x - mouse.x;
          const dym = n.y - mouse.y;
          const dm = Math.hypot(dxm, dym);
          if (dm < MOUSE_LINK && dm > 0.001) {
            const f = ((MOUSE_LINK - dm) / MOUSE_LINK) * 0.55;
            n.x += (dxm / dm) * f;
            n.y += (dym / dm) * f;
          }
        }
      }
    };

    const tick = () => {
      if (!running) return;
      update();
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reducedMotion.matches || document.hidden) return;
      running = true;
      tick();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        draw();
        start();
      }
    };

    const onReducedChange = () => {
      if (reducedMotion.matches) {
        stop();
        draw(); // red estática, sin animación
      } else {
        start();
      }
    };

    // init: frame estático inmediato y bucle solo si corresponde
    resize();
    draw();
    start();

    window.addEventListener('resize', resize);
    if (finePointer.matches) window.addEventListener('mousemove', onMove);
    document.addEventListener('visibilitychange', onVisibility);
    if (reducedMotion.addEventListener)
      reducedMotion.addEventListener('change', onReducedChange);
    if (coarsePointer.addEventListener)
      coarsePointer.addEventListener('change', resize);

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      if (reducedMotion.removeEventListener)
        reducedMotion.removeEventListener('change', onReducedChange);
      if (coarsePointer.removeEventListener)
        coarsePointer.removeEventListener('change', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-70"
      aria-hidden="true"
    />
  );
}

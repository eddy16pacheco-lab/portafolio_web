import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-[0_4px_30px_rgba(0,0,0,.5)] border-b border-neon/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-mono text-sm md:text-base flex items-center gap-1.5 group"
        >
          <Terminal className="w-5 h-5 text-neon group-hover:rotate-12 transition-transform" />
          <span className="text-neon">eddy</span>
          <span className="text-muted">@</span>
          <span className="text-magenta">pacheco</span>
          <span className="text-muted">:~$</span>
          <span className="terminal-caret" />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted hover:text-neon transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-neon after:to-magenta hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="px-4 py-1.5 rounded-full border border-neon/40 text-neon hover:bg-neon hover:text-void hover:shadow-neon transition-all duration-300"
            >
              Contrátame
            </a>
          </li>
        </ul>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:border-neon/50 hover:text-neon transition-colors"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4 font-mono text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-muted hover:text-neon transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-block px-4 py-1.5 rounded-full border border-neon/40 text-neon"
                >
                  Contrátame
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

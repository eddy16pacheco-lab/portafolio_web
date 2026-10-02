import { Terminal, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          <span className="text-neon">eddy</span>
          <span className="text-muted">@</span>
          <span className="text-magenta">pacheco</span>
          <span className="text-muted">:~$ </span>
          echo "© 2026 Eddy Pacheco — todos los derechos reservados"
        </p>

        <p className="font-mono text-xs text-muted">
          hecho con React + Vite + Tailwind CSS + Framer Motion
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/eddy16pacheco-lab/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/10 text-muted hover:text-neon hover:border-neon/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:eddy16pacheco@gmail.com"
            className="p-2 rounded-lg border border-white/10 text-muted hover:text-magenta hover:border-magenta/40 transition-colors"
            aria-label="Correo"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="p-2 rounded-lg border border-white/10 text-muted">
            <Terminal className="w-4 h-4" />
          </span>
        </div>
      </div>
    </footer>
  );
}

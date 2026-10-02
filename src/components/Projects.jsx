import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Maximize2,
  FileCode2,
  ChevronRight,
} from 'lucide-react';
import { projects } from '../data/content.jsx';
import ProjectModal from './ProjectModal.jsx';

const accentDot = {
  cyan: 'group-hover:from-neon',
  purple: 'group-hover:from-cyber',
  magenta: 'group-hover:from-magenta',
};

const ringHover = {
  cyan: 'hover:border-neon/50 hover:shadow-neon',
  purple: 'hover:border-cyber/50 hover:shadow-neon-purple',
  magenta: 'hover:border-magenta/50 hover:shadow-[0_0_24px_rgba(225,0,255,.35)]',
};

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="proyectos" className="relative py-24 scroll-mt-24">
      <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-neon/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[380px] h-[380px] rounded-full bg-magenta/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-neon text-sm mb-2">
              {'// 02 — proyectos destacados'}
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Showcase <span className="text-gradient">de Código</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted max-w-sm">
            $ ls -la ~/proyectos --human-readable --details
            <br />
            <span className="text-neon">→ 3 sistemas desplegados</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              onClick={() => setActive(p)}
              className={`group glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${ringHover[p.accent]}`}
            >
              {/* cabecera estilo editor de código */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-muted truncate">
                  {p.path}
                </span>
              </div>

              {/* imagen */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — captura de pantalla`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-black/60 border border-white/15 font-mono text-[10px] text-neon"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 border border-neon/40 font-mono text-[10px] text-neon">
                    <Maximize2 className="w-3 h-3" />
                    Ver detalles
                  </span>
                </div>
              </div>

              {/* cuerpo */}
              <div className="p-5">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FileCode2
                    className={`w-5 h-5 bg-gradient-to-b ${accentDot[p.accent]} to-transparent bg-clip-text text-transparent`}
                  />
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] text-skyblue mt-0.5">
                  {p.subtitle}
                </p>
                <p className="text-muted text-sm mt-3 leading-relaxed clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-neon group-hover:gap-2 transition-all">
                    Leer README completo
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-magenta transition-colors"
                    >
                      Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

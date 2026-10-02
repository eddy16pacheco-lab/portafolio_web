import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileCode2, Image as ImageIcon } from 'lucide-react';
import Markdown from './Markdown.jsx';

export default function ProjectModal({ project, onClose }) {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (project) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      setShowImages(false);
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 md:p-6 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl w-full max-w-4xl max-h-[88vh] flex flex-col overflow-hidden shadow-neon-purple border border-white/10"
          >
            {/* cabecera tipo ventana de código */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.04] shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted truncate">
                {project.path} — {project.file}
              </span>
              <button
                onClick={onClose}
                className="ml-auto p-1.5 rounded-lg text-muted hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* contenido scrollable */}
            <div className="overflow-y-auto p-5 md:p-7">
              {/* título y acciones */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-skyblue mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowImages((v) => !v)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/15 text-xs font-mono text-white/80 hover:border-neon/50 hover:text-neon transition-colors"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    {showImages ? 'Ocultar' : 'Ver'} capturas ({project.gallery.length})
                  </button>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-neon to-skyblue text-void text-xs font-bold hover:shadow-neon transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo en vivo
                    </a>
                  )}
                </div>
              </div>

              {/* descripción destacada (texto del CV / propuesta) */}
              {project.intro ? (
                <div className="rounded-xl border border-cyber/30 bg-cyber/10 p-4 mb-6">
                  <p className="font-mono text-[10px] text-cyber mb-2 uppercase tracking-widest">
                    Resumen del CV — versión actualizada
                  </p>
                  {project.intro.map((par, i) => (
                    <p key={i} className="text-sm text-white/85 leading-relaxed mt-2 first:mt-0">
                      {par}
                    </p>
                  ))}
                  {project.demo && (
                    <p className="mt-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-neon underline underline-offset-4 hover:text-magenta"
                      >
                        {project.demo}
                      </a>
                    </p>
                  )}
                </div>
              ) : null}

              {/* galería de capturas */}
              <AnimatePresence>
                {showImages && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {project.gallery.map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          alt={`${project.title} captura ${i + 1}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="rounded-xl border border-white/10 hover:border-neon/40 transition-colors w-full h-36 object-cover object-top"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* etiquetas */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px] text-neon"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* README completo renderizado */}
              <div className="rounded-xl border border-white/10 bg-void/70 p-5 md:p-6">
                <p className="flex items-center gap-2 font-mono text-[10px] text-muted mb-4 uppercase tracking-widest">
                  <FileCode2 className="w-3.5 h-3.5 text-magenta" />
                  Contenido integrado desde {project.file}
                </p>
                <Markdown source={project.markdown} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import {
  aboutText,
  aboutText2,
  techGroups,
  softSkills,
  languages,
  profile,
} from '../data/content.jsx';

const sectionTitle = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const accentMap = {
  cyan: 'group-hover:border-neon/50 group-hover:shadow-neon',
  purple: 'group-hover:border-cyber/50 group-hover:shadow-neon-purple',
  magenta: 'group-hover:border-magenta/50 group-hover:shadow-[0_0_20px_rgba(225,0,255,.35)]',
  sky: 'group-hover:border-skyblue/50 group-hover:shadow-[0_0_20px_rgba(79,172,254,.35)]',
  violet: 'group-hover:border-purple-400/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,.35)]',
};

const iconColorMap = {
  cyan: 'text-neon',
  purple: 'text-cyber',
  magenta: 'text-magenta',
  sky: 'text-skyblue',
  violet: 'text-purple-400',
};

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 scroll-mt-24">
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] rounded-full bg-cyber/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Encabezado */}
        <motion.div
          variants={sectionTitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <p className="font-mono text-neon text-sm mb-2">
            {'// 01 — sobre mí'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Texto perfil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 md:p-7 h-full relative overflow-hidden">
              <Quote className="absolute -top-2 -left-2 w-16 h-16 text-neon/10" />
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-neon/40 shadow-neon"
                />
                <div>
                  <h3 className="font-bold text-lg">{profile.name}</h3>
                  <p className="font-mono text-xs text-muted">
                    {profile.title}
                  </p>
                </div>
              </div>
              <p className="text-muted leading-relaxed text-[15px]">
                {aboutText}
              </p>
              <p className="text-muted leading-relaxed text-[15px] mt-4">
                {aboutText2}
              </p>

              {/* Idiomas */}
              <div className="mt-7">
                <h4 className="font-mono text-xs text-skyblue mb-3 uppercase tracking-widest">
                  Idiomas
                </h4>
                <div className="space-y-3">
                  {languages.map((l) => (
                    <div key={l.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{l.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {l.level}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-neon to-cyber"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills blandas */}
              <div className="mt-7">
                <h4 className="font-mono text-xs text-skyblue mb-3 uppercase tracking-widest">
                  Habilidades blandas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:border-magenta/40 hover:text-white transition-colors"
                    >
                      <Heart className="w-3 h-3 text-magenta/70" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stack tecnológico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-5 content-start"
          >
            {techGroups.map((g, gi) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group glass rounded-2xl p-5 transition-all duration-300 ${accentMap[g.color]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`p-2 rounded-xl bg-white/5 border border-white/10 ${iconColorMap[g.color]}`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="font-bold text-[15px]">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10 font-mono text-[11px] text-white/85 group-hover:border-white/25 transition-all duration-300 hover:text-neon hover:border-neon/40 hover:shadow-[0_0_12px_rgba(0,242,254,.25)] cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Tarjeta IA destacada */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="sm:col-span-2 rounded-2xl p-[1.5px] bg-gradient-to-r from-neon via-cyber to-magenta"
            >
              <div className="rounded-2xl bg-panel/95 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-neon">
                    {'{'} ia_mode: "potenciado" {'}'}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Integro IA en mi flujo de desarrollo: generación y revisión de
                  código, depuración, consultas SQL, documentación técnica y
                  prototipado rápido — siempre con{' '}
                  <span className="text-white">
                    redacción efectiva de prompts y verificación crítica
                  </span>{' '}
                  de cada respuesta antes de integrarla.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

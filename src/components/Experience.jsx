import { motion } from 'framer-motion';
import { experience } from '../data/content.jsx';

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 scroll-mt-24">
      <div className="absolute top-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-skyblue/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="font-mono text-neon text-sm mb-2">
            {'// 03 — trayectoria'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Experiencia <span className="text-gradient">& Educación</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* línea de tiempo */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon via-cyber to-magenta md:-translate-x-1/2" />

          {experience.map((exp, i) => {
            const Icon = exp.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative mb-10 md:mb-14 pl-14 md:pl-0 md:w-1/2 ${
                  left ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* nodo */}
                <div
                  className={`absolute top-6 left-5 md:left-auto w-10 h-10 rounded-full glass flex items-center justify-center border-neon/40 shadow-neon ${
                    left
                      ? 'md:-right-5'
                      : 'md:-left-5'
                  }`}
                >
                  <Icon className="w-5 h-5 text-neon" />
                </div>

                {/* tarjeta */}
                <div className="glass rounded-2xl p-5 md:p-6 hover:border-neon/30 hover:shadow-neon transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-neon/20 to-cyber/20 border border-neon/30 font-mono text-[11px] text-neon mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="font-mono text-xs text-skyblue mt-0.5 mb-3">
                    {exp.org}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm text-muted leading-relaxed"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-magenta shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

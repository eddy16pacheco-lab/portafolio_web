import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Sparkles, MapPin } from 'lucide-react';
import { profile, heroStats, cvPdf } from '../data/content.jsx';
import TypingTerminal from './TypingTerminal.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const photoWrap = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const r = photoWrap.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 scroll-mt-24">
      {/* orbes de color */}
      <div className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-neon/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[420px] h-[420px] rounded-full bg-cyber/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Columna izquierda */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-magenta" />
            <span className="font-mono text-xs text-muted">
              Disponible para proyectos junior
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hola, soy{' '}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 font-mono text-sm md:text-base text-skyblue"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 text-lg md:text-xl text-white/90 font-medium leading-relaxed"
          >
            “{profile.tagline}”
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-3 text-muted text-sm md:text-base"
          >
            Especialidad:{' '}
            <span className="text-white/80">{profile.specialty}</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4.5}
            className="mt-2 inline-flex items-center gap-1.5 text-muted text-sm font-mono"
          >
            <MapPin className="w-4 h-4 text-magenta" />
            {profile.location}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#proyectos"
              className="group relative px-7 py-3 rounded-xl font-semibold text-void bg-gradient-to-r from-neon to-skyblue hover:shadow-neon transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver Proyectos
            </a>
            <a
              href={cvPdf}
              download="CV_Eddy_Pacheco_Desarrollador_Junior.pdf"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl font-mono text-sm text-neon border border-neon/50 hover:bg-neon/10 hover:shadow-neon transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Descargar CV (PDF)
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-4 py-3 text-center hover:border-neon/30 transition-colors"
              >
                <p className="text-2xl font-extrabold text-gradient">{s.value}</p>
                <p className="text-[11px] font-mono text-muted mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Terminal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={7}
            className="mt-8 hidden md:block"
          >
            <TypingTerminal />
          </motion.div>
        </div>

        {/* Columna derecha — foto con efecto 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div
            ref={photoWrap}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]"
            style={{
              transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform .15s ease-out',
            }}
          >
            {/* anillo giratorio neón */}
            <motion.div
              className="absolute -inset-4 rounded-[3rem]"
              style={{
                background:
                  'conic-gradient(from 0deg, #00F2FE, #7F00FF, #E100FF, #4FACFE, #00F2FE)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute -inset-4 rounded-[3rem] bg-cyber/40 blur-3xl animate-pulse-glow" />

            {/* foto */}
            <div className="absolute inset-0 rounded-[2.6rem] bg-void p-[3px]">
              <img
                src={profile.photo}
                alt={`Foto de perfil de ${profile.name}`}
                className="w-full h-full object-cover rounded-[2.55rem] border border-white/10"
              />
              <div className="absolute inset-0 rounded-[2.55rem] bg-gradient-to-t from-cyber/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* chips flotantes */}
            <div className="absolute -left-8 top-10 glass rounded-lg px-3 py-1.5 font-mono text-xs text-neon animate-float shadow-neon">
              {'{ react: true }'}
            </div>
            <div
              className="absolute -right-6 top-1/3 glass rounded-lg px-3 py-1.5 font-mono text-xs text-magenta animate-float shadow-neon-purple"
              style={{ animationDelay: '1.2s' }}
            >
              &lt;SQL /&gt;
            </div>
            <div
              className="absolute -left-4 bottom-14 glass rounded-lg px-3 py-1.5 font-mono text-xs text-skyblue animate-float"
              style={{ animationDelay: '2s' }}
            >
              SELECT * FROM proyectos;
            </div>
            <div
              className="absolute right-2 -bottom-5 glass rounded-lg px-3 py-1.5 font-mono text-xs text-white/80 animate-float"
              style={{ animationDelay: '0.6s' }}
            >
              $ git push -u origin main
            </div>
          </div>
        </motion.div>
      </div>

      {/* Terminal en móvil */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-5 mt-12 md:hidden"
      >
        <TypingTerminal />
      </motion.div>
    </section>
  );
}

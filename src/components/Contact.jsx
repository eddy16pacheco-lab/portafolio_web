import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MailOpen, MapPin, ArrowUpRight } from 'lucide-react';
import { contactLinks, locationInfo, profile } from '../data/content.jsx';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  // Compone un mailto real: abre el cliente de correo (Gmail, Outlook…)
  // con el mensaje listo para enviar. Sin servidores ni simulaciones.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portafolio — mensaje de ${form.nombre}`
    );
    const body = encodeURIComponent(
      `Hola Eddy, mi nombre es ${form.nombre} (${form.email}).\n\n${form.mensaje}\n\n— Enviado desde tu portafolio web`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="relative py-24 scroll-mt-24">
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-cyber/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-neon text-sm mb-2">
            {'// 04 — contacto'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Hablemos <span className="text-gradient">de tu idea</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            «Si tienes una gran idea, ven y hablemos; la crearemos
            juntos.» Escríbeme por cualquiera de estos canales:
          </p>
        </motion.div>

        {/* Tarjetas de enlaces (consumidas de docs/ENLACES.md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {contactLinks.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.id}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 ${c.glow} ${c.border}`}
              >
                <span
                  className={`p-3 rounded-xl bg-gradient-to-br ${c.gradient} text-void shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                    {c.label}
                  </span>
                  <span className="block font-semibold truncate">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto w-4 h-4 text-muted group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </motion.a>
            );
          })}

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="glass rounded-2xl p-5 flex items-center gap-4"
          >
            <span className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-void shadow-lg">
              <MapPin className="w-6 h-6" />
            </span>
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
                {locationInfo.label}
              </span>
              <span className="block font-semibold">
                {locationInfo.value}
              </span>
            </span>
          </motion.div>
        </div>

        {/* Formulario + panel lateral */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-1">
              Envíame un mensaje
            </h3>
            <p className="font-mono text-xs text-muted mb-6">
              $ contact --send --to {profile.email}
            </p>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-mono text-xs text-skyblue mb-2"
                >
                  {'<nombre />'}
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) =>
                    setForm({ ...form, nombre: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon/60 focus:shadow-neon transition-all placeholder:text-muted/50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs text-skyblue mb-2"
                >
                  {'<email />'}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="tu@correo.com"
                  className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon/60 focus:shadow-neon transition-all placeholder:text-muted/50"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block font-mono text-xs text-skyblue mb-2"
                >
                  {'<mensaje />'}
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                  placeholder="Cuéntame tu idea…"
                  className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon/60 focus:shadow-neon transition-all placeholder:text-muted/50 resize-y"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-xl font-bold text-void bg-gradient-to-r from-neon to-skyblue hover:shadow-neon hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MailOpen className="w-5 h-5" />
                Abrir mi correo con el mensaje
              </motion.button>

              <p className="text-center font-mono text-[11px] text-muted leading-relaxed">
                → Al enviar se abre tu cliente de correo (Gmail, Outlook…)
                <br />
                con el mensaje listo para ti.{' '}
                <span className="text-neon">Sin servidores, sin costos.</span>
              </p>
            </div>
          </motion.form>

          {/* Panel lateral: WhatsApp directo + enlaces crudos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-neon via-cyber to-magenta">
              <div className="rounded-2xl bg-panel/95 p-6 md:p-7">
                <p className="font-mono text-xs text-neon mb-3">
                  {'> respuesta rápida'}
                </p>
                <h3 className="text-2xl font-extrabold leading-snug">
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  Escríbeme directamente por WhatsApp con el detalle de
                  tu idea y te responderé lo antes posible. También puedes
                  descargar mi CV completo:
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/584269154122?text=Hola%20Eddy%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500/90 text-white text-sm font-bold hover:bg-green-500 hover:shadow-[0_0_24px_rgba(34,197,94,.5)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 font-mono text-xs text-muted">
              <p className="text-neon mb-2">$ cat docs/ENLACES.md</p>
              <p className="leading-relaxed">
                <span className="text-skyblue">github:</span>{' '}
                <a className="text-neon hover:underline" href="https://github.com/eddy16pacheco-lab/" target="_blank" rel="noreferrer">
                  github.com/eddy16pacheco-lab
                </a>
                <br />
                <span className="text-skyblue">instagram:</span>{' '}
                <a className="text-neon hover:underline" href="https://www.instagram.com/eddypac_19/" target="_blank" rel="noreferrer">
                  @eddypac_19
                </a>
                <br />
                <span className="text-skyblue">facebook:</span>{' '}
                <a className="text-neon hover:underline" href="https://www.facebook.com/pacheco.mijares.2025" target="_blank" rel="noreferrer">
                  pacheco.mijares.2025
                </a>
                <br />
                <span className="text-skyblue">whatsapp:</span>{' '}
                <a className="text-neon hover:underline" href="https://wa.me/584269154122" target="_blank" rel="noreferrer">
                  +58 426-915-4122
                </a>
                <br />
                <span className="text-skyblue">barbapp demo:</span>{' '}
                <a className="text-neon hover:underline" href="https://eddy16pacheco-lab.github.io/BARBEAPP/" target="_blank" rel="noreferrer">
                  eddy16pacheco-lab.github.io/BARBEAPP
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

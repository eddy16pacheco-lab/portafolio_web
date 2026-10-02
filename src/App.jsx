import { motion, useScroll, useSpring } from 'framer-motion';
import ParticleNetwork from './components/ParticleNetwork.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-void text-white">
      {/* fondo: partículas cibernéticas + grid */}
      <ParticleNetwork />
      <div className="fixed inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] pointer-events-none" />

      {/* barra de progreso de scroll */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[90] origin-left bg-gradient-to-r from-neon via-cyber to-magenta"
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

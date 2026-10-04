import {
  MessageCircle,
  Github,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  GitBranch,
  BrainCircuit,
  Wrench,
  Globe,
} from 'lucide-react';

// ─── Assets locales (integrados desde /img y /docs) ───
import fotoEddy from '../../img/foto_Eddy_Pacheco.jpg';
import logoGrande from '../../img/Logo_grande.jpg';
import logoAncho from '../../img/Logo_ancho.jpg';

import cbitMain from '../../img/login_cbitManager.PNG';

import adminpymeMain from '../../img/menu_adminpyme.PNG';
import adminpymeInventario from '../../img/modulo_Inventario_adminpyme.PNG';
import adminpymeVentas from '../../img/modulo_ventas_admin_pyme.PNG';
import adminpymeGestionVentas from '../../img/modulo_geston_de_ventas_adminpyme.PNG';
import adminpymeReportes from '../../img/modulo_reportes_adminpyme.PNG';
import adminpymeReportes2 from '../../img/modulo_reportes_2_admin_pyme.PNG';
import adminpymeUsuarios from '../../img/modulo_usuario_admin_pyme.PNG';
import adminpymeLogin from '../../img/login_admynPyme.PNG';

import barbappMain from '../../img/menu_barb_app.PNG';
import barbappPromos from '../../img/modulo_promociones_barbapp.PNG';
import barbappLogin from '../../img/login_barbapo.PNG';

// CV en PDF — descarga directa
import cvPdf from '../../docs/CV_Eddy_Pacheco_Desarrollador_Junior-1.pdf';

// Archivos .md de proyectos — leídos e integrados dinámicamente (?raw)
import cbitMd from '../../docs/README_CBIT_MANAGER.md?raw';
import adminpymeMd from '../../docs/README_ADMIN_PYME.md?raw';
import barbappMd from '../../docs/README_BARBEAPP.md?raw';

export { fotoEddy, logoGrande, logoAncho, cvPdf };

// ─── Enlaces parseados desde docs/ENLACES.md (regla 2.1 de MEMORY.md) ───
// Los enlaces de contacto se leen del archivo fuente; NO están hardcodeados.
import { parseEnlaces } from '../utils/parseEnlaces.js';
import enlacesMd from '../../docs/ENLACES.md?raw';

const { sections: enlaceSections, phones: telefonosEnlaces } =
  parseEnlaces(enlacesMd);

export { enlaceSections };

const findEnlace = (key) => enlaceSections.find((s) => s.key === key);

const prettyUrl = (href) =>
  href
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');

const waEnlace = findEnlace('whatsapp');
const telefonoRaw =
  waEnlace?.phones?.[0] ?? telefonosEnlaces[0] ?? '+584269154122';
const telefonoDigits = telefonoRaw.replace(/\D/g, '');
export const telefono = `+${telefonoDigits}`;

export const formatPhone = (p) => {
  const d = p.replace(/\D/g, '');
  if (d.length === 12 && d.startsWith('58')) {
    return `+${d.slice(0, 2)} ${d.slice(2, 5)}-${d.slice(5, 8)}-${d.slice(8)}`;
  }
  return p;
};

export const barbappDemo =
  findEnlace('barbapp')?.href ??
  'https://eddy16pacheco-lab.github.io/BARBEAPP/';

export const whatsappCta = `${
  waEnlace?.href ?? `https://wa.me/${telefonoDigits}`
}?text=${encodeURIComponent(
  'Hola Eddy, vi tu portafolio y me gustaría conversar sobre un proyecto.'
)}`;

// ─── Formspree (formulario de contacto real) ───
// Endpoint público de Formspree; puede sobreescribirse con la
// variable de entorno VITE_FORMSPREE_ENDPOINT (ej. en .env.local).
export const formspreeEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ||
  'https://formspree.io/f/xqpezdok';

// ─── Identidad ───
export const profile = {
  name: 'Eddy Pacheco',
  handle: 'eddy.pacheco',
  title: 'Ingeniero en Informática | Desarrollador de Software Junior',
  tagline: 'Si tienes una gran idea, ven y hablemos; la crearemos juntos.',
  specialty: 'Desarrollo Web · Bases de Datos Relacionales · IA Aplicada',
  location: 'Acevedo, Miranda, Venezuela',
  email: 'eddy15pacheco@gmail.com',
  phone: formatPhone(telefono),
  photo: fotoEddy,
};

export const heroStats = [
  { value: '3+', label: 'Proyectos reales' },
  { value: '1+', label: 'Año de experiencia' },
  { value: '15+', label: 'Tecnologías' },
  { value: '2', label: 'Idiomas' },
];

// ─── Terminal typing (Hero) ───
export const terminalLines = [
  { cmd: 'whoami', out: 'eddy.pacheco — desarrollador junior' },
  { cmd: 'git push -u origin main', out: 'Todo actualizado ✓' },
  { cmd: 'SELECT * FROM habilidades WHERE nivel = "pro";', out: 'JavaScript · React.js · SQL · MySQL · Python' },
  { cmd: 'npm run build', out: '✔ compilado en 1.24s — 0 errores' },
  { cmd: 'curl -X POST /ideas -d "la tuya"', out: '→ "Si tienes una gran idea, ven y hablemos…"' },
];

// ─── Sobre mí (texto extraído del CV) ───
export const aboutText =
  'Ingeniero en Informática y desarrollador junior con enfoque en desarrollo web (JavaScript, React.js, HTML5/CSS3) y bases de datos relacionales (SQL, MySQL, MariaDB). He construido proyectos completos, desde el levantamiento de requerimientos y el diseño del modelo de datos hasta la implementación de soluciones funcionales, incluyendo un sistema interno de gestión durante mi experiencia como tutor en un Centro Bolivariano de Informática y Telemática (CBIT) de Fundabit.';

export const aboutText2 =
  'Utilizo a diario herramientas de IA (ChatGPT, Claude, Gemini, DeepSeek, Copilot y Perplexity) para acelerar el desarrollo, depurar código, documentar y aprender nuevas tecnologías, manteniendo siempre criterio propio para validar los resultados. Manejo Git y GitHub para control de versiones y trabajo colaborativo. Busco una oportunidad como desarrollador junior donde aportar mi capacidad de aprendizaje continuo y soluciones eficientes y bien estructuradas dentro de un equipo.';

export const techGroups = [
  {
    icon: Code2,
    title: 'Frontend & Lenguajes',
    color: 'cyan',
    items: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Java', 'Python'],
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    color: 'purple',
    items: ['SQL', 'MySQL', 'MariaDB', 'Modelado Relacional'],
  },
  {
    icon: GitBranch,
    title: 'Control de Versiones',
    color: 'magenta',
    items: ['Git', 'GitHub'],
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    color: 'sky',
    items: ['VS Code', 'Apache NetBeans', 'MySQL Workbench'],
  },
  {
    icon: BrainCircuit,
    title: 'Especialidad IA',
    color: 'violet',
    items: ['ChatGPT', 'Claude', 'Gemini', 'DeepSeek', 'Copilot', 'Perplexity', 'Ingeniería de Prompts'],
  },
];

export const softSkills = [
  'Resolución de problemas',
  'Adaptabilidad',
  'Creatividad',
  'Responsabilidad',
  'Levantamiento de requerimientos',
  'Aprendizaje continuo',
  'Trabajo en equipo',
];

export const languages = [
  { name: 'Español', level: 'Nativo', pct: 100 },
  { name: 'Inglés', level: 'Intermedio', pct: 65 },
];

// ─── Proyectos destacados ───
export const projects = [
  {
    id: 'cbit-manager',
    title: 'CBIT Manager',
    subtitle: 'Sistema Integral de Gestión Administrativa',
    path: '~/fundabit/cbit-manager',
    file: 'docs/README_CBIT_MANAGER.md',
    markdown: cbitMd,
    image: cbitMain,
    gallery: [cbitMain],
    tags: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'MVC'],
    accent: 'cyan',
    description:
      'Sistema desarrollado durante mi experiencia como tutor en el CBIT de Fundabit para digitalizar y centralizar la gestión administrativa (registro de usuarios, control de actividades e información institucional), sustituyendo procesos manuales por un flujo de trabajo ordenado y respaldado en una base de datos relacional MySQL.',
    demo: null,
    repo: null,
    intro: null,
  },
  {
    id: 'adminpyme',
    title: 'AdminPyme',
    subtitle: 'Sistema de Control de Inventario y Gestión (PWA)',
    path: '~/adminpyme/adminpyme-web',
    file: 'docs/README_ADMIN_PYME.md',
    markdown: adminpymeMd,
    image: adminpymeMain,
    gallery: [
      adminpymeMain,
      adminpymeInventario,
      adminpymeVentas,
      adminpymeGestionVentas,
      adminpymeReportes,
      adminpymeReportes2,
      adminpymeUsuarios,
      adminpymeLogin,
    ],
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase', 'Zustand'],
    accent: 'purple',
    description:
      'Aplicación Web Progresiva (PWA) desarrollada para Pymes en Venezuela con soporte multimoneda (USD/VES) en tiempo real e integración con la tasa oficial del Banco Central de Venezuela (BCV).',
    demo: 'https://admin-pyme-online.vercel.app',
    repo: null,
    intro: [
      'Aplicación Web Progresiva (PWA) desarrollada para Pymes en Venezuela con soporte multimoneda (USD/VES) en tiempo real e integración con la tasa oficial del Banco Central de Venezuela (BCV).',
      'Frontend construido con React 18, Vite y Tailwind CSS, implementando gestión de estado global con Zustand, gráficos dinámicos (Lightweight Charts v4) y alertas interactivas con SweetAlert2.',
      'Backend y Base de Datos con Supabase (PostgreSQL), autenticación de usuarios (Supabase Auth) y seguridad mediante Row Level Security (RLS).',
      'Funcionalidades avanzadas: escáner de código de barras mediante cámara web/móvil, módulo de ventas a crédito, control de clientes, reporte de cierre de caja multimoneda y exportación de reportes a Excel y PDF.',
    ],
  },
  {
    id: 'barbapp',
    title: 'BarbApp',
    subtitle: 'Sistema de Gestión Integral para Barberías',
    path: '~/barbapp/BarbApp',
    file: 'docs/README_BARBEAPP.md',
    markdown: barbappMd,
    image: barbappMain,
    gallery: [barbappMain, barbappPromos, barbappLogin],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'SQL'],
    accent: 'magenta',
    description:
      'Sistema de gestión integral para barberías desarrollado con JavaScript, HTML/CSS y base de datos SQL. Incluye administración de citas, gestión de clientes, procesamiento de pagos en línea y programas de fidelización, con una interfaz elegante en tonos oscuros orientada a la experiencia del usuario.',
    demo: barbappDemo,
    repo: null,
    intro: null,
  },
];

// ─── Experiencia & Trayectoria ───
export const experience = [
  {
    id: 'exp-1',
    icon: Briefcase,
    period: '1 año',
    role: 'Tutor de CBIT',
    org: 'Fundabit',
    points: [
      'Impartí formación en informática y uso de tecnología a la comunidad, apoyando el programa nacional de alfabetización tecnológica de Fundabit.',
      'Participé en la creación de CBIT Manager, un sistema interno con base de datos relacional para digitalizar y ordenar la gestión administrativa del centro.',
      'Brindé soporte técnico básico y acompañamiento a usuarios en el uso de equipos y herramientas informáticas.',
      'Apliqué herramientas de IA generativa para preparar material formativo y resolver dudas técnicas.',
    ],
  },
  {
    id: 'exp-2',
    icon: GraduationCap,
    period: '2025',
    role: 'Ingeniero en Informática',
    org: 'Univ. Politécnica Territorial de Barlovento "Argelia Laya"',
    points: [
      'Formación integral en ingeniería de software, bases de datos, redes y desarrollo de sistemas.',
      'Proyecto de grado orientado a soluciones web con tecnologías modernas.',
    ],
  },
  {
    id: 'exp-3',
    icon: GraduationCap,
    period: '2022',
    role: 'Bachiller en Ciencias',
    org: 'U.E.E. "Argelia Laya"',
    points: ['Bachillerato en Ciencias con orientación tecnológica.'],
  },
];

// ─── Contacto (parseado de docs/ENLACES.md — regla 2.1 de MEMORY.md) ───
// Nota: el correo NO está en enlaces.md (viene del CV), por eso se toma de `profile`.
const enlaceOk = !!(
  findEnlace('github') &&
  findEnlace('instagram') &&
  findEnlace('facebook') &&
  waEnlace
);

const contactLinksDinamicos = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: formatPhone(telefono),
    href: waEnlace.href,
    gradient: 'from-green-400 to-emerald-600',
    glow: 'hover:shadow-[0_0_28px_rgba(34,197,94,.45)]',
    border: 'hover:border-green-400/50',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: prettyUrl(findEnlace('github').href),
    href: findEnlace('github').href,
    gradient: 'from-slate-300 to-slate-500',
    glow: 'hover:shadow-[0_0_28px_rgba(148,163,184,.4)]',
    border: 'hover:border-slate-300/50',
  },
  {
    id: 'instagram',
    icon: Instagram,
    label: 'Instagram',
    value: `@${findEnlace('instagram').href.split('/').filter(Boolean).pop()}`,
    href: findEnlace('instagram').href,
    gradient: 'from-fuchsia-500 to-amber-500',
    glow: 'hover:shadow-[0_0_28px_rgba(217,70,239,.4)]',
    border: 'hover:border-fuchsia-400/50',
  },
  {
    id: 'facebook',
    icon: Facebook,
    label: 'Facebook',
    value: prettyUrl(findEnlace('facebook').href),
    href: findEnlace('facebook').href,
    gradient: 'from-blue-500 to-sky-400',
    glow: 'hover:shadow-[0_0_28px_rgba(59,130,246,.4)]',
    border: 'hover:border-blue-400/50',
  },
  {
    id: 'barbapp',
    icon: Globe,
    label: 'BarbApp — Demo',
    value: prettyUrl(barbappDemo),
    href: barbappDemo,
    gradient: 'from-neon to-skyblue',
    glow: 'hover:shadow-[0_0_28px_rgba(0,242,254,.45)]',
    border: 'hover:border-neon/50',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Correo Electrónico',
    value: profile.email,
    href: `mailto:${profile.email}`,
    gradient: 'from-neon to-skyblue',
    glow: 'hover:shadow-[0_0_28px_rgba(0,242,254,.45)]',
    border: 'hover:border-neon/50',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Teléfono',
    value: formatPhone(telefono),
    href: `tel:${telefonoDigits}`,
    gradient: 'from-cyber to-magenta',
    glow: 'hover:shadow-[0_0_28px_rgba(127,0,255,.45)]',
    border: 'hover:border-cyber/50',
  },
];

// Fallback: si cambia el formato de enlaces.md, la sección contacto nunca se rompe
const FALLBACK_CONTACT_LINKS = [
  { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', value: '+58 426-915-4122', href: 'https://wa.me/584269154122', gradient: 'from-green-400 to-emerald-600', glow: 'hover:shadow-[0_0_28px_rgba(34,197,94,.45)]', border: 'hover:border-green-400/50' },
  { id: 'github', icon: Github, label: 'GitHub', value: 'eddy16pacheco-lab', href: 'https://github.com/eddy16pacheco-lab/', gradient: 'from-slate-300 to-slate-500', glow: 'hover:shadow-[0_0_28px_rgba(148,163,184,.4)]', border: 'hover:border-slate-300/50' },
  { id: 'instagram', icon: Instagram, label: 'Instagram', value: '@eddypac_19', href: 'https://www.instagram.com/eddypac_19/', gradient: 'from-fuchsia-500 to-amber-500', glow: 'hover:shadow-[0_0_28px_rgba(217,70,239,.4)]', border: 'hover:border-fuchsia-400/50' },
  { id: 'facebook', icon: Facebook, label: 'Facebook', value: 'pacheco.mijares.2025', href: 'https://www.facebook.com/pacheco.mijares.2025', gradient: 'from-blue-500 to-sky-400', glow: 'hover:shadow-[0_0_28px_rgba(59,130,246,.4)]', border: 'hover:border-blue-400/50' },
  { id: 'email', icon: Mail, label: 'Correo Electrónico', value: 'eddy15pacheco@gmail.com', href: 'mailto:eddy15pacheco@gmail.com', gradient: 'from-neon to-skyblue', glow: 'hover:shadow-[0_0_28px_rgba(0,242,254,.45)]', border: 'hover:border-neon/50' },
  { id: 'phone', icon: Phone, label: 'Teléfono', value: '+58 426-915-4122', href: 'tel:+584269154122', gradient: 'from-cyber to-magenta', glow: 'hover:shadow-[0_0_28px_rgba(127,0,255,.45)]', border: 'hover:border-cyber/50' },
];

export const contactLinks = enlaceOk
  ? contactLinksDinamicos
  : FALLBACK_CONTACT_LINKS;

export const locationInfo = {
  icon: MapPin,
  label: 'Ubicación',
  value: 'Acevedo, Miranda, Venezuela',
};

# AGENTS.md

Portafolio web de Eddy Pacheco — React 18 + Vite 5 + Tailwind 3 + Framer Motion + lucide-react + marked. Sitio estático de una sola página, en español.

## Comandos

```bash
npm install   # ~2 min (135 paquetes)
npm run dev   # dev server en http://localhost:5173
npm run build # build de producción en dist/ (~1 min) — ÚNICA verificación
npm run preview
```

No hay tests, lint, typecheck ni formatter configurado. Verificar cambios con `npm run build`.

## Dependencias (estado conocido)

- `vite` está en `^6.4.3` (subir desde 5.4.21 arregló 4 advisories: path traversal de vite + esbuild). `@vitejs/plugin-react@4.7.0` acepta vite `^4||^5||^6||^7` como peer.
- `npm audit` muestra 5 high restantes: `braces → chokidar / micromatch → fast-glob → tailwindcss`. **NO tienen parche upstream** (braces 3.0.3 es el último release y es vulnerable; tailwindcss 3.4.19 es el último 3.4.x). Solo afectan al build (dev-time); el sitio desplegado es estático, exposición cero.
- **NO ejecutar `npm audit fix --force`**: instalaría vite 8.x, rompe el peer de plugin-react y puede romper el build.

## Repo

- Git: rama `main`, remote `origin` = `github.com/eddy16pacheco-lab/portafolio_web` (**guion bajo**, no guion).
- Deploy: GitHub Pages vía `.github/workflows/deploy.yml` (push a `main`; usa `npm ci`, requiere `package-lock.json`). Requiere habilitar **Settings → Pages → Source → GitHub Actions** una vez.
- `vite.config.js` lee `base: process.env.BASE_PATH || '/'`. **`BASE_PATH` del workflow debe coincidir con el nombre del repo** (hoy: `/portafolio_web/`) o los assets darán 404. Para sitio de usuario (`eddy16pacheco-lab.github.io`), usar `BASE_PATH: /`.
- Alternativa documentada: Vercel (usado para AdminPyme).

## Entorno (Windows / PowerShell)

- Shell es PowerShell: el encadenamiento `&&` FALLA en esta versión — usar `;` o comandos separados.
- No hay Python instalado (solo Node v24 / npm 11).

## Convenciones críticas de assets (causan build roto si se ignoran)

- Las imágenes en `img/` tienen extensión en MAYÚSCULA (`.PNG`, `.JPG`). Vite no las reconoce por defecto: `vite.config.js` incluye `assetsInclude: ['**/*.PNG', '**/*.JPG', ...]`. No eliminar.
- Los assets (imágenes, CV en PDF, archivos `.md`) se importan DIRECTO desde `img/` y `docs/` (fuera de `src/`) con imports relativos; los `.md` con sufijo `?raw`. No hay carpeta `public/` — no duplicar archivos ahí.
- `src/data/content.jsx` es la fuente única de datos: importa todos los assets y exporta profile, projects, experience, contactLinks, etc. Editar contenido ahí o en los archivos fuente de `docs/`/`img/`.
- **Excepción `public/`**: contiene SOLO `logo.jpg` (copia de `img/Logo_grande.jpg`, 1376×768). Es intencional: el favicon y `og:image`/`twitter:image` necesitan una URL estable en `index.html` (los assets importados llevan hash y rompen el og:image para los crawlers). Si cambias el logo, actualiza `img/Logo_grande.jpg` **y** `public/logo.jpg`. Las meta OG usan URL absoluta `https://eddy16pacheco-lab.github.io/portafolio_web/logo.jpg` — ajústala si cambia el destino de despliegue.


## Memoria
- Al empezar,lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar
- Mantenlo breve (maximo 100 líneas): resumen o elimina lo que ya no aporte.
- Si algo se convierte en una regla permante, propón moverlo a `AGENTS.md` eb lugar de dejarlo en la memoria

## Detalles de implementación

- Los `contactLinks` se parsean de `docs/ENLACES.md` con `src/utils/parseEnlaces.js` (soporta URL sola, `([URL])`, `[(URL)]` y teléfonos `+58...`). Si cambia el formato del archivo, hay fallback al array `FALLBACK_CONTACT_LINKS` para no romper la sección. El correo NO está en `enlaces.md` (viene del CV → `profile.email`).
- Los README de proyectos se renderizan como Markdown en el modal con `marked` (gfm + breaks); los estilos están en `src/index.css` bajo `.md-body`.
- El formulario de contacto envía por **Formspree** (`formspreeEndpoint` en `src/data/content.jsx`; endpoint `https://formspree.io/f/xqpezdok`, sobreescribible con `VITE_FORMSPREE_ENDPOINT`). Usa `_replyto` para responder al visitante y honeypot `_gotcha` anti-spam. Sin endpoint configurado, el flujo cae en fallback `mailto:`.
- Correo actual: **eddy15pacheco@gmail.com** (`profile.email` en `src/data/content.jsx` — fuente única; el Footer ya lo consume). El PDF del CV aún tiene el viejo (eddy16pacheco) hasta que se regenere.
- Fondo de partículas en `src/components/ParticleNetwork.jsx` (Canvas API) con guards de rendimiento: `prefers-reduced-motion` (red estática), densidad reducida y DPR=1 en móvil, y pausa en pestaña oculta.
- El efecto typing del hero es un state machine en `TypingTerminal.jsx` (fases cmd/out, bucle sobre `terminalLines`).
- y acualiza siempre la Memoria

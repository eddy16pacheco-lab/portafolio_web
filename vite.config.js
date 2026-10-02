import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  // Ruta base para despliegue:
  //  - '/'  → Vercel/Netlify o repo eddy16pacheco-lab.github.io (sitio de usuario)
  //  - '/portafolio-web/' → GitHub Pages como sitio de proyecto (se setea en el Actions)
  base: process.env.BASE_PATH || '/',
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG', '**/*.GIF', '**/*.WEBP'],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3101', // Votre serveur API
        changeOrigin: true,              // Change l'origine de la requête (utile pour certains cas de CORS)
        rewrite: (path) => path.replace(/^\/api/, '') // Réécrit le chemin de l'URL si nécessaire
      }
    }
  }
});

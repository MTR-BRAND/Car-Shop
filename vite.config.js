import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you need to inject CSS, you can include this plugin
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin() // Add this plugin if Bootstrap's CSS isn't loading correctly
  ],
  build: {
    rollupOptions: {
      external: ['bootstrap'] // Explicitly externalize Bootstrap
    }
  }
});

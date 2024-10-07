import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import bootstrap from 'vite-plugin-bootstrap';

export default defineConfig({
  plugins: [react(), bootstrap()],
});

import { resolve } from 'path';
import posthtml from '@vituum/vite-plugin-posthtml';

export default {
  plugins: [posthtml()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    watch: {
      include: ['./src/components/**', './src/styles/**'],
      usePolling: true,
    },
  },
};

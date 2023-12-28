import posthtml from '@vituum/vite-plugin-posthtml';

export default {
  plugins: [posthtml()],

  server: {
    watch: {
      usePolling: true,
    },
  },
};

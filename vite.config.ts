import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // load env
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_NAGER_API, // use env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});

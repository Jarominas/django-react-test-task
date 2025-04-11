import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000,
        host: true,
        open: false,
        watch: {
            usePolling: true,
        },
        historyApiFallback: true,
    },
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})

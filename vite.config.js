import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/Conquerblocks_website/',

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        registro: resolve(__dirname, 'registro.html'),
        login: resolve(__dirname, 'login.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        aviso_legal: resolve(__dirname, 'aviso_legal.html'),

        curso1: resolve(__dirname, 'cursos/curso1.html'),
        curso2: resolve(__dirname, 'cursos/curso2.html'),
        curso3: resolve(__dirname, 'cursos/curso3.html'),
        curso4: resolve(__dirname, 'cursos/curso4.html'),

        noticia1: resolve(__dirname, 'blog/noticias1.html'),
        noticia2: resolve(__dirname, 'blog/noticias2.html'),
      },
    },
  },
})
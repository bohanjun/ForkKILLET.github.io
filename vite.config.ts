import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prismjs from 'vite-plugin-prismjs'

export default defineConfig({
    plugins: [
        vue(),
        prismjs({
            languages: [ 'javascript', 'typescript', 'bash', 'markup' ],
            theme: 'okaidia',
            css: true
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    }
})

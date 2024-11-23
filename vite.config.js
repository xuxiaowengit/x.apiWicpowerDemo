import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// xspace api key ：xai-WJRo2RpStN73y2tGC8qg2QRqBlQxbKWSK6ki9u1E9pQxTyen8N3zaWd5vklgCsOFocNhuJ3XlbW6uo65

export default defineConfig({
  plugins: [
    vue({
      // 启用热更新
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true,
    // 配置HMR
    hmr: {
      overlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖
    },
    // 配置热更新的监听选项
    watch: {
      // 监听的文件类型
      include: ['src/**'],
      // 忽略的文件
      ignored: ['**/node_modules/**', '**/.git/**']
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 优化开发体验
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios', 'element-plus'],
  },
  // 构建优化
  build: {
    // 启用源码映射
    sourcemap: true,
    // 分块策略
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'element-plus': ['element-plus'],
        }
      }
    }
  }
})

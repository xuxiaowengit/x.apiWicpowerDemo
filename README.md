# Vue 3 Modern Application

这是一个基于 Vue 3 的现代化前端应用程序，使用了最新的技术栈和最佳实践。

## 技术栈

- 🚀 [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- ⚡️ [Vite](https://vitejs.dev/) - 下一代前端构建工具
- 🎨 [Element Plus](https://element-plus.org/) - 基于 Vue 3 的组件库
- 📦 [Pinia](https://pinia.vuejs.org/) - Vue 的状态管理库
- 🛣 [Vue Router](https://router.vuejs.org/) - Vue.js 的官方路由
- 📱 响应式设计 - 适配各种屏幕尺寸

## 项目结构

```
x-api/
├── src/                # 源代码目录
│   ├── views/         # 页面视图组件
│   ├── router/        # 路由配置
│   ├── App.vue        # 根组件
│   └── main.js        # 应用入口
├── public/            # 静态资源
├── index.html         # HTML 入口
├── vite.config.js     # Vite 配置
└── package.json       # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 开发指南

### 环境变量

项目使用 `.env` 文件管理环境变量：

- `VITE_APP_TITLE` - 应用标题
- `VITE_APP_API_BASE_URL` - API 基础URL

### 代理配置

开发服务器配置了API代理，所有 `/api` 请求将被转发到后端服务器：

```javascript
{
  '/api': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
```

### 路由

项目使用 Vue Router 进行路由管理，主要路由包括：

- `/` - 首页
- `/about` - 关于页面

## 浏览器支持

本项目支持所有现代浏览器。推荐使用以下浏览器的最新版本：

- Chrome
- Firefox
- Safari
- Edge

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

[MIT](LICENSE)

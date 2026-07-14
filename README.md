# ArchEvolve · 架构演进

> 从分布式系统到 AI 应用架构

ArchEvolve 是一个基于 Astro 与 Starlight 构建的静态技术知识站。

在线访问：[https://arch-evolve.pages.dev](https://arch-evolve.pages.dev)

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址为 `http://localhost:4321`。

## 内容结构

```text
src/content/docs/
├── distributed-systems/  # 分布式系统
├── ai-application/       # AI 应用架构
├── projects/             # 项目实践
├── start-here.md
└── about.md
```

在对应目录新增 Markdown 或 MDX 文件即可发布新内容。

## 构建

```bash
npm run build
npm run preview
```

静态产物生成在 `dist/` 目录，可部署到 Cloudflare Pages、Vercel 或其他静态托管平台。

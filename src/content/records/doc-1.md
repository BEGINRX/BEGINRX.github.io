---
title: Astro 入门文档
type: doc
date: 2024-01-12
---

# Astro 简介

Astro 是一个现代化的静态站点生成器，具有以下特点：

## 核心特性

- **零 JS 默认**：Astro 默认不向浏览器发送任何 JavaScript
- **内容优先**：专为内容驱动的网站设计
- **框架无关**：可以使用 React、Vue、Svelte 等组件
- **性能优异**：默认提供最佳性能

## 基础语法

```astro
---
// 服务器端代码
const title = 'Hello, Astro!';
---

<!-- 模板 -->
<h1>{title}</h1>
```

## 总结

Astro 非常适合构建博客、文档网站和个人主页。

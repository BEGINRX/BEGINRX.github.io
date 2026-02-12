# 网站内容修改指南

本文档说明如何修改网站的各类内容。

---

## 1. 个人记录（日志、文档、短句）

### 文件位置
```
src/content/records/
```

### 文件格式

创建一个新的 `.md` 文件（例如 `log-2.md`）：

```markdown
---
title: 标题
type: log  # 类型：log(日志) | doc(文档) | quote(短句)
date: 2024-01-20
image: /images/your-image.jpg  # 可选，配图
---

这里是正文内容，支持 **Markdown** 语法！

## 可以用二级标题

- 支持列表
- 支持代码块

```javascript
// 支持代码高亮
const hello = "world";
```

可以插入图片：
![图片描述](/images/your-image.jpg)
```

### 记录类型说明

| 类型 | type 值 | 说明 |
|------|-----------|------|
| 日志 | `log` | 日常记录、学习心得等 |
| 文档 | `doc` | 技术文档、教程等 |
| 短句 | `quote` | 一句话、语录等 |

### 示例

**日志示例**：
```markdown
---
title: 学习 Rust 笔记
type: log
date: 2024-01-20
image: /images/rust.jpg
---

今天开始学习 Rust，感觉所有权 Ownership 的概念很有意思...

![学习笔记](/images/notes.jpg)
```

**短句示例**：
```markdown
---
title: 关于坚持
type: quote
date: 2024-01-20
---

"不是因为看到希望才坚持，而是因为坚持了才有希望。"
```

---

## 2. 工作经历

### 文件位置
```
src/content/experience/
```

### 文件格式

```markdown
---
company: 公司名称
position: 职位名称
startDate: 2020-01-01
endDate: 2021-12-31  # 当前职位设为 null
current: false  # 当前在职设为 true
image: /images/company-logo.jpg  # 可选，公司配图
tags: ['技能1', '技能2']  # 可选，技能标签
---

工作描述正文...

### 项目经验
- 项目1：描述
- 项目2：描述

### 主要成果
- 成果1
- 成果2
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|--------|------|
| company | 是 | 公司名称 |
| position | 是 | 职位 |
| startDate | 是 | 开始日期（YYYY-MM-DD） |
| endDate | 否* | 结束日期，当前职位留空或设为 null |
| current | 否 | 是否当前在职（默认 false） |
| image | 否 | 配图路径（放在 public/images/） |
| tags | 否 | 技能标签数组 |

*注意：`current: true` 时 `endDate` 应设为 `null`

### 示例

**当前工作**：
```markdown
---
company: 某科技公司
position: 算法工程师
startDate: 2023-01-01
endDate: null
current: true
tags: ['Python', 'C++', '机器学习']
---

负责算法优化工作...
```

**过往工作**：
```markdown
---
company: 创业工作室
position: 全栈开发者
startDate: 2021-06-01
endDate: 2022-12-31
current: false
tags: ['Vue.js', 'Node.js']
---

在小团队中负责全栈开发...
```

---

## 3. 主页个人信息

### 文件位置
```
src/pages/index.astro
```

### 修改内容

找到 Hero 区域的以下部分修改：

```astro
<!-- 修改这里 -->
<h1 class="mb-4 text-4xl font-bold md:text-5xl">
  你好，我是 <span class="text-primary-600">你的名字</span>
</h1>

<!-- 修改这里：个人简介 -->
<p class="mb-6 text-xl text-gray-600 dark:text-gray-400">
  这里写你的简介...
</p>
```

### 修改联系方式

找到"关于我"部分的卡片：

```astro
<!-- 邮箱 -->
<div class="card text-center">
  <p class="text-sm">
    <a href="mailto:your@email.com" class="hover:text-primary-600">
      your@email.com
    </a>
  </p>
</div>

<!-- GitHub -->
<div class="card text-center">
  <a href="https://github.com/你的用户名" target="_blank">
    @你的用户名
  </a>
</div>

<!-- 技术栈 -->
<div class="card text-center">
  <p class="text-sm">
    JavaScript, TypeScript, React...
  </p>
</div>
```

---

## 4. 添加图片

### 图片存放位置
```
public/images/
```

### 使用图片

在 Markdown 中引用：
```markdown
![图片说明](/images/your-image.jpg)
```

在 frontmatter 中引用：
```yaml
---
image: /images/your-image.jpg
---
```

### 图片建议

| 用途 | 建议尺寸 | 格式 |
|------|------------|------|
| 头像 | 200x200px | jpg/png |
| 经历配图 | 800x400px | jpg/png |
| 记录配图 | 1200x600px | jpg/png |

---

## 5. 网站配置

### 网站名称

修改 `src/components/Header.astro`：
```astro
<a href="/" class="flex items-center gap-2 font-bold text-xl">
  <span class="text-primary-600">My</span>Site
</a>
```

### 修改主题色

修改 `tailwind.config.mjs`：
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... 修改这里
        600: '#0ea5e9',  // 主色
        // ...
      },
    },
  },
}
```

---

## 6. 预览和部署

### 本地预览
```bash
npm run dev
```
访问 http://localhost:4321

### 构建生产版本
```bash
npm run build
```

### 提交代码
```bash
git add .
git commit -m "update: 更新内容"
git push
```

推送到 GitHub 后会自动部署到 GitHub Pages。

---

## 7. 留言板管理

### 工作流程

```
访客提交 → 发送到邮箱 → 你审核 → 添加到 guestbook.json → 重新构建 → 显示
```

### 添加留言

编辑 `guestbook.json` 文件：

```json
[
  {
    "name": "访客名字",
    "message": "留言内容在这里",
    "date": "2024-01-20T10:00:00.000Z",
    "visibility": "public"
  },
  {
    "name": "另一个访客",
    "message": "又一条留言",
    "date": "2024-01-19T15:30:00.000Z",
    "visibility": "public"
  }
]
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|--------|------|
| name | 否 | 访客名字，默认"lxr的朋友" |
| message | 是 | 留言内容 |
| date | 是 | ISO 格式时间字符串 |
| visibility | 否 | public(公开) / private(仅lxr可见) |

### 配置表单

1. 访问 https://formspree.io/ 注册免费账号
2. 创建新表单，获取表单 ID
3. 替换 `src/pages/guestbook.astro` 中的 `YOUR_FORM_ID`
4. 表单提交会发送到你的注册邮箱

---

## 快速参考

| 想修改... | 编辑文件... |
|-------------|-------------|
| 添加新记录 | `src/content/records/新文件.md` |
| 修改经历 | `src/content/experience/*.md` |
| 添加留言 | `guestbook.json` |
| 修改个人信息 | `src/pages/index.astro` |
| 添加图片 | 放到 `public/images/` |
| 修改导航 | `src/components/Header.astro` |
| 配置留言表单 | `src/pages/guestbook.astro` |
| 修改主题色 | `tailwind.config.mjs` |

---

有问题？查看 PLAN.md 了解整体架构。

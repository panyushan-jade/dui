## Vikingship component library

## 使用 React+typescript 从零到一打造一套你自己的组件库

[![Build Status](https://travis-ci.com/vikingmute/vikingship.svg?token=mHoDqxyxXWX5BSpu8L9y&branch=master)](https://travis-ci.com/vikingmute/vikingship)

jadedui 是为前端童鞋打造的一套组件库，使用 React Hooks 和 typescript
意在让大家从零到一，由浅入深的提高自己的 React 和 typescript 水平
不足之处也欢迎 PR

<!-- 它的官网地址是[vikingship.xyz](http://vikingship.xyz) -->

### 安装最后已经发布的组件库来试试

```javascript
npm install jadedui --save
```

### 使用

```javascript
// 加载样式
import "jadedui/dist/index.css";
// 引入组件
import { Button } from "jadedui";
```

### 课程亮点

- 🔥typescript with React Hooks
- ⛑️ 使用 react-testing-library 完成单元测试
- 📚 使用 storybook 本地调试和生成文档页面
- 📚 使用 react-doc-gen 自动生成文档
- 📦 使用 rollup 作为构建工具
- 📦 使用第三方库扩充组件-(react-transition-group 等)
- 🌹 样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法
- 🎉 涉及全部流程，包括最后的 npm publish，husky 提交发布前验证，travis CI/CD 集成，发布文档站点等

### 一些本地开发命令

```bash
//启动本地环境
npm run stroybook

//build可发布静态文件
npm run build

//发布到 npm
npm run publish
```

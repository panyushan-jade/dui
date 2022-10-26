import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 jadedui 组件库</h1>
        <h2>组件亮点</h2>
        <ul>
          <li>🔥typescript with React Hooks</li>
          <li>📚 使用 storybook 本地调试和生成文档页面</li>
          <li>📚 使用 react-doc-gen 自动生成文档</li>
          <li>📦 使用 rollup 作为构建工具</li>
          <li>📦 使用第三方库扩充组件-(react-transition-group 等)</li>
          <li>🌹 样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法</li>
          <li>
            🎉 涉及全部流程，包括最后的 npm publish，husky
            提交发布前验证，travis CI/CD 集成，发布文档站点等
          </li>
        </ul>

        <h3>安装试试</h3>
        <code>npm install jadedui --save</code>
        <br />
        <h3>使用</h3>
        <div>加载样式</div>
        <code>{`import "jadedui/dist/index.css";`}</code>
        <div>引入组件</div>
        <code>{`import { Button } from "jadedui";`}</code>
      </>
    );
  },
  { info: { disable: true } }
);

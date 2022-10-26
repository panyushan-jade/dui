import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3 style={{ marginBottom: 30 }}>组件演示</h3>
    {stroyFn()}
  </div>
);

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const loaderFn = () => {
  const allExports = [require("../src/welcome.stories.tsx")];
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

// automatically import all files ending in *.stories.js
configure(loaderFn, module);

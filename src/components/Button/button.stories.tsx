// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";

// import Button from "./index";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Example/Button",
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// //   argTypes: {
// //     backgroundColor: { control: "color" },
// //   },
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   type: 'primary',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   children: '2222'
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
// };

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { withInfo } from '@storybook/addon-info'

import Button from "./index";

const defaultButton = () => (
  <Button onClick={action("clicked")}> default button </Button>
);

// const buttonWithSize = () => <Button size="small"> small button </Button>;
const buttonWithSize = () => (
  <>
    <Button size="small"> small button </Button>
    <Button size="large"> large button </Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button type="primary"> primary button </Button>
    <Button danger> danger button </Button>
    <Button type="link"> link button </Button>
  </>
);

storiesOf("Button按钮", module)
  // .addDecorator(withInfo)
  // .addParameters({
  //     info:{
  //         inline: true
  //     }
  // })
  .add("Button", defaultButton)
  .add("不同尺寸的Button", buttonWithSize)
  .add("不同类型的Button", buttonWithType);

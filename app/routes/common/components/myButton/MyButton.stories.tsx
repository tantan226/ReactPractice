import { Meta } from "@storybook/react-vite";
import { MyButton, MyButtonProps } from "./MyButton";

export default {
    title: "MyButton",
    component: MyButton,
    argTypes: {
        highlight: {
            control: "boolean"
        }
    },
    child: {
        control: "text"
    }
} as Meta<typeof MyButton>

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "ハイライトボタン",
    highlight: true,
}
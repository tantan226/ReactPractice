import { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './panel';

import { MyButton } from '../myButton/MyButton';

const meta: Meta<typeof Panel> = {
    component: Panel,
    argTypes: {
        activeStatus: { control: 'select' }
    }
} satisfies Meta<typeof Panel>;
export default meta;

// export const RenderPanel: (args: React.ComponentProps<typeof Panel>) => (
//     <Panel {...args }> <MyButton>Test</MyButton></Panel >);
// ;

export const Default: StoryObj<typeof Panel> = {
    args: {
        activeStatus: 'enabled',
        borderType: 'none'
    },
    render: (args) => (
        <Panel {...args}><MyButton>Test</MyButton></Panel>
    )
}

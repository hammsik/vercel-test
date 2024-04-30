import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Hello World',
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Defalt: Story = {
  args: {
    color: 'black',
    buttonSize: 'medium',
    outLine: true,
    isFullWidth: true,
    buttonClick: () => console.log('button has clicked'),
  },
};
// export const Blue: Story = {
//   args: {
//     color: 'sky',
//     buttonSize: 'large',
//     outLine: false,
    
//     buttonClick: () => console.log('button has clicked'),
//   },
// };
// export const Pink: Story = {
//   args: {
//     color: 'pink',
//     buttonSize: 'small',
//     outLine: true,
//     buttonClick: () => console.log('button has clicked'),
//   },
// };

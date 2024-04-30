import type { Meta, StoryObj } from '@storybook/react';
import Linear from './Linear';

const meta = {
  title: 'Example/LoadingAnime/Linear',
  component: Linear,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Linear>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Defalt: Story = {
  args: {
    linearSize: 'large',
    linearColor: 'sky',
  },
};
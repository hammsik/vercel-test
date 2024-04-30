import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta = {
  title: 'Example/LoadingAnime/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Defalt: Story = {
  args: {
    spinnerSize: 'medium',
    spinnerColor: 'sky',
  },
};
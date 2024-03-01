// stories/SBox.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import SBox from '../screens/main/Home/components/SBox';

const meta = {
  title: 'components/SBox',
  component: SBox,
} satisfies Meta<typeof SBox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    header: 'Hello World',
    bg: 'red',
  },
};

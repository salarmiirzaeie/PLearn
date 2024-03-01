// stories/Heading.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import Heading from '../components/Text/Heading';

const meta = {
  title: 'components/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    title: 'Hello World',
  },
};

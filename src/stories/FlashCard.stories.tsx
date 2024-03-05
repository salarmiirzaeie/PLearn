// stories/FlashCard.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import FlashCard from '../screens/main/Learn/components/FlashCard';

const meta = {
  title: 'components/FlashCard',
  component: FlashCard,
} satisfies Meta<typeof FlashCard>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {},
};

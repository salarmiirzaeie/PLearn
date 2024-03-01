// stories/PrimaryButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';

import Button from '../components/Button/Button';

const meta = {
  title: 'components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    title: 'Hello World',
    onPress: () => {
      console.log('object');
    },
  },
};

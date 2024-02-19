// stories/PrimaryButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';

import PrimaryButton from './PrimaryButton';

const meta = {
  title: 'components/PrimaryButton',
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Hello World',
    color: '#004CFF',
  },
};

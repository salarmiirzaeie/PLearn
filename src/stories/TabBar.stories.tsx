// stories/TabNavigator.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import TabBar from '../routes/tab-navigation/components/TabBar';

const meta = {
  title: 'components/TabBar',
  component: TabBar,
} satisfies Meta<typeof TabBar>;

export default meta;
const mockState = {
  index: 0,
  routeNames: ['Home', 'Profile'], // Add your tab names
  routes: [
    {key: 'Home', name: 'Home', params: {}},
    {key: 'Profile', name: 'Profile', params: {}},
  ],
};

const mockDescriptors = {
  Home: {options: {title: 'Home'}, navigation: {}},
  Profile: {options: {title: 'Profile'}, navigation: {}},
};

const mockNavigation = {
  navigate: () => {},
  addListener: () => {},
  isFocused: () => {},
};
type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    state: mockState,
    descriptors: mockDescriptors,
    navigation: mockNavigation,
  },
};

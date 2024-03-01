// CustomTabBar.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TabBar from './TabBar';
import {rendersWithProviders} from '../../../utils/test-utils';

const mockState = {
  index: 0,
  routeNames: ['Home', 'Profile'],
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
  navigate: jest.fn(),
  addListener: jest.fn(),
  isFocused: jest.fn(),
  emit: jest.fn(),
};

test('renders CustomTabBar correctly', () => {
  const {getByText} = rendersWithProviders(
    <TabBar
      state={mockState}
      descriptors={mockDescriptors}
      navigation={mockNavigation}
    />,
  );

  // You can write assertions based on your custom tab bar content.
  expect(getByText('Home')).toBeDefined();
  expect(getByText('Profile')).toBeDefined();
});

test('navigates to the correct tab on press', () => {
  const {getByText} = rendersWithProviders(
    <TabBar
      state={mockState}
      descriptors={mockDescriptors}
      navigation={mockNavigation}
    />,
  );

  fireEvent.press(getByText('Profile'));

  // Ensure that the navigate function was called with the correct arguments.
  expect(mockNavigation.emit).toHaveBeenCalledWith({
    type: 'tabPress',
    target: 'Profile',
  });
});

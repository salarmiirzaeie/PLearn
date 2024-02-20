// PrimaryButton.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';

test('PrimaryButton renders correctly', () => {
  const tree = renderer
    .create(<Button onPress={() => {}} title="Test Button" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

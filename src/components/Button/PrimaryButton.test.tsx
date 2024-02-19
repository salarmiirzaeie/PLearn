// PrimaryButton.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import PrimaryButton from './PrimaryButton';

test('PrimaryButton renders correctly', () => {
  const tree = renderer
    .create(<PrimaryButton onPress={() => {}} title="Test Button" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

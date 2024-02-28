// PrimaryButton.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';
import {renderWithProviders} from '../../utils/test-utils';

test('Button renders correctly', () => {
  const tree = renderWithProviders(
    <Button onPress={() => {}} title="Test Button" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

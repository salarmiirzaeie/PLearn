import React from 'react';
import {Preview} from '@storybook/react';
import {ThemeProvider, withTheme} from 'styled-components';
import theme from '../src/configs/theme';
import MainProvider from '../src/providers/main-provider';
const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        theme,
      },
    },
  },
  decorators: [
    Story => (
      <MainProvider>
        <Story />
      </MainProvider>
    ),
  ],
};

export default preview;

import React from 'react';
import MainProvider from './src/providers/main-provider';
import MainNavigation from './src/navigation/main-navigation/main-navigation';

function App() {
  return (
    <MainProvider>
      <MainNavigation />
    </MainProvider>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;

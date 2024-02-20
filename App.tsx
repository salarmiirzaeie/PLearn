import React from 'react';
import MainProvider from './src/providers/main-provider';
import RootNavigation from './src/routes/root-navigation/root-navigation';

function App() {
  return (
    <MainProvider>
      <RootNavigation />
    </MainProvider>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;

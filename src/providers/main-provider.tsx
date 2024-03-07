import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../store/store';
import {ThemeProvider} from 'styled-components/native';
import theme from '../configs/theme';
import Tts from 'react-native-tts';

interface Props {
  children: React.ReactNode;
}
const MainProvider: React.FC<Props> = ({children}) => {
  Tts.setDefaultLanguage('de-DE');
  Tts.setDefaultRate(0.5);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default MainProvider;

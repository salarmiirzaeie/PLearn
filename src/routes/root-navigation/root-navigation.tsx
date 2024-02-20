import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthNavigation from '../auth-navigation/auth-navigation';
import {rootStackParamList} from './root-navigationType';
import MainNavigation from '../main-navigation/main-navigation';
const Stack = createStackNavigator<rootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthNavigation} />
        {/* <Stack.Screen name="Main" component={MainNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

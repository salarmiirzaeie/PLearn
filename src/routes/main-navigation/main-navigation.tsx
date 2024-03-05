import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {mainStackParamList} from './main-navigationType';
import Home from '../../screens/main/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from '../tab-navigation/tab-navigation';
import Learn from '../../screens/main/Learn/Learn';
const Stack = createStackNavigator<mainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Learn" component={Learn} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

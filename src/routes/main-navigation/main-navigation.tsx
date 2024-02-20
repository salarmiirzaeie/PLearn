import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {mainStackParamList} from './main-navigationType';
import Home from '../../screens/main/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator<mainStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

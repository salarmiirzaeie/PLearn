import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNavigationParamList} from './tab-navigationType';
import Home from '../../screens/main/Home/Home';
import TabBar from './components/TabBar';
import Proccess from '../../screens/main/Preccess/Proccess';
import Settings from '../../screens/main/Settings/Settings';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components/native';
import HomeHeader from '../../screens/main/Home/components/HomeHeader';
const Tab = createBottomTabNavigator<tabNavigationParamList>();

const TabNavigation = ({navigation}: any) => {
  const theme = useTheme();
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            <Entypo
              name="graduation-cap"
              color={focused ? theme.colors.primary : theme.colors.gray}
              size={25}
            />
          ),
          header: () => <HomeHeader navigation={navigation} />,
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            <Entypo
              name="bar-graph"
              color={focused ? theme.colors.primary : theme.colors.gray}
              size={25}
            />
          ),
        }}
        name="proccess"
        component={Proccess}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name="settings-sharp"
              color={focused ? theme.colors.primary : theme.colors.gray}
              size={25}
            />
          ),
        }}
        name="settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {height} from '../../../configs/consts';
import styled from 'styled-components/native';
interface ITabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}
const TabNavigationContainer = styled(View)`
  height: ${height / 10}px;
  background-color: ${props => props.theme.colors.white};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-top-width: 1.5px;
  border-top-color: ${props => props.theme.colors.light};
  border-left-width: 1.5px;
  border-left-color: ${props => props.theme.colors.light};
  border-right-width: 1.5px;
  border-right-color: ${props => props.theme.colors.light};
  flex-direction: row;
`;
const TabNavigatorButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const TabBar: FC<ITabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <TabNavigationContainer>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const Icon = options.tabBarIcon;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && event && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabNavigatorButton onPress={onPress} key={index}>
            {Icon ? (
              Icon({
                focused: isFocused,
              })
            ) : (
              <Text style={{color: isFocused ? '#00f' : '#aaa'}}>{label}</Text>
            )}
          </TabNavigatorButton>
        );
      })}
    </TabNavigationContainer>
  );
};

export default TabBar;

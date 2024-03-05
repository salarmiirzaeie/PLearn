import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IIconProps} from './IconsType';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const RotateIcon: FC<IIconProps> = ({size, color}) => {
  return <MaterialCommunityIcons name="rotate-360" size={size} color={color} />;
};

export default RotateIcon;

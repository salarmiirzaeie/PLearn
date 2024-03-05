import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IIconProps} from './IconsType';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CheckIcon: FC<IIconProps> = ({size, color}) => {
  return <AntDesign name="check" size={size} color={color} />;
};

export default CheckIcon;

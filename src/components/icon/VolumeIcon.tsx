import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {IIconProps} from './IconsType';
import Feather from 'react-native-vector-icons/Feather';
const VolumeIcon: FC<IIconProps> = ({size, color}) => {
  return <Feather name="volume-2" size={size} color={color} />;
};

export default VolumeIcon;

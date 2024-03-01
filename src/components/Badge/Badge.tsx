import {View, Text} from 'react-native';
import React from 'react';
import {BadgeContainer} from '../../configs/styled-components';
interface Props {
  title: string;
  bg?: string;
}
const Badge: React.FC<Props> = ({title, bg}) => {
  return (
    <BadgeContainer bg={bg}>
      <Text style={{color: 'white'}}>{title}</Text>
    </BadgeContainer>
  );
};

export default Badge;

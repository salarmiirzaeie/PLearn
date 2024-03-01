import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  Avatar,
  FlagImg,
  RContainer,
} from '../../../../configs/styled-components';
import {HeaderContainer} from '../styles/styled-components';

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <FlagImg source={require('../../../../assets/img/flag.png')} />
      <Avatar size={35} source={require('../../../../assets/img/user.jpg')} />
    </HeaderContainer>
  );
};

export default HomeHeader;

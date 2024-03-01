import {View, Text} from 'react-native';
import React from 'react';
import {HeaderText, TextContainer} from '../../configs/styled-components';
interface IHeaderTextProps {
  title: string;
}

const Heading: React.FC<IHeaderTextProps> = ({title}) => {
  return (
    <TextContainer>
      <HeaderText>{title}</HeaderText>
    </TextContainer>
  );
};

export default Heading;

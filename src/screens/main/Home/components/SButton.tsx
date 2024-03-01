import {View, Text} from 'react-native';
import React from 'react';
import {
  ButtonText,
  SBoxContainer,
  SButtonContainer,
} from '../../../../configs/styled-components';
interface ISButtonProps {
  bg: string;
  title: string;
}
const SButton: React.FC<ISButtonProps> = ({bg, title}) => {
  return (
    <SButtonContainer color={bg}>
      <ButtonText>{title}</ButtonText>
    </SButtonContainer>
  );
};

export default SButton;

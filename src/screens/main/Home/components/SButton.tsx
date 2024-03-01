import {View, Text} from 'react-native';
import React from 'react';
import {ButtonText} from '../../../../configs/styled-components';
import {SButtonContainer} from '../styles/styled-components';
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

// PrimaryButton.tsx
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonContainer, ButtonText} from '../../configs/styled-components';

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  textColor?: string;
}

const Button: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  color,
  textColor,
}) => (
  <ButtonContainer color={color} onPress={onPress}>
    <ButtonText color={textColor}>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;

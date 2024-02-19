// PrimaryButton.tsx
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
interface ButtonContainerProps {
  color?: string; // پارامتر رنگ
}
const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  background-color: ${props => props.color || '#004CFF'};
  padding: 10px 20px;
  border-radius: 10px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  color,
}) => (
  <ButtonContainer color={color} onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default PrimaryButton;

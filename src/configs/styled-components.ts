import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface IButtonProps {
  color?: string;
}
export const ButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ButtonText = styled(Text)<IButtonProps>`
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  font-size: 16px;
  text-align: center;
`;

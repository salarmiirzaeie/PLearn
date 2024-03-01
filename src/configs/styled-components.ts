import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {height} from './consts';

interface IButtonProps {
  color?: string;
  w?: string;
}
export const ButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
`;
export const SButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
  width: ${height / 5.25}px;
`;

export const ButtonText = styled(Text)<IButtonProps>`
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  font-size: 16px;
  text-align: center;
`;
export const TextContainer = styled(View)`
  margin: 10px 5px;
`;
export const Container = styled(ScrollView)`
  flex: 1;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  flex-direction: column;
`;
export const RContainer = styled(View)`
  padding: 10px 10px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderText = styled(Text)`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-weight: bold;
`;
interface IBgProps {
  bg?: string;
}
export const SBoxContainer = styled(View)<IBgProps>`
  width: ${height / 5.25}px;
  height: ${height / 5.25}px;
  background-color: ${props =>
    props.bg ? props.bg : props.theme.colors.primary};
  border-radius: 20px;
  padding: 10px;
  align-items: center;
`;
export const SBoxHeader = styled(Text)`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;
export const BadgeContainer = styled(View)<IBgProps>`
  border-radius: 10px;
  background-color: ${props =>
    props.bg ? props.bg : props.theme.colors.primary};
  padding: 5px;
  margin: 10px;
`;

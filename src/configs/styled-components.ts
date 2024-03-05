import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
  padding: 10px 25px;
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  flex-direction: column;
`;
export const VContainer = styled(View)`
  flex: 1;
  padding: 10px 25px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: column;
`;
export const Center = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
`;
export const RContainer = styled(View)`
  padding: 10px 0px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
`;
export const Box = styled(View)<IColorProps>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.white};
  justify-content: center;
  align-items: center;
  flex: 1;

  border-radius: 20px;
`;
export const HeaderText = styled(Text)<IColorProps>`
  font-size: 20px;
  color: ${props => (props.color ? props.color : props.theme.colors.black)};
  text-align: center;
  font-weight: bold;
`;
export const BText = styled(Text)<IColorProps>`
  font-size: 20px;
  color: ${props => (props.color ? props.color : props.theme.colors.black)};
  text-align: center;
  font-weight: bold;
`;
interface IColorProps {
  color?: string;
}
export const PText = styled(Text)<IColorProps>`
  font-size: 15px;
  color: ${props => (props.color ? props.color : props.theme.colors.black)};
`;
interface IBgProps {
  bg?: string;
}
export const BadgeContainer = styled(View)<IBgProps>`
  border-radius: 10px;
  background-color: ${props =>
    props.bg ? props.bg : props.theme.colors.primary};
  padding: 5px;

  justify-content: space-between;
  align-items: center;
`;
export const Row = styled(View)`
  flex-direction: row;
  height: 100%;
`;
export const FlagImg = styled(Image)`
  width: 50px;
  height: 50px;
`;
interface IAvatarProps {
  size: number;
}
export const Avatar = styled(Image)<IAvatarProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100px;
`;

import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {height} from '../../../../configs/consts';

interface IBgProps {
  bg?: string;
}
export const SBoxContainer = styled(TouchableOpacity)<IBgProps>`
  width: ${height / 5.25}px;
  height: ${height / 5.25}px;
  background-color: ${props =>
    props.bg ? props.bg : props.theme.colors.primary};
  border-radius: 20px;
  padding-top: 5px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;
interface IButtonProps {
  color?: string;
  w?: string;
}
export const SBoxHeader = styled(Text)`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;
export const SButtonContainer = styled(TouchableOpacity)<IButtonProps>`
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
  width: ${height / 5.25}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  elevation: 5;
`;
export const TopicsCardContainer = styled(TouchableOpacity)`
  background-color: ${props => props.theme.colors.white};
  padding: 5px 5px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.light};
  height: ${height / 13}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const TopicsCardHeader = styled(View)`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 10px;
  color: ${props => props.theme.colors.white};
  height: 100%;
  justify-content: center;
  width: ${height / 13 - 10}px;
  border-radius: 12px;
  margin-right: 10px;
  align-items: center;
`;
export const HeaderContainer = styled(View)`
  background-color: ${props => props.theme.colors.white};
  padding: 5px 15px;
  justify-content: space-between;
  shadowoffset: {
    width: 0;
    height: 2;
  }
  shadowopacity: 0.25;
  elevation: 5;
  flex-direction: row;
  align-items: center;
`;

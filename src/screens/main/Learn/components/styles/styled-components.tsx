import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {height} from '../../../../../configs/consts';
import Animated from 'react-native-reanimated';

export const FlashCardContainer = styled(Animated.View)`
  border-radius: 20px;
  padding: 10px 30px;
  background-color: ${({theme}) => theme.colors.white};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray};
  margin: 0px 10px;
  width: ${height / 3}px;
  height: ${height / 2.5}px;
`;

export const Word = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;
export const FlashCardFooter = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.2;
`;
export const FlashCardListFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.4;
  width: ${height / 3}px;
`;
export const FlashCardListsHeader = styled(View)`
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: ${({theme}) => theme.colors.white};
  padding-vertical: 10px;
  shadow-color: ${({theme}) => theme.colors.black};
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

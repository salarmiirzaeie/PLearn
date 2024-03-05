import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {height} from '../../../../../configs/consts';
import Animated from 'react-native-reanimated';

export const FlashCardContainer = styled(Animated.View)`
  border-radius: 10px;
  padding: 10px 30px;
  background-color: white;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray};

  width: ${height / 2.5}px;
  height: ${height / 2}px;
`;

export const Word = styled(Text)`
  font-size: 25px;
  font-weight: bold;
`;
export const FlashCardFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.2;
`;
export const FlashCardHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.2;
`;

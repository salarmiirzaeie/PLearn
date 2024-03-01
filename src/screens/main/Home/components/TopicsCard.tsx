import {View, Text} from 'react-native';
import React from 'react';
import {
  TopicsCardContainer,
  TopicsCardHeader,
} from '../styles/styled-components';
import {
  BText,
  Box,
  PText,
  RContainer,
  Row,
} from '../../../../configs/styled-components';
import Heading from '../../../../components/Text/Heading';
import VerticalLinearProgress from '../../../../components/Progress/VerticalProgress';
import {height} from '../../../../configs/consts';
import {useTheme} from 'styled-components/native';
interface ITopicsCardProps {
  onPress?: () => void;
}
const TopicsCard: React.FC<ITopicsCardProps> = ({onPress}) => {
  const theme = useTheme();
  return (
    <TopicsCardContainer onPress={onPress}>
      <Row style={{alignItems: 'center'}}>
        <TopicsCardHeader>
          <BText color={theme.colors.white}>A1</BText>
        </TopicsCardHeader>
        <PText>َAlphabet</PText>
      </Row>
      <Row style={{alignItems: 'center'}}>
        <PText style={{marginRight: 5}}>14/24</PText>
        <VerticalLinearProgress height={height / 15} progress={40} width={3} />
      </Row>
    </TopicsCardContainer>
  );
};

export default TopicsCard;

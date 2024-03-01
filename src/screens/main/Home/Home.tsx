import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  Container,
  HeaderText,
  RContainer,
} from '../../../configs/styled-components';
import {useTheme} from 'styled-components/native';
import Badge from '../../../components/Badge/Badge';
import {CircleProgress} from '../../../components/Progress/CircleProgress';
import SBox from './components/SBox';
import SButton from './components/SButton';
import Heading from '../../../components/Text/Heading';
import TopicsList from './components/TopicsList';

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Heading title="Welcome back!" />
      <RContainer>
        <SBox
          onPress={() => {}}
          header="Learn New Words"
          bg={theme.colors.secondary}>
          <CircleProgress
            progressPercent={65}
            strokeWidth={10}
            size={80}
            text="6/8"
            bgColor={theme.colors.darkSecondary}
            pgColor={theme.colors.white}
          />
        </SBox>
        <SBox header="Your Progress">
          <Badge bg={theme.colors.darkPrimary} title="1 Day" />
          <Image
            source={require('../../../assets/img/Success.png')}
            style={{width: 150, height: 90}}
          />
        </SBox>
      </RContainer>
      <RContainer>
        <SButton bg={theme.colors.dark} title="Learn Words" />
        <SButton bg={theme.colors.green} title="Repeat Words" />
      </RContainer>
      <Heading title="My progress in topics" />
      <TopicsList />
    </Container>
  );
};

export default Home;

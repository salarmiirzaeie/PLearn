import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {
  Container,
  HeaderText,
  RContainer,
} from '../../../configs/styled-components';
import {useTheme} from 'styled-components/native';
import Badge from '../../../components/Badge/Badge';
import Button from '../../../components/Button/Button';
import {CircleProgress} from './components/CircleProgress';
import SBox from './components/SBox';
import SButton from './components/SButton';
import Heading from '../../../components/Text/Heading';

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Heading title="Welcome back!" />
      <RContainer>
        <SBox header="Learn New Words" bg={theme.colors.secondary}>
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
        </SBox>
      </RContainer>
      <RContainer>
        <SButton bg={theme.colors.dark} title="Learn Words" />
        <SButton bg={theme.colors.green} title="Repeat Words" />
      </RContainer>
      <Heading title="My progress in topics" />
    </Container>
  );
};

export default Home;

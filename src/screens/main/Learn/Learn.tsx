import {View, Text} from 'react-native';
import React from 'react';
import {
  Center,
  Container,
  VContainer,
} from '../../../configs/styled-components';
import FlashCard from './components/FlashCard';

const Learn = () => {
  return (
    <VContainer>
      <Center>
        <FlashCard />
      </Center>
    </VContainer>
  );
};

export default Learn;

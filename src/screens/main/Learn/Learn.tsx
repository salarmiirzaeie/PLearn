import {
  View,
  Text,
  ProgressBarAndroidBase,
  ProgressBarAndroidComponent,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  Center,
  Container,
  NPContainer,
  Row,
  VContainer,
} from '../../../configs/styled-components';
import FlashCard from './components/FlashCard';
import FlashCardList from './components/FlashCardList';
import LearnProgressBar from '../../../components/Progress/LearnProgressBar';
import Button from '../../../components/Button/Button';
import CloseIcon from '../../../components/icon/CloseIcon';
import {FlashCardListsHeader} from './components/styles/styled-components';

const Learn = () => {
  const words = [
    {
      id: 0,
      word: 'Word 0',
      translate: 'کلمه 0',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 1,
      word: 'Word 1',
      translate: 'کلمه 1',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 2,
      word: 'Word 2',
      translate: 'کلمه 2',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 3,
      word: 'Word 3',
      translate: 'کلمه 3',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 4,
      word: 'Word 4',
      translate: '4',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 5,
      word: 'Word 5',
      translate: '5',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
    {
      id: 6,
      word: 'Word 0',
      translate: 'کلمه 0',
      pronunciation: '/wɜːd/',
      example: 'Example 1',
    },
  ];
  return (
    <NPContainer>
      <LearnProgressBar progress={20} />

      <Center>
        <FlashCardList data={words} />
      </Center>
    </NPContainer>
  );
};

export default Learn;

import {
  View,
  Text,
  ProgressBarAndroidBase,
  ProgressBarAndroidComponent,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {
  concat,
  delay,
  filter,
  from,
  interval,
  map,
  mergeMap,
  of,
  scan,
  startWith,
  Subject,
  takeWhile,
} from 'rxjs';

let numbersObservable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let squaredOfNumbers = numbersObservable.pipe(
  filter(x => x > 1),
  mergeMap(x => from([x]).pipe(delay(2000))),
  map(x => x + 1),
);
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
  const countDown$ = interval(2000).pipe(
    startWith(14),
    scan(acc => acc - 1),
    takeWhile(x => x >= 0),
  );
  const actions$ = new Subject();
  const observable$ = concat(countDown$, of('Time is up'));

  const [time, setTime] = useState<any>(0);
  useEffect(() => {
    const sub = observable$.subscribe(time => setTime(time));
    return () => sub.unsubscribe();
  }, []);

  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    const sub = squaredOfNumbers.subscribe(x => setCurrentNumber(x));
    return () => sub.unsubscribe();
  }, []);
  return (
    <NPContainer>
      <LearnProgressBar progress={20} />
      <Text>{time}</Text>
      <Text>{currentNumber}</Text>
      <Button onPress={() => actions$.next('Stopped')} title="Stop" />
      <Center>
        <FlashCardList data={words} />
      </Center>
    </NPContainer>
  );
};

export default Learn;

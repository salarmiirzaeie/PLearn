import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FlashCard from './FlashCard';
import {width} from '../../../../configs/consts';
import {FlashCardFooter, FlashCardListFooter} from './styles/styled-components';
import {IconButton} from '../../../../configs/styled-components';
import CloseIcon from '../../../../components/icon/CloseIcon';
import {useTheme} from 'styled-components/native';
import CheckIcon from '../../../../components/icon/CheckIcon';
interface FlashCardDataType {
  id: number;
  word: string;
  translate: string;
  pronunciation: string;
  example: string;
}
interface IFlashCardListProps {
  data: FlashCardDataType[];
}

const FlashCardList: React.FC<IFlashCardListProps> = ({data}) => {
  const flatListRef = useRef<FlatList<FlashCardDataType> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const scrollToNextCard = () => {
    if (flatListRef.current && currentIndex < data.length - 2) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
        viewPosition: 0.5, // 0.5 centers the card on the screen
      });
      setCurrentIndex(nextIndex);
    }
  };
  return (
    <>
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <FlashCard nextCard={scrollToNextCard} item={item} />
        )}
        onMomentumScrollEnd={event => {
          const nextIndex = Math.round(
            event.nativeEvent.contentOffset.x / width,
          );
          setCurrentIndex(nextIndex);
        }}
      />
      <FlashCardListFooter>
        <IconButton onPress={scrollToNextCard}>
          <CloseIcon color={theme.colors.secondary} size={30} />
        </IconButton>

        <IconButton onPress={scrollToNextCard}>
          <CheckIcon color={theme.colors.primary} size={30} />
        </IconButton>
      </FlashCardListFooter>
    </>
  );
};

export default FlashCardList;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

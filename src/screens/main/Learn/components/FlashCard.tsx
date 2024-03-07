import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  FlashCardContainer,
  FlashCardFooter,
  Word,
} from './styles/styled-components';
import {
  BText,
  Center,
  Container,
  IconButton,
  PText,
} from '../../../../configs/styled-components';
import CloseIcon from '../../../../components/icon/CloseIcon';
import CheckIcon from '../../../../components/icon/CheckIcon';
import {useTheme} from 'styled-components/native';
import RotateIcon from '../../../../components/icon/RotateIcon';
import VolumeIcon from '../../../../components/icon/VolumeIcon';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import Tts from 'react-native-tts';
interface IFlashCardProps {
  item: {
    word: string;
    translate: string;
    pronunciation: string;
    example: string;
  };
  nextCard: () => void;
}
const FlashCard: React.FC<IFlashCardProps> = ({item}) => {
  const theme = useTheme();
  const rotationCard = useSharedValue(0);
  const rotationContent = useSharedValue(0);
  const [word, setWord] = useState(item.word);
  const [showExamples, setShowExamples] = useState(false);
  const startRotationAnimation = () => {
    rotationCard.value = withTiming(rotationCard.value === 0 ? 180 : 0, {
      duration: 500,
      easing: Easing.linear,
    });
    rotationContent.value = withTiming(rotationContent.value === 0 ? -180 : 0, {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const rotatingBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotationCard.value}deg`}],
    };
  });
  const rotatingContentStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotationContent.value}deg`}],
    };
  });

  useAnimatedReaction(
    () => rotationCard.value,
    (newValue, oldValue) => {
      if (newValue < 90) {
        runOnJS(setWord)(item.word);
      } else {
        runOnJS(setWord)(item.translate);
      }
    },
    [rotationCard],
  );

  const speakWords = () => {
    Tts.speak('Guten Tag, wie geht es Ihnen?');
  };
  return (
    <FlashCardContainer style={rotatingBoxStyle}>
      {!showExamples ? (
        <Center>
          <Animated.View style={rotatingContentStyle}>
            <Word>{word}</Word>
            <PText
              style={{marginTop: 10, textAlign: 'center'}}
              color={theme.colors.gray}>
              {item.pronunciation}
            </PText>
          </Animated.View>
        </Center>
      ) : (
        <View style={{backgroundColor: theme.colors.white, flex: 1}}>
          <Animated.View style={rotatingContentStyle}>
            <BText color={theme.colors.black}>xsxs</BText>
            <PText color={theme.colors.gray}>{item.example}</PText>
          </Animated.View>
        </View>
      )}

      <FlashCardFooter style={rotatingContentStyle}>
        <Pressable
          style={{padding: 10}}
          onPress={() => setShowExamples(!showExamples)}>
          <BText color={theme.colors.gray}>EX</BText>
        </Pressable>

        <Pressable
          style={{padding: 10}}
          onPress={() => {
            startRotationAnimation();
            setShowExamples(false);
          }}>
          <RotateIcon color={theme.colors.gray} size={35} />
        </Pressable>
        <Pressable style={{padding: 10}} onPress={speakWords}>
          <VolumeIcon color={theme.colors.gray} size={30} />
        </Pressable>
      </FlashCardFooter>
    </FlashCardContainer>
  );
};

export default FlashCard;

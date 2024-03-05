import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  FlashCardContainer,
  FlashCardFooter,
  FlashCardHeader,
  Word,
} from './styles/styled-components';
import {BText, Center, PText} from '../../../../configs/styled-components';
import CloseIcon from '../../../../components/icon/CloseIcon';
import CheckIcon from '../../../../components/icon/CheckIcon';
import {useTheme} from 'styled-components/native';
import RotateIcon from '../../../../components/icon/RotateIcon';
import VolumeIcon from '../../../../components/icon/VolumeIcon';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const FlashCard = () => {
  const theme = useTheme();
  const rotation = useSharedValue(0);

  const startRotationAnimation = () => {
    rotation.value = withTiming(180, {duration: 1000, easing: Easing.linear});
  };

  const rotatingBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotation.value}deg`}],
    };
  });

  return (
    <FlashCardContainer style={rotatingBoxStyle}>
      <FlashCardHeader>
        <VolumeIcon color={theme.colors.gray} size={30} />

        <BText>EX</BText>
      </FlashCardHeader>
      <Center>
        {rotation.value < 90 ? <Word>Word</Word> : <Word>معنی</Word>}
      </Center>
      <FlashCardFooter>
        <CheckIcon color={theme.colors.green} size={30} />
        <Pressable onPress={startRotationAnimation}>
          <RotateIcon color={theme.colors.gray} size={35} />
        </Pressable>
        <CloseIcon color={theme.colors.red} size={30} />
      </FlashCardFooter>
    </FlashCardContainer>
  );
};

export default FlashCard;

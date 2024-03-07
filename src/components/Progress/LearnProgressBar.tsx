import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  BText,
  PText,
  ProgressBar,
  ProgressBarContainer,
} from '../../configs/styled-components';
interface IProps {
  progress: number;
  color?: string;
}
const LearnProgressBar: React.FC<IProps> = ({progress, color}) => {
  return (
    <View style={{padding: 10}}>
      <ProgressBarContainer>
        <ProgressBar progress={progress} color={color} />
      </ProgressBarContainer>
      {/* <PText style={{textAlign: 'center', color: 'gray'}}>25/120</PText> */}
    </View>
  );
};

export default LearnProgressBar;

import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Rect, LinearGradient, Stop} from 'react-native-svg';
import {useTheme} from 'styled-components/native';
interface IProps {
  progress: number;
  height: number;
  width: number;
}
const VerticalLinearProgress: React.FC<IProps> = ({
  progress,
  height,
  width,
}) => {
  const barHeight = (progress / 100) * height;
  const theme = useTheme();
  return (
    <View style={{width, height, justifyContent: 'flex-end'}}>
      <Svg height={height} width={width}>
        {/* Solid color for the progress bar */}

        <Rect width={width} height={height} fill={theme.colors.secondary} />
        <Rect width={width} height={barHeight} fill="#E0E0E0" />
      </Svg>
    </View>
  );
};
export default VerticalLinearProgress;

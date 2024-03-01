import React from 'react';
import {View, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import {height} from '../../configs/consts';
interface IProps {
  size: number;
  strokeWidth: number;
  text: string;
  progressPercent: number;
  bgColor?: string;
  pgColor?: string;
}
export const CircleProgress: React.FC<IProps> = ({
  size,
  strokeWidth,
  text,
  progressPercent,
  bgColor,
  pgColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;

  return (
    <View style={{margin: 10}}>
      <Svg width={size} height={size}>
        <Circle
          stroke={bgColor ? bgColor : '#f2f2f2'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        <Circle
          stroke={pgColor ? pgColor : '#3b5998'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />

        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            fontFamily: 'B Yekan',
            marginTop: 25,
            fontWeight: 'bold',
          }}>
          {text}
        </Text>
      </Svg>
    </View>
  );
};

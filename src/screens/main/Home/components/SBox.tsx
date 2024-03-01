import {View, Text} from 'react-native';
import React from 'react';
import {SBoxContainer, SBoxHeader} from '../styles/styled-components';
interface ISBoxProps extends React.PropsWithChildren {
  header: string;
  bg?: string;
  onPress?: () => void;
}
const SBox: React.FC<ISBoxProps> = ({header, children, bg, onPress}) => {
  return (
    <SBoxContainer onPress={onPress} bg={bg}>
      <SBoxHeader>{header}</SBoxHeader>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          paddingTop: 10,
        }}>
        {children}
      </View>
    </SBoxContainer>
  );
};

export default SBox;

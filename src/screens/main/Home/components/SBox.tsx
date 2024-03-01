import {View, Text} from 'react-native';
import React from 'react';
import {SBoxContainer, SBoxHeader} from '../../../../configs/styled-components';
interface ISBoxProps extends React.PropsWithChildren {
  header: string;
  bg?: string;
}
const SBox: React.FC<ISBoxProps> = ({header, children, bg}) => {
  return (
    <SBoxContainer bg={bg}>
      <SBoxHeader>{header}</SBoxHeader>
      {children}
    </SBoxContainer>
  );
};

export default SBox;

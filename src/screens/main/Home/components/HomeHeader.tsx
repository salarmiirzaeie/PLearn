import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {
  Avatar,
  FlagImg,
  RContainer,
  Row,
} from '../../../../configs/styled-components';
import {HeaderContainer} from '../styles/styled-components';
import {rxjsStore} from '../../../../store/rxjsStore';
interface IHomeHeaderProps {
  navigation: any;
}

const HomeHeader: React.FC<IHomeHeaderProps> = ({navigation}) => {
  const [language, setLanguage] = React.useState<string>('');
  useEffect(() => {
    rxjsStore.getAppLanguage().subscribe(c => setLanguage(c));
  }, []);

  return (
    <HeaderContainer>
      <Pressable onPress={() => navigation.navigate('SelectLanguage')}>
        <Row>
          <FlagImg source={require('../../../../assets/img/flag.png')} />
          <Text>{language}</Text>
        </Row>
      </Pressable>

      <Avatar size={35} source={require('../../../../assets/img/user.jpg')} />
    </HeaderContainer>
  );
};

export default HomeHeader;

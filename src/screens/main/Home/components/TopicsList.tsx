import {View, Text} from 'react-native';
import React from 'react';
import TopicsCard from './TopicsCard';
import {useNavigation} from '@react-navigation/native';
import {
  HomeScreenNavigationProp,
  HomeScreenProps,
} from '../../../../routes/main-navigation/main-navigationType';

const TopicsList: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{marginTop: 15}}>
      <TopicsCard onPress={() => navigation.navigate('Learn')} />
      <TopicsCard />
      <TopicsCard />
      <TopicsCard />
      <TopicsCard />
      <TopicsCard />
      <TopicsCard />
      <TopicsCard />
    </View>
  );
};

export default TopicsList;

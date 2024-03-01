import {View, Text} from 'react-native';
import React from 'react';
import TopicsCard from './TopicsCard';

const TopicsList = () => {
  return (
    <View style={{marginTop: 15}}>
      <TopicsCard />
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

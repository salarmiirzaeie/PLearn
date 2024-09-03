import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {Container} from '../../../configs/styled-components';
import {rxjsStore} from '../../../store/rxjsStore';

const SelectLanguage = () => {
  const setMainAppLanguage = (val: string) => {
    rxjsStore.setAppLanguage(val);
  };
  const languages = [
    'English',
    'German',
    'Russian',
    'French',
    'Spanish',
    'Arabic',
  ];
  const renderItem = useCallback(
    ({item}: {item: string}) => (
      <Pressable
        style={{padding: 10, marginTop: 10, backgroundColor: 'red'}}
        onPress={() => setMainAppLanguage(item)}>
        <Text>{item}</Text>
      </Pressable>
    ),
    [],
  );
  return (
    <View>
      <Text>SelectLanguage</Text>
      <FlatList
        keyExtractor={item => item}
        renderItem={renderItem}
        data={languages}
      />
    </View>
  );
};

export default SelectLanguage;

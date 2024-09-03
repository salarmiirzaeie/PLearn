import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Container,
  HeaderText,
  RContainer,
} from '../../../configs/styled-components';
import {useTheme} from 'styled-components/native';
import Badge from '../../../components/Badge/Badge';
import {CircleProgress} from '../../../components/Progress/CircleProgress';
import SBox from './components/SBox';
import SButton from './components/SButton';
import Heading from '../../../components/Text/Heading';
import TopicsList from './components/TopicsList';
import {
  HomeScreenNavigationProp,
  HomeScreenProps,
} from '../../../routes/main-navigation/main-navigationType';
import {rxjsStore} from '../../../store/rxjsStore';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  share,
} from 'rxjs';
const getPokemonByName = async (name: string) => {
  const {results: allPokemons} = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=1000`,
  ).then(res => res.json());
  return allPokemons.filter((item: {name: string}) => item.name.includes(name));
};
let newSearchSubject = new BehaviorSubject('');
let searchResultObservable = newSearchSubject.pipe(
  filter(searchValue => searchValue.length > 0),
  debounceTime(300),
  distinctUntilChanged(),
  mergeMap(searchValue => getPokemonByName(searchValue)),
  // map(data => data.map((item: any) => item.name)),
  // share(),
);

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (text: string) => {
    console.log(text);
    const newValue = text;
    setSearch(newValue);
    newSearchSubject.next(newValue);
  };
  useEffect(() => {
    searchResultObservable.subscribe(result => {
      console.log(result);
      setSearchResult(result);
    });
  }, [search]);
  return (
    <Container>
      <Heading title="Welcome back!" />
      <RContainer>
        <SBox
          onPress={() => {}}
          header="Learn New Words"
          bg={theme.colors.secondary}>
          <CircleProgress
            progressPercent={65}
            strokeWidth={10}
            size={80}
            text="6/8"
            bgColor={theme.colors.darkSecondary}
            pgColor={theme.colors.white}
          />
        </SBox>
        <SBox header="Your Progress">
          <Badge bg={theme.colors.darkPrimary} title="1 Day" />
          <Image
            source={require('../../../assets/img/Success.png')}
            style={{width: 150, height: 90}}
          />
        </SBox>
      </RContainer>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={search}
        onChangeText={handleSearch}
        placeholder="Search"
      />
      {searchResult.map((item: any) => (
        <Text>{item.name}</Text>
      ))}
      <RContainer>
        <SButton bg={theme.colors.dark} title="Learn Words" />
        <SButton bg={theme.colors.green} title="Repeat Words" />
      </RContainer>
      <Heading title="My progress in topics" />
      <TopicsList navigation={navigation} />
    </Container>
  );
};

export default Home;

// React Imports
import { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from './styles';

// Images
import logoImg from '../../assets/logo-nlw-esports.png'

// Components
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch('http://192.168.100.108:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl});
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}/>
        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'/>

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
          <GameCard onPress={() => handleOpenGame(item)} data={item}/>)}
          horizontal
          showsHorizontalScrollIndicator
          showsVerticalScrollIndicator
          contentContainerStyle={styles.contentList}/>
      </SafeAreaView>
    </Background>
  );
}
// React Imports
import { View, Image, FlatList } from 'react-native';

// Styles
import { styles } from './styles';

// Images
import logoImg from '../../assets/logo-nlw-esports.png'

// Components
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

// Controllers
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>
      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'/>

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard data={item}/>
          )}
        horizontal
        showsHorizontalScrollIndicator
        showsVerticalScrollIndicator
        contentContainerStyle={styles.contentList}
      />


      
    </View>
  );
}
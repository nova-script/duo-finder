// React
import { Image, View, TouchableOpacity, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

// Icons
import { Entypo } from '@expo/vector-icons';

// Images
import logoImg from '../../assets/logo-nlw-esports.png';

// Components
import { Background } from '../../components/Background';
import { DuoMatch } from '../../components/DuoMatch';

// Styles
import { styles } from './styles';
import { THEME } from '../../theme';

// @types
import { GameParams } from '../../@types/navigation';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';


export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }



  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.100.108:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => {setDiscordSelected(data.discord)});
  }

  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  useEffect(() => {
    fetch(`http://192.168.100.108:3333/games/${game.id}/ads`)
    .then(response => response.json())
    .then(data => {
      setDuos(data)
    });
  });

  const [discordSelected, setDiscordSelected] = useState('');

  return (
      <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo name="chevron-thin-left" size={24} color={THEME.COLORS.CAPTION_300}/>
            </TouchableOpacity>

            <Image source={logoImg} style={styles.logo}/>

            <View style={styles.right}></View>
          </View>

          <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode='cover'/>

          <Heading title={game.title} subtitle="Conecte-se e comece a jogar!"/>

          

          <FlatList
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DuoCard data={item} onConnect={() => getDiscordUser(item.id)}/>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.containerList}
            contentContainerStyle={styles.contentList}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anúncios publicados ainda.
              </Text>
            )}
          />

          <DuoMatch
            visible={discordSelected.length > 0}
            discord={discordSelected}
            onClose={() => setDiscordSelected('')}/>

        </SafeAreaView>
    </Background>
  );
}
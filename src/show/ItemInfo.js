import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import {TagsList} from './TagsList';

const {width} = Dimensions.get('window');

export function ItemInfo({scrollTo}) {
  return (
    <View>
      <Text style={styles.title}>Costela de Adão</Text>
      <Text style={styles.distance}>10 quilômetros daqui</Text>
      <View style={styles.userWrapper}>
        <Pressable
          style={styles.aboutWrapper}
          onPress={() => scrollTo(width + 80)}>
          <FontAwesomeIcon icon={faChevronDown} color={'gray'} />
          <Text style={styles.about}>Detalhes</Text>
        </Pressable>
        <Text style={styles.about}>
          pertence a <Text style={styles.userName}> Ulisses Albuquerque</Text>
        </Text>
        <TagsList />
        <View style={styles.aboutWrapper}>
          <FontAwesomeIcon icon={faChevronDown} color={'gray'} />
          <Text style={styles.about}>Descrição</Text>
        </View>
        <Text style={styles.about}>
          Uma planta bem bonita que serve pra fazer marmita. Uma planta
          ornamental pra embelezar o seu quintal. Uma planta da medicina pra
          ajudar na dopamina. Uma planta de sombra pra... fiquei sem rimas,
          brincadeira só tirando onda
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginTop: 10,
    marginHorizontal: 10,
  },
  distance: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  about: {
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  aboutWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
});

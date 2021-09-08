import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  faHome,
  faMap,
  faComments,
  faUserFriends,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';
import {FooterButton} from './FooterButton';
import {FooterMainButton} from './FooterMainButton';

export function FooterNavigation({selected}) {
  return (
    <View style={styles.container}>
      <FooterButton
        route="Home"
        text="Início"
        icon={faHome}
        selected={selected}
      />
      <FooterButton
        route="Publish"
        icon={faCamera}
        selected={selected}
        // doubleClickRoute={'Camera'}
      />
      <FooterButton
        route="ChatsList"
        text="Conversas"
        icon={faComments}
        selected={selected}
      />
      {/*<FooterButton*/}
      {/*  route="Community"*/}
      {/*  text="Postagens"*/}
      {/*  icon={faUserFriends}*/}
      {/*  selected={selected}*/}
      {/*/>*/}
      {/*<FooterButton route="Map" text="Mapa" icon={faMap} selected={selected} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

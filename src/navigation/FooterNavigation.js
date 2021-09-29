import React from 'react';
import {StyleSheet, View} from 'react-native';
import {faHome, faComments, faCamera} from '@fortawesome/free-solid-svg-icons';
import {FooterButton} from './FooterButton';
export function FooterNavigation({selected}) {
  return (
    <View style={styles.container}>
      <FooterButton
        route="Home"
        text="Início"
        icon={faHome}
        selected={selected}
      />
      <FooterButton route="Publish" icon={faCamera} selected={selected} />
      <FooterButton
        route="ChatsList"
        text="Conversas"
        icon={faComments}
        selected={selected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

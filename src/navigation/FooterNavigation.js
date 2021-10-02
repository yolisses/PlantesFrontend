import React from 'react';
import {StyleSheet, View} from 'react-native';
import {faHome, faCamera} from '@fortawesome/free-solid-svg-icons';
import {FooterButton} from './FooterButton';
import {UserRoundImage} from 'common/UserRoundImage';
import {auth} from 'auth/auth';
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
      <UserRoundImage size={30} userId={auth.userId} image={auth.user?.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    elevation: 3,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

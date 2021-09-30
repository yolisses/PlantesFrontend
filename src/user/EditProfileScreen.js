import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {auth} from 'auth/auth';
import {UserRoundImage} from 'common/UserRoundImage';
import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {NextButton} from 'publish/NextButton';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {width} from 'utils/width';

export function EditProfileScreen() {
  console.error(auth.user);
  return (
    <>
      <CustomHeader
        left={<BackButton />}
        title="Editar perfil"
        right={<NextButton text="Salvar" hideIcon />}
      />
      <ScrollView style={styles.container}>
        <FastImage
          disableNavigate
          style={styles.image}
          source={{uri: auth?.user?.image}}
        />
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.link}>Alterar foto do perfil</Text>
        </TouchableOpacity>
        <TextInput id="userName" data={{}} label="Nome" />
        <TextInput id="description" data={{}} label="Descrição" multiline />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  image: {
    height: 96,
    aspectRatio: 1,
    borderRadius: 100,
    alignSelf: 'center',
  },
  link: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 10,
    color: 'dodgerblue',
  },
});

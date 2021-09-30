import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {auth} from 'auth/auth';
import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {CustomHeader} from 'publish/CustomHeader';

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
        <TextInput
          data={{}}
          label="Nome"
          id="userName"
          customGetInitialValue={() => auth.user.name}
        />
        <TextInput
          multiline
          data={{}}
          id="description"
          label="Descrição"
          customGetInitialValue={() => auth.user.description}
        />
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

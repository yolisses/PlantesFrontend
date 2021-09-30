import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {auth} from 'auth/auth';
import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {CustomHeader} from 'publish/CustomHeader';
import {api} from 'api';
import {useObserver} from 'mobx-react-lite';
import {editProfileData} from './editProfileData';
import {useNavigation} from '@react-navigation/core';

export function EditProfileScreen() {
  const {goBack} = useNavigation();
  return useObserver(() => {
    function updateProfile() {
      console.error(editProfileData);
      api
        .put('/update-profile', editProfileData)
        .then(res => {
          console.error(res.data);
          auth.user = res.data;
          goBack();
        })
        .catch(err => console.error(err.response));
    }

    return (
      <>
        <CustomHeader
          left={<BackButton />}
          title="Editar perfil"
          right={
            <NextButton text="Salvar" hideIcon customOnPress={updateProfile} />
          }
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
          <TextInput label="Nome" id="name" data={editProfileData} />
          <TextInput
            multiline
            id="description"
            label="Descrição"
            data={editProfileData}
          />
        </ScrollView>
      </>
    );
  });
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

import React, {useEffect, useState} from 'react';
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
import {useUserById} from 'common/UsersByIdContext';
import {observe} from 'mobx';
import {CepInput} from 'form/CepInput';

export function EditProfileScreen() {
  const [saving, setSaving] = useState(false);
  const {goBack} = useNavigation();
  const {setCurrentUser} = useUserById();

  return useObserver(() => {
    async function updateProfile() {
      setSaving(true);
      api
        .put('/update-profile', editProfileData)
        .then(res => {
          auth.user = res.data;
          setCurrentUser(res.data);
          setSaving(false);
          goBack();
        })
        .catch(err => console.error(err.response));
    }

    useEffect(() => {
      observe(editProfileData, () => {});
    }, []);

    function validateName({setError, value}) {
      console.error(value);
      if (!value || value.length < 3) {
        setError('O nome precisa de no mínimo 3 letras');
      } else {
        setError();
      }
    }

    function relieveName({setError}) {
      setError();
    }
    return (
      <>
        <CustomHeader
          left={<BackButton />}
          title="Editar perfil"
          right={
            <NextButton
              text={saving ? 'Salvando...' : 'Salvar'}
              hideIcon
              customOnPress={updateProfile}
            />
          }
        />
        <ScrollView style={styles.container}>
          <FastImage
            disableNavigate
            style={styles.image}
            source={{uri: auth?.user?.image}}
          />
          {/* <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.link}>Alterar foto do perfil</Text>
          </TouchableOpacity> */}
          <TextInput
            id="name"
            label="Nome"
            blurValidate={validateName}
            textValidate={relieveName}
            data={editProfileData}
            customGetInitialValue={() => auth?.user?.name}
          />
          <CepInput
            id="cep"
            data={editProfileData}
            customGetInitialValue={() => auth?.user?.cep}
          />
          <TextInput
            multiline
            id="description"
            maxLength={400}
            label="Descrição"
            data={editProfileData}
            customGetInitialValue={() => auth?.user?.description}
          />
        </ScrollView>
      </>
    );
  });
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
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

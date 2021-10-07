import React, {createRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {ScrollView, StyleSheet} from 'react-native';

import {auth} from 'auth/auth';
import {TextInput} from 'form/TextInput';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {CustomHeader} from 'publish/CustomHeader';
import {api} from 'api';
import {useNavigation} from '@react-navigation/core';
import {useUserById} from 'common/UsersByIdContext';
import {Keyboard} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {IconPlaceholder} from './IconPlaceholder';
import {IntInput} from 'form/IntInput';
import {CheckButton} from './CheckButton';

export function EditProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [saving, setSaving] = useState(false);
  const {goBack} = useNavigation();
  const {setCurrentUser} = useUserById();

  const ref = createRef();

  async function onSubmit(value) {
    Keyboard.dismiss();
    ref?.current?.focus();
    setSaving(true);
    api
      .put('/update-profile', value)
      .then(res => {
        auth.user = res.data;
        setCurrentUser(res.data);
        setSaving(false);
        goBack();
      })
      .catch(err => {
        setSaving(false);
        console.error(err.response);
      });
  }

  function validateName({setError, id, data, text}) {
    if (!text || text.length < 3) {
      data.errors[id] = true;
      setError('O nome precisa de no mínimo 3 letras');
    } else {
      setError();
      data.errors[id] = false;
    }
  }

  return (
    <>
      <CustomHeader
        left={<BackButton />}
        title="Editar perfil"
        right={
          <NextButton
            hideIcon
            ref={ref}
            onPress={handleSubmit(onSubmit)}
            text={saving ? 'Salvando...' : 'Salvar'}
          />
        }
      />
      <ScrollView style={styles.container}>
        <FastImage
          disableNavigate
          style={styles.image}
          source={{uri: auth?.user?.image}}
        />

        <Controller
          name="name"
          control={control}
          defaultValue={auth?.user?.name}
          rules={{
            required: {
              value: true,
              message: 'Por favor, nome com pelo menos 3 letras',
            },
            minLength: {
              value: 3,
              message: 'Por favor, nome com pelo menos 3 letras',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Nome"
              value={value}
              maxLength={40}
              onBlur={onBlur}
              onChangeText={onChange}
              textValidate={validateName}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="whatsappNumber"
          defaultValue={auth?.user?.whatsappNumber}
          render={({field: {onChange, onBlur, value}}) => (
            <IntInput
              value={value}
              maxLength={14}
              onBlur={onBlur}
              label="Whatsapp"
              onChangeText={onChange}
              textValidate={validateName}
              error={errors.name?.message}
              rightChild={<CheckButton phoneNumber={value} />}
              leftChild={<IconPlaceholder icon={faWhatsapp} />}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          defaultValue={auth?.user?.description}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              optional
              multiline
              value={value}
              maxLength={400}
              onBlur={onBlur}
              label="Descrição"
              onChangeText={onChange}
              textValidate={validateName}
              error={errors.price?.message}
            />
          )}
        />
      </ScrollView>
    </>
  );
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
});

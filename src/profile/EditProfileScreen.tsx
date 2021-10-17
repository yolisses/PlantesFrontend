import {Keyboard} from 'react-native';
import {useQueryClient} from 'react-query';
import FastImage from 'react-native-fast-image';
import React, {createRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

import {api} from 'api/api';
import {auth} from 'auth/auth';
import {IntInput} from 'form/IntInput';
import {TextInput} from 'form/TextInput';
import {CheckButton} from './CheckButton';
import {BackButton} from 'common/BackButton';
import {NextButton} from 'common/NextButton';
import {CustomHeader} from 'common/CustomHeader';
import {IconPlaceholder} from './IconPlaceholder';
import {Controller, useForm} from 'react-hook-form';
import {openInWhatsapp} from 'messages/openInWhatsapp';
import {openInInstagram} from 'messages/openInInstagram';
import {formatProfileEdit} from './formatProfileEdit';

export function EditProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [saving, setSaving] = useState(false);
  const {goBack} = useNavigation();

  const ref = createRef();

  const queryClient = useQueryClient();

  async function onSubmit(value) {
    setSaving(true);
    Keyboard.dismiss();
    ref?.current?.focus();
    try {
      const res = await api.patch('/users', formatProfileEdit(value));
      auth.user = res.data;
      queryClient.invalidateQueries(['user', auth.user?.id]);
      setSaving(false);
      goBack();
    } catch (err) {
      setSaving(false);
      console.error(err.response);
    }
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
              value={value ? '' + value : null}
              maxLength={14}
              onBlur={onBlur}
              label="Whatsapp"
              onChangeText={onChange}
              textValidate={validateName}
              error={errors.name?.message}
              rightChild={
                !!value && <CheckButton onPress={() => openInWhatsapp(value)} />
              }
              leftChild={<IconPlaceholder icon={faWhatsapp} />}
            />
          )}
        />
        <Controller
          control={control}
          name="instagramUsername"
          defaultValue={auth?.user?.instagramUsername}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              value={value}
              maxLength={30}
              onBlur={onBlur}
              label="Instagram"
              onChangeText={onChange}
              textValidate={validateName}
              error={errors.name?.message}
              rightChild={
                !!value && (
                  <CheckButton onPress={() => openInInstagram(value)} />
                )
              }
              leftChild={<IconPlaceholder icon={faInstagram} />}
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

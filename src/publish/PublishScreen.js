import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {pushSending} from 'send/sendings';
import {ItemEdit} from './ItemEdit';
import {useForm} from 'react-hook-form';
import {FooterNavigation} from 'navigation/FooterNavigation';

export function PublishScreen() {
  const {navigate} = useNavigation();

  const {
    reset,
    control,
    clearErrors,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm();

  //fica
  function onSubmit(item) {
    reset();
    clearErrors();
    navigate('Home');
    pushSending(item);
  }

  return useObserver(() => (
    <>
      <ItemEdit
        reset={reset}
        errors={errors}
        title="Publicar"
        control={control}
        isDirty={isDirty}
        onSubmit={onSubmit}
        showBackButton={false}
        handleSubmit={handleSubmit}
      />
      <FooterNavigation selected="Publish" />
    </>
  ));
}

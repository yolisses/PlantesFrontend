import React from 'react';
import {useForm} from 'react-hook-form';
import {useQueryClient} from 'react-query';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';

import {auth} from 'auth/auth';
import {ship} from 'send/ship';
import {ItemForm} from 'form/ItemForm';
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

  const queryClient = useQueryClient();

  //fica
  function onSubmit(item) {
    // reset();
    clearErrors();
    navigate('Profile');
    ship(item, () => {
      queryClient.invalidateQueries('plants');
      queryClient.invalidateQueries(['user', 'plants', auth.userId]);
    });
  }

  return useObserver(() => (
    <>
      <ItemForm
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

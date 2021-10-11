import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';

import {ship} from 'send/ship';
import {ItemEdit} from './ItemEdit';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {useQueryClient} from 'react-query';
import {auth} from '../auth/auth';

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

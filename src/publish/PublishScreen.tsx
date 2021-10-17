import React from 'react';
import {useForm} from 'react-hook-form';

import {Observer} from 'mobx-react-lite';

import {ItemForm} from 'form/ItemForm';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {publish} from './publish';
import {useNavigation} from '@react-navigation/core';
import {useQueryClient} from 'react-query';
import {auth} from 'auth/auth';

export function PublishScreen() {
  const {
    reset,
    control,
    clearErrors,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm();

  const queryClient = useQueryClient();
  const {navigate} = useNavigation();

  function invalidatePlants() {
    console.error('invalidate');
    queryClient.invalidateQueries('plants');
    queryClient.invalidateQueries(['user', 'plants', auth.user?.id]);
  }

  function onSubmit(item: ItemFormData) {
    navigate('Profile');
    reset();
    clearErrors();
    publish(item, invalidatePlants);
  }

  return (
    <Observer>
      {() => (
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
      )}
    </Observer>
  );
}

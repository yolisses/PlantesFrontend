import React from 'react';
import {useForm} from 'react-hook-form';

import {Observer} from 'mobx-react-lite';

import {ItemForm} from 'form/ItemForm';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {publish} from './publish';
import {useNavigation} from '@react-navigation/core';

export function PublishScreen() {
  const {
    reset,
    control,
    clearErrors,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm();

  const {navigate} = useNavigation();

  function onSubmit(item: ItemFormData) {
    reset();
    clearErrors();
    navigate('Profile');
    publish(item);
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

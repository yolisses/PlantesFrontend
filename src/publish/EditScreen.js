import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {ItemEdit} from './ItemEdit';
import {useForm} from 'react-hook-form';
import {formatToEdit} from './formatToEdit';
import {EditBackAlert} from './EditBackAlert';
import {useAlert} from 'alert/AlertContext';
import {BackButton} from './BackButton';

export function EditScreen({route}) {
  const {navigate} = useNavigation();
  const {showAlert} = useAlert();

  const {item} = route.params;

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm();

  function onSubmit(item) {
    // pushSending(item);
    navigate('Home');
    reset();
  }

  function onBackPress() {
    showAlert(<EditBackAlert />);
  }

  return useObserver(() => (
    <ItemEdit
      reset={reset}
      title="Editar"
      errors={errors}
      control={control}
      isDirty={isDirty}
      onSubmit={onSubmit}
      item={formatToEdit(item)}
      handleSubmit={handleSubmit}
      headerLeft={<BackButton onPress={onBackPress} />}
    />
  ));
}

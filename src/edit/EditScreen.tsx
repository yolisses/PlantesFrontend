import React from 'react';
import {useForm} from 'react-hook-form';
import {useQueryClient} from 'react-query';

import {auth} from 'auth/auth';
import {ItemForm} from 'form/ItemForm';
import {BackButton} from 'common/BackButton';
import {formatToEdit} from 'edit/formatToEdit';
import {EditBackAlert} from 'edit/EditBackAlert';
import {updatePlantInfo} from './updatePlantInfo';
import {Observer} from 'mobx-react-lite';
import {alert} from 'alert/alert';

export function EditScreen({route}) {
  const queryClient = useQueryClient();

  const {item} = route.params;

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm();

  async function onSubmit(value: ItemFormData) {
    try {
      const res = await updatePlantInfo(item._id, value);
      console.error(res);
      // navigate('ShowItem', {item: res.data});
      queryClient.invalidateQueries('plants');
      queryClient.invalidateQueries(['user', 'plants', auth.userId]);
      // reset();
    } catch (err) {
      console.error(err?.response || err);
    }
  }

  function onBackPress() {
    alert.showAlert(<EditBackAlert />);
  }

  return (
    <Observer>
      {() => (
        <ItemForm
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
      )}
    </Observer>
  );
}

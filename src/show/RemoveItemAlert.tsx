import {useNavigation} from '@react-navigation/core';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {api} from 'api/api';
import {auth} from 'auth/auth';
import React from 'react';
import {useQueryClient} from 'react-query';

export function RemoveItemAlert({item}) {
  const queryClient = useQueryClient();

  const {goBack} = useNavigation();

  async function onRemovePress() {
    try {
      await api.delete('plant/' + item?._id);
      queryClient.invalidateQueries('plants');
      queryClient.invalidateQueries(['user', 'plants', auth.userId]);
      goBack();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Alert title="Remover esse item?">
      <AlertButton text="Cancelar" />
      <AlertButton destructive text="Remover" onPress={onRemovePress} />
    </Alert>
  );
}

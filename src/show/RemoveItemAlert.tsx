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
      await api.delete('plants/' + item?.id);
      queryClient.resetQueries('plants');
      queryClient.resetQueries(['user', 'plants', auth.user?.id]);
      goBack();
    } catch (err) {
      console.error(err.response || err);
    }
  }

  return (
    <Alert title="Remover esse item?">
      <AlertButton text="Cancelar" />
      <AlertButton destructive text="Remover" onPress={onRemovePress} />
    </Alert>
  );
}

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
    } catch (err) {
      console.error(err.response || err);
    }
    queryClient.resetQueries('plants');
    queryClient.resetQueries(['user', 'plants', auth.user?.id]);
    goBack();
  }

  return (
    <Alert title="Remover esse item?">
      <AlertButton text="Cancelar" />
      <AlertButton destructive text="Remover" onPress={onRemovePress} />
    </Alert>
  );
}

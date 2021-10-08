import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {api} from 'api/api';
import React from 'react';

export function RemoveItemAlert({item}) {
  async function onRemovePress() {
    try {
      const res = await api.delete('/plant/' + item?._id);
      console.error(res.data);
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

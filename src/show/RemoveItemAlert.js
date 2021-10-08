import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import React from 'react';

export function RemoveItemAlert() {
  return (
    <Alert title="Remover esse item?">
      <AlertButton text="cancelar" />
      <AlertButton destructive text="remover" />
    </Alert>
  );
}

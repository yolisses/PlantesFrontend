import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

export function DiscardPublishAlert({reset}) {
  function onPress() {
    reset();
  }

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {discardImagesSelection} from './discardImagesSelection';

export function DiscardPublishAlert() {
  function onPress() {
    discardImagesSelection();
  }

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

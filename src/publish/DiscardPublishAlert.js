import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {usePublish} from './PublishContext';

export function DiscardPublishAlert() {
  const {dispatch} = usePublish();
  function onPress() {
    dispatch({type: 'discardAll'});
  }

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

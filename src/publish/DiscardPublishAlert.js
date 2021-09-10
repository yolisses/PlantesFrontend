import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {useDispatch} from 'react-redux';

export function DiscardPublishAlert() {
  const dispatcher = useDispatch();

  const discard = () => {
    dispatcher({type: 'DISCARD'});
  };

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={discard} destructive />
    </Alert>
  );
}

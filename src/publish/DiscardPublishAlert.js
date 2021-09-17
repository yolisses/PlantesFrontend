import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {usePublish} from './PublishContext';
import {useShallowData} from './ShallowDataContext';

export function DiscardPublishAlert() {
  const {discard} = useShallowData();
  function onPress() {}

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

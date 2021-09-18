import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {useShallowData} from './ShallowDataContext';
import {useImages} from './ImagesContext';

export function DiscardPublishAlert() {
  const {discard: discardShallowData} = useShallowData();
  const {discard: discardImagesSelection} = useImages();
  function onPress() {
    discardShallowData();
    discardImagesSelection();
  }

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

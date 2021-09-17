import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {useShallowData} from './ShallowDataContext';
import {useImages} from './ImagesContext';

export function DiscardPublishAlert() {
  const {discard} = useShallowData();
  const {setImages} = useImages();
  function onPress() {
    discard();
    setImages(images => ({}));
  }

  return (
    <Alert title="Descartar publicação?">
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

import React from 'react';
import {discardDataCollection} from 'storage/discardDataCollection';
import {publishData} from 'publish/publishData';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

export function DiscardPublishAlert() {
  const {setImages} = useImageGroup();

  const discard = () => {
    setImages([]);
    discardDataCollection(publishData);
  };

  return (
    <Alert
      title="Descartar publicação?"
      // description="As imagens continuarão salvas na memória"
    >
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={discard} destructive />
    </Alert>
  );
}

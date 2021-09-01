import React from 'react';
import {useImageGroup} from 'camera/ImageGroupContext';
import {useAlert} from 'alert/AlertContext';
import {discardDataCollection} from 'storage/discardDataCollection';
import {publishData} from 'publish/publishData';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

export function DiscardPublishAlert() {
  const {closeAlert} = useAlert();
  const {setImages} = useImageGroup();

  const discard = () => {
    closeAlert();
    setImages([]);
    discardDataCollection(publishData);
  };

  return (
    <Alert
      title="Descartar publicação?"
      // description="As imagens continuarão salvas na memória"
    >
      <AlertButton text="Cancelar" onPress={closeAlert} />
      <AlertButton text="Descartar" onPress={discard} destructive />
    </Alert>
  );
}

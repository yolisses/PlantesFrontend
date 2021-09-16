import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import React from 'react';
import {imagesLimit} from './imagesLimit';

export function ImagesLimitAlert() {
  return (
    <Alert
      title="Limite de imagens"
      description={`Por favor escolha no máximo ${imagesLimit} imagens por item`}>
      <AlertButton text="Entendi" />
    </Alert>
  );
}

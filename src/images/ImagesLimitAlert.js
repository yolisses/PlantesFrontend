import React from 'react';

import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

export function ImagesLimitAlert({imagesLimit}) {
  return (
    <Alert
      title="Limite de imagens"
      description={`Por favor escolha no máximo ${imagesLimit} imagens por item`}>
      <AlertButton text="Entendi" />
    </Alert>
  );
}

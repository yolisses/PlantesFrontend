import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import React from 'react';

export function LocationNotFoundAlert() {
  return (
    <Alert description="O Plantes não está disponível para esse local do mapa">
      <AlertButton text="Entendi" />
    </Alert>
  );
}

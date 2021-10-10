import React from 'react';
import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {useModal} from 'modal/ModalContext';
import {useNavigation} from '@react-navigation/core';

export function EditBackAlert() {
  const {goBack} = useNavigation();
  const {closeModal} = useModal();

  function onPress() {
    closeModal();
    goBack();
  }

  return (
    <Alert title="Descartar alterações?" disableOverlayScape>
      <AlertButton text="Cancelar" />
      <AlertButton text="Descartar" onPress={onPress} destructive />
    </Alert>
  );
}

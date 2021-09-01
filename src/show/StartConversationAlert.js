import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Alert} from 'alert/Alert';
import {useAlert} from 'alert/AlertContext';
import {AlertButton} from 'alert/AlertButton';

export function StartConversationAlert() {
  const {closeAlert} = useAlert();
  const {navigate} = useNavigation();

  function onSendPress() {
    navigate('Chat');
    closeAlert();
  }

  return (
    <Alert
      title="Fazer pedido"
      description="Mande um mensagem para Ulisses Albuquerque para combinar a entrega">
      <AlertButton text="Cancelar" onPress={closeAlert} />
      <AlertButton text="Mandar mensagem" onPress={onSendPress} />
    </Alert>
  );
}

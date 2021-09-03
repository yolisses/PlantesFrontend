import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Alert} from 'alert/Alert';
import {useAlert} from 'alert/AlertContext';
import {AlertButton} from 'alert/AlertButton';
import {useChatReference} from '../chat/ChatReferenceContext';

export function StartConversationAlert({item}) {
  const {closeAlert} = useAlert();
  const {navigate} = useNavigation();

  const {setOneChatReference} = useChatReference();

  function onSendPress() {
    setOneChatReference(item.owner.id, {type: 'plant', plantId: item.id});
    navigate('Chat', {chatId: item.owner.id});
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

import React from 'react';

import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

export function StartConversationAlert({item, onSendPress}) {
  return (
    <Alert
      title="Fazer pedido"
      description={`Mande um mensagem para ${item.owner.name} para combinar a entrega`}>
      <AlertButton text="Cancelar" />
      <AlertButton text="Mandar mensagem" onPress={onSendPress} />
    </Alert>
  );
}

import React from 'react';

import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';

import {useUser} from 'user/useUser';

export function StartConversationAlert({item, onSendPress}) {
  const user = useUser(item.userId);

  return (
    <Alert
      title="Fazer pedido"
      description={`Mande um mensagem para ${user?.name} para combinar a entrega`}>
      <AlertButton text="Cancelar" />
      <AlertButton text="Mandar mensagem" onPress={onSendPress} />
    </Alert>
  );
}

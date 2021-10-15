import React from 'react';

import {Alert} from 'alert/Alert';
import {AlertButton} from 'alert/AlertButton';
import {useUserById} from 'common/UsersByIdContext';

export function StartConversationAlert({item, onSendPress}) {
  const {getUserById} = useUserById();
  const user = getUserById(item.userId);

  return (
    <Alert
      title="Fazer pedido"
      description={`Mande um mensagem ${
        user?.name ? 'para ' + user.name : ''
      } para combinar a entrega`}>
      <AlertButton text="Cancelar" />
      <AlertButton text="Mandar mensagem" onPress={onSendPress} />
    </Alert>
  );
}

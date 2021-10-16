import React from 'react';
import {TextIconButton} from 'common/TextIconButton';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';

import {RemoveItemAlert} from './RemoveItemAlert';
import {alert} from 'alert/alert';

export function RemoveButton({onpress, item, ...rest}) {
  function handlePress() {
    alert.showAlert(<RemoveItemAlert item={item} />);
  }

  return (
    <TextIconButton
      text="Remover"
      icon={faTrashAlt}
      onPress={handlePress}
      {...rest}
    />
  );
}

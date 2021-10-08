import React from 'react';
import {TextIconButton} from 'common/TextIconButton';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';

import {useAlert} from 'alert/AlertContext';
import {RemoveItemAlert} from './RemoveItemAlert';

export function RemoveButton({onpress, item, ...rest}) {
  const {showAlert} = useAlert();
  function handlePress() {
    showAlert(<RemoveItemAlert />);
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

import React from 'react';
import {TextIconButton} from 'common/TextIconButton';
import {faEdit} from '@fortawesome/free-regular-svg-icons';
import {useNavigation} from '@react-navigation/core';

export function EditButton({onpress, item, ...rest}) {
  const {navigate} = useNavigation();

  function handlePress() {
    navigate('Edit', {item});
  }

  return (
    <TextIconButton
      text="Editar"
      icon={faEdit}
      onPress={handlePress}
      {...rest}
    />
  );
}

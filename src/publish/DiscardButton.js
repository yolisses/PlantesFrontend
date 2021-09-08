import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {DiscardPublishAlert} from './DiscardPublishAlert';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export function DiscardButton() {
  const {showAlert} = useAlert();
  const onPress = () => {
    showAlert(<DiscardPublishAlert />);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <FontAwesomeIcon
        icon={faTimes}
        size={25}
        style={{marginRight: 20}}
        color="gray"
      />
    </TouchableOpacity>
  );
}

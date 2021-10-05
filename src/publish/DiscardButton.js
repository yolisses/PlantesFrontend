import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {DiscardPublishAlert} from './DiscardPublishAlert';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export function DiscardButton({reset}) {
  const {showAlert} = useAlert();
  const onPress = () => {
    showAlert(<DiscardPublishAlert reset={reset} />);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <FontAwesomeIcon
        icon={faTimes}
        size={25}
        style={{marginRight: 15}}
        color="gray"
      />
    </TouchableOpacity>
  );
}

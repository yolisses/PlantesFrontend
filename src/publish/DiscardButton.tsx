import React from 'react';
import {TouchableOpacity} from 'react-native';
import {DiscardPublishAlert} from './DiscardPublishAlert';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {alert} from 'alert/alert';

export function DiscardButton({reset}) {
  const onPress = () => {
    alert.showAlert(<DiscardPublishAlert reset={reset} />);
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

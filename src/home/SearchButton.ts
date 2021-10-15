import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {basicHitSlop} from 'common/basicHitSlop';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export function SearchButton({onPress, ...rest}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={basicHitSlop}>
      <FontAwesomeIcon icon={faSearch} size={23} color="gray" {...rest} />
    </TouchableOpacity>
  );
}

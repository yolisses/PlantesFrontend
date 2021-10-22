import {faThumbsUp as faThumbsUpRegular} from '@fortawesome/free-regular-svg-icons';
import {faThumbsUp as faThumbsUpSolid} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {RerenderTester} from 'dev/rerenderTester';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export function LikeButton() {
  const [active, setActive] = useState(false);

  function onPress() {
    setActive(!active);
  }

  const hitSlopSize = 30;

  const hitSlop = {
    top: hitSlopSize,
    left: hitSlopSize,
    right: hitSlopSize,
    bottom: hitSlopSize,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={hitSlop}
      style={styles.button}
      activeOpacity={0.9}>
      <FontAwesomeIcon
        size={30}
        color={'green'}
        style={styles.icon}
        icon={active ? faThumbsUpRegular : faThumbsUpSolid}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  icon: {
    transform: [{scaleX: -1}],
  },
});

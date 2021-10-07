import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {basicHitSlop} from 'common/basicHitSlop';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export function LikeButton() {
  const [active, setActive] = useState(false);

  function onPress() {
    setActive(!active);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.9}
      hitSlop={basicHitSlop}>
      <FontAwesomeIcon
        icon={active ? faHeartRegular : faHeartSolid}
        size={30}
        color={'green'}
        style={styles.icon}
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

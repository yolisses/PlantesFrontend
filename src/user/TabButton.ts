import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export function TabButton({icon, scrollTo, selected, index}) {
  const size = 22;
  return useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.pressArea}
        onPress={() => scrollTo(index)}>
        <FontAwesomeIcon
          icon={icon}
          size={size}
          color={selected ? 'green' : '#bbb'}
        />
      </TouchableOpacity>
    ),
    [selected],
  );
}

const styles = StyleSheet.create({
  pressArea: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

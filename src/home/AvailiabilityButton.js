import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useObserver} from 'mobx-react-lite';
import {searchOptions} from 'search/searchOptions';

export function AvailiabilityButton({text, id}) {
  const onPress = () => {
    searchOptions[id] = !searchOptions[id];
  };

  return useObserver(() => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, searchOptions[id] && styles.active]}
      onPress={onPress}>
      <Text style={[styles.capsule, searchOptions[id] && styles.activeText]}>
        {text}
      </Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  capsule: {
    fontSize: 17,
    color: '#999',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#999',

    margin: 2,
  },
  activeText: {
    color: '#080',
  },
  active: {
    borderColor: '#0a0',
  },
});

import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {basicHitSlop} from 'common/basicHitSlop';
import React, {useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export function SearchingField({onClosePress, ...rest}) {
  const ref = useRef();

  function onPress() {
    ref?.current?.focus();
  }

  return (
    <TouchableOpacity ref={ref} onPress={onPress} style={styles.container}>
      <TextInput style={styles.input} placeholder="Pesquisar" autoFocus />
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={basicHitSlop}
        onPress={onClosePress}>
        <FontAwesomeIcon icon={faTimes} size={23} color="gray" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 20,
  },
  container: {
    margin: 4,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#bbb',
    alignItems: 'center',
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

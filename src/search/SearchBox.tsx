import {
  NativeSyntheticEvent,
  Text,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {refreshPlants} from 'home/loadPlants';
import {basicHitSlop} from 'utils/basicHitSlop';
import {searchOptions} from 'search/searchOptions';

export function SearchBox() {
  const [active, setActive] = useState(false);

  const ref = useRef();

  function onPress() {
    ref?.current?.focus();
    setActive(true);
  }

  function onClosePress() {
    if (searchOptions.text !== null) {
      searchOptions.text = null;
      refreshPlants();
    }
    ref?.current?.blur();
    setActive(false);
  }

  function onSubmit(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
    searchOptions.text = e.nativeEvent.text.trim();
    refreshPlants();
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.searchBox}
      activeOpacity={0.8}>
      {!active ? (
        <>
          <Text style={styles.title}>Plantes</Text>
          <FontAwesomeIcon icon={faSearch} color="gray" size={20} />
        </>
      ) : (
        <>
          <TextInput
            ref={ref}
            autoFocus
            onSubmitEditing={onSubmit}
            style={styles.input}
            returnKeyType="search"
            placeholder="Pesquisar"
          />
          <TouchableOpacity onPress={onClosePress} hitSlop={basicHitSlop}>
            <FontAwesomeIcon icon={faTimes} color="gray" size={20} />
          </TouchableOpacity>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  searchBox: {
    marginVertical: 3,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 45,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});

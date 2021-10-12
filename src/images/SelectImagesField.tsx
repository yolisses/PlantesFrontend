import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';

import {Label} from 'form/Label';
import {MiniMessage} from 'form/MiniMessage';
import {openImagePicker} from 'images/openImagePicker';
import {SelectImagesItem} from 'images/SelectImageItem';
import {SelectImagesButton} from 'images/SelectImagesButton';
import {hasSomeTrueValuedKey} from 'utils/hasSomeTrueValuedKey';

interface Props {
  label?: string;
  error?: string;
  onChange: (value: ListObj) => void;
  value: Image[];
}

export function SelectImagesField({label, value, error, onChange}: Props) {
  console.error(value);

  function onSelectPress() {
    openImagePicker(convertImagesObjToListObj(value), onChange);
  }

  function getUri(image: Image) {
    return image.localUri || image.remoteUri;
  }

  return (
    <View style={styles.container}>
      <Label text={label} />
      <View style={!!value.length && styles.wrapper}>
        <FlatList
          horizontal
          data={value}
          contentContainerStyle={[styles.inner]}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: {item: Image}) => (
            <SelectImagesItem
              key={getUri(item)}
              uri={getUri(item)}
              onChange={onChange}
            />
          )}
        />
      </View>
      <SelectImagesButton onPress={onSelectPress} reduced={!!value.length} />
      {error && !hasSomeTrueValuedKey(value) && (
        <MiniMessage isError text={error} />
      )}
    </View>
  );
}

const offset = 2;

const styles = StyleSheet.create({
  inner: {
    padding: offset,
  },
  container: {
    marginBottom: 10,
    alignItems: 'stretch',
  },
  wrapper: {
    borderBottomWidth: 0,
    borderRadius: 10,
    borderWidth: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderStyle: 'solid',
    borderColor: '#bbb',
  },
});

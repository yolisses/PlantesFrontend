import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';

import {Label} from 'form/Label';
import {MiniMessage} from 'form/MiniMessage';
import {openImagePicker} from 'images/openImagePicker';
import {SelectImagesItem} from 'images/SelectImageItem';
import {SelectImagesButton} from 'images/SelectImagesButton';
import {hasSomeTrueValuedKey} from 'utils/hasSomeTrueValuedKey';

interface SelectImagesFieldProps {
  label: string;
  value: Image[];
  error?: string;
  onChange: (value: any) => void;
}

export function SelectImagesField({
  label,
  value,
  error,
  onChange,
}: SelectImagesFieldProps) {
  const renderItem = ({item: uri}) => (
    <SelectImagesItem uri={uri} key={uri} onChange={onChange} />
  );

  const uris = typeof value === 'object' ? Object.keys(value) : [];

  function onSelectPress() {
    openImagePicker(value, onChange);
  }

  return (
    <View style={styles.container}>
      <Label text={label} />
      <View style={!!uris.length && styles.wrapper}>
        <FlatList
          horizontal
          data={uris}
          renderItem={renderItem}
          contentContainerStyle={[styles.inner]}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <SelectImagesButton onPress={onSelectPress} reduced={!!uris.length} />
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

import {hasSomeTrueValuedKey} from 'common/hasSomeTrueValuedKey';
import {Label} from 'form/Label';
import {MiniMessage} from 'form/MiniMessage';
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {SelectImagesItem} from './SelectImageItem';
import {SelectImagesButton} from './SelectImagesButton';

export function SelectImagesField({label, value, error, control, onChange}) {
  const renderItem = ({item: uri}) => <SelectImagesItem uri={uri} key={uri} />;

  const uris = typeof value === 'object' ? Object.keys(value) : [];

  return (
    <View style={styles.container}>
      <Label text={label} style={styles.label} />
      <FlatList
        horizontal
        data={uris}
        renderItem={renderItem}
        contentContainerStyle={[styles.inner]}
        showsHorizontalScrollIndicator={false}
      />
      <SelectImagesButton
        value={value}
        control={control}
        onChange={onChange}
        reduced={!!uris.length}
      />
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
  label: {
    backgroundColor: 'white',
  },
});

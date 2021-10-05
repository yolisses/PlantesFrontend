import {hasSomeTrueValuedKey} from 'common/hasSomeTrueValuedKey';
import {Label} from 'form/Label';
import {MiniMessage} from 'form/MiniMessage';
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SelectImagesButton} from './SelectImagesButton';

export function SelectImagesField({label, value, error, control, onChange}) {
  const renderItem = ({item: uri}) => (
    <FastImage source={{uri}} fraction={4} style={styles.image} key={uri} />
  );

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
  image: {
    height: 160,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: offset,
  },
});

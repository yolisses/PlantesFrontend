import {TagsSelector} from 'form/TagsSelector';
import {
  availabilities,
  availabilitiesLabels,
} from 'publish/data/availiabilities';
import {tags} from 'publish/data/tags';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CleanFiltersButton} from './CleanFiltersButton';

export function FiltersModal() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cleanWrapper}>
        <CleanFiltersButton text="Limpar" />
      </View>
      <TagsSelector
        showIcon={false}
        name="availabilities"
        label="Disponível para"
        options={availabilities}
        buttonStyle={styles.button}
        labels={availabilitiesLabels}
      />
      <TagsSelector name="tags" options={tags} label="De preferência" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 9,
    justifyContent: 'center',
  },
  cleanWrapper: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

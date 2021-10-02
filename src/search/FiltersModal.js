import {TagsSelector} from 'form/TagsSelector';
import {useObserver} from 'mobx-react-lite';
import {
  availabilities,
  availabilitiesLabels,
} from 'publish/data/availiabilities';
import {tags} from 'publish/data/tags';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CleanFiltersButton} from './CleanFiltersButton';
import {unappliedSearchOptions} from './unappliedSearchOptions';

export function FiltersModal() {
  return useObserver(() => (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.cleanWrapper}>
          <CleanFiltersButton text="Limpar" />
        </View>
        <TagsSelector
          showIcon={false}
          id="availabilities"
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          data={unappliedSearchOptions}
          labels={availabilitiesLabels}
        />
        <TagsSelector
          id="tags"
          options={tags}
          label="De preferência"
          data={unappliedSearchOptions}
        />
      </ScrollView>
    </View>
  ));
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

import {Fieldset} from 'form/Fieldset';
import {TagsSelector} from 'form/TagsSelector';
import {AvailiabilityButton} from 'home/AvailiabilityButton';
import {useObserver} from 'mobx-react-lite';
import {
  availabilities,
  availabilitiesLabels,
} from 'publish/data/availiabilities';
import {tags} from 'publish/data/tags';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {filtersData} from './filtersData';

export function FiltersModal() {
  return useObserver(() => (
    <View>
      <ScrollView style={styles.container}>
        <TagsSelector
          id="availabilities"
          data={filtersData.availabilities}
          label="Disponível para"
          showIcon={false}
          options={availabilities}
          buttonStyle={styles.button}
          labels={availabilitiesLabels}
        />
        <TagsSelector
          id="tags"
          data={filtersData.tags}
          label="De preferência"
          options={tags}
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
    paddingTop: 24,
    flex: 1,
  },
  button: {
    flex: 1,
    paddingVertical: 9,
    justifyContent: 'center',
  },
});

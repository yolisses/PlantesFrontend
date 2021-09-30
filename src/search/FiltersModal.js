import {Fieldset} from 'form/Fieldset';
import {TagsSelector} from 'form/TagsSelector';
import {AvailiabilityButton} from 'home/AvailiabilityButton';
import {useObserver} from 'mobx-react-lite';
import {tags} from 'publish/data/tags';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {filtersData} from './filtersData';

export function FiltersModal() {
  return useObserver(() => (
    <View>
      <ScrollView style={styles.container}>
        <Fieldset label="Pesquisar por" style={styles.wrapper} disableBorder>
          <AvailiabilityButton
            data={filtersData.availabilities}
            text="Doação"
            id="donate"
          />
          <AvailiabilityButton
            data={filtersData.availabilities}
            text="Troca"
            id="swap"
          />
          <AvailiabilityButton
            data={filtersData.availabilities}
            text="Venda"
            id="sell"
          />
        </Fieldset>
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
});

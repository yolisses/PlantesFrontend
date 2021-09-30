import {Fieldset} from 'form/Fieldset';
import {TagsSelector} from 'form/TagsSelector';
import {AvailiabilityButton} from 'home/AvailiabilityButton';
import {tags} from 'publish/data/tags';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export function FiltersModal() {
  return (
    <ScrollView style={styles.container}>
      <Fieldset label="Pesquisar por" style={styles.wrapper} disableBorder>
        <AvailiabilityButton text="Doação" id="donate" />
        <AvailiabilityButton text="Troca" id="swap" />
        <AvailiabilityButton text="Venda" id="sell" />
      </Fieldset>
      <TagsSelector id="tags" data={{}} label="De preferência" options={tags} />
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
    paddingTop: 24,
  },
});

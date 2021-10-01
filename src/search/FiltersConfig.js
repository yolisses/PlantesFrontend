import {OptionsButton} from 'home/OptionsButton';
import {useObserver} from 'mobx-react-lite';
import {useModal} from 'modal/ModalContext';
import {availabilitiesLabels} from 'publish/data/availiabilities';
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {ApplyButton} from './ApplyButton';
import {filtersData} from './filtersData';
import {FiltersModal} from './FiltersModal';

export function FiltersConfig() {
  const {showModal} = useModal();
  function onFiltersPress() {
    showModal(<FiltersModal />, {
      FloatingComponent: <ApplyButton />,
      snapPoint: 400,
    });
  }

  const showText = Object.entries(filtersData.availabilities)
    .filter(entry => entry[1])
    .map(entry => availabilitiesLabels[entry[0]].toLowerCase())
    .concat(
      Object.entries(filtersData.tags)
        .filter(entry => entry[1])
        .map(entry => entry[0]),
    );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.indicatorsWrapper}>
        <Text numberOfLines={1}>
          {showText.map(text => (
            <Text style={styles.indicator}>{text}, </Text>
          ))}
        </Text>
      </ScrollView>
      <OptionsButton text="Filtros" onPress={onFiltersPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    fontSize: 18,
    color: 'green',
  },
  indicatorsWrapper: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
});

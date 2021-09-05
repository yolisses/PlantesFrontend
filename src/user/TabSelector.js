import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TabButton} from './TabButton';

export function TabSelector({selected, scrollTo, categories}) {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TabButton
          key={index}
          index={index}
          scrollTo={scrollTo}
          icon={category.icon}
          selected={selected === index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
  pressArea: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {RerenderTester} from 'dev/rerenderTester';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {Fragment} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSending} from 'send/SendingContext';
import {width} from 'utils/width';

const numberOfCollums = 3;

export function UserScreen() {
  const {sendings} = useSending();
  console.error(sendings);

  function renderItem({item}) {
    return (
      <Fragment key={item[0]}>
        {/* <FastImage source={{uri: item[1].images[0]}} style={styles.image} /> */}
        <Text>{JSON.stringify(item)}</Text>
      </Fragment>
    );
  }

  return (
    <FooterNavigationLayout>
      <RerenderTester />
      <FlatList
        data={Object.entries(sendings)}
        renderItem={renderItem}
        numColumns={numberOfCollums}
      />
    </FooterNavigationLayout>
  );
}

const size = width / numberOfCollums - (numberOfCollums - 1) / numberOfCollums;

const styles = StyleSheet.create({
  image: {
    width: size,
    height: size,
    marginRight: 1,
    marginBottom: 1,
  },
});

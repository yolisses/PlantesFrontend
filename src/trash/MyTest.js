import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getImage} from '../../mock/mockImageLink';

export function MyTest() {
  const ref = useRef();

  return (
    <View>
      <ScrollView
        ref={ref}
        decelerationRate={0.7}
        snapToInterval={width}
        disableIntervalMomentum
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {Object.keys([...Array(20)]).map(item => (
          // <Image item={item} key={item} />
          <FastImage
            key={item}
            style={{width, height: width}}
            source={{uri: getImage()}}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    width,
    height: width,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 100,
    color: 'white',
  },
});

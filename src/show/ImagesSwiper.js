import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {SwipeIndicator} from './SwipeIndicator';
import FastImage from 'react-native-fast-image';
import {FlatList} from 'react-native';

const {width} = Dimensions.get('window');

export function ImagesSwiper({images, preImage}) {
  const [previousLength, setPreviousLength] = useState(images?.length);
  const [selected, setSelected] = useState(0);

  const onScroll = e => {
    setSelected(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  const ref = useRef();

  useEffect(() => {
    if (
      images &&
      (images.length > previousLength || images.length <= selected)
    ) {
      ref?.current?.scrollToEnd();
      setPreviousLength(images.length);
    }
  }, [images]);

  if (!images) {
    return <FastImage style={styles.image} source={{uri: preImage}} />;
  }

  return (
    <View>
      <FlatList
        ref={ref}
        data={images}
        horizontal={true}
        onScroll={onScroll}
        snapToInterval={width}
        disableIntervalMomentum
        initialNumToRender={images.length}
        renderItem={({item}) => (
          <FastImage key={item} style={styles.image} source={{uri: item}} />
        )}
        showsHorizontalScrollIndicator={false}
      />
      <SwipeIndicator images={images} selected={selected} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: width,
    backgroundColor: '#ddd',
  },
});

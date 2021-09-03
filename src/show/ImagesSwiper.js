import React, {useRef, useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';

import {SquareImage} from 'common/SquareImage';

import {SwipeIndicator} from './SwipeIndicator';

const {width} = Dimensions.get('window');

export function ImagesSwiper({images, preImage}) {
  const [selected, setSelected] = useState(0);

  const scrollRef = useRef();

  const onScroll = e => {
    setSelected(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  const scrollTo = pos => {
    scrollRef.current.scrollToIndex({index: pos});
  };

  if (!images) {
    return <SquareImage uri={preImage} fraction={1} />;
  }

  return (
    <View>
      <ScrollView
        horizontal={true}
        ref={scrollRef}
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        onScroll={onScroll}>
        {images.map((image, index) => (
          <SquareImage key={index} uri={image} fraction={1} />
        ))}
      </ScrollView>
      <SwipeIndicator images={images} scrollTo={scrollTo} selected={selected} />
    </View>
  );
}

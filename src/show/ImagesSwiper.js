import React, {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';

import {SquareImage} from 'common/SquareImage';
import {SwipeIndicator} from './SwipeIndicator';

const {width} = Dimensions.get('window');

export function ImagesSwiper({images, preImage}) {
  const [selected, setSelected] = useState(0);

  const onScroll = e => {
    setSelected(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  if (!images) {
    return <SquareImage uri={preImage} fraction={1} />;
  }

  return (
    <View>
      <ScrollView
        horizontal={true}
        onScroll={onScroll}
        snapToInterval={width}
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <SquareImage key={index} uri={image} fraction={1} />
        ))}
      </ScrollView>
      <SwipeIndicator images={images} selected={selected} />
    </View>
  );
}

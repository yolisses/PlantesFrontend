import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {StartConversetionButton} from 'show/StartConversationButton';

export function ShowItemScreen({route}) {
  const {item} = route.params;
  const scrollRef = useRef();

  const scrollTo = pos => {
    scrollRef.current.scrollTo({y: pos, animated: true});
  };

  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView ref={scrollRef}>
        <ImagesSwiper images={item.images} />
        <ItemInfo scrollTo={scrollTo} />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <AvailabilityInfo />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <StartConversetionButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padding: {
    padding: 10,
    flexDirection: 'row',
  },
});

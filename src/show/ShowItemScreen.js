import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {StartConversetionButton} from 'show/StartConversationButton';

export function ShowItemScreen({route}) {
  const {preImage, item} = route.params;

  const scrollRef = useRef();

  const scrollTo = pos => {
    scrollRef.current.scrollTo({y: pos, animated: true});
  };

  function onPress() {}

  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <ImagesSwiper images={item?.images} preImage={preImage} />
        <ItemInfo scrollTo={scrollTo} item={item} />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <AvailabilityInfo onModalConfirmPress={onPress} item={item} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <StartConversetionButton onPress={onPress} loading={!item} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  padding: {
    padding: 10,
    flexDirection: 'row',
  },
});

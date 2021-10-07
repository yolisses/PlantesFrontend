import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {EditItemButton} from './EditItemButton';
import {auth} from 'auth/auth';
import {SendMessageButton} from 'messages/SendMessageButton';

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
        {item.userId !== auth.userId ? (
          <EditItemButton item={item} style={styles.button} />
        ) : (
          <SendMessageButton />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
  screen: {
    height: '100%',
    backgroundColor: 'white',
  },
  bottomWrapper: {
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padding: {
    padding: 10,
    flexDirection: 'row',
  },
});

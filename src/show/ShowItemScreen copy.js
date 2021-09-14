import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {StartConversetionButton} from 'show/StartConversationButton';
import {useChatReference} from 'chat/ChatReferenceContext';
import {LoadingStartConversetionButton} from './LoadingStartConversationButton';
import {useQuery, gql} from '@apollo/client';

export function ShowItemScreen({route}) {
  const {itemId, preImage} = route.params;

  const PLANT = gql`
  query {
    getPlant(id:${itemId}) {
      id
      name
      type
    }
  }
`;
  const {
    loading,
    error,
    data: {getPlant: item},
  } = useQuery(PLANT);

  const scrollRef = useRef();

  const scrollTo = pos => {
    scrollRef.current.scrollTo({y: pos, animated: true});
  };

  const {navigate} = useNavigation();
  const {setOneChatReference} = useChatReference();

  const onPress = () => {
    if (!item) {
      return;
    }
    const {name, thumbnail} = item;
    setOneChatReference(item.owner.id, {
      type: 'plant',
      plantId: item.id,
      name,
      thumbnail,
    });
    navigate('Chat', {item: item.owner});
  };

  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <ImagesSwiper images={item?.images || null} preImage={preImage} />
        <ItemInfo scrollTo={scrollTo} item={item} />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <AvailabilityInfo item={item} onModalConfirmPress={onPress} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          {/* {item ? ( */}
          <StartConversetionButton onPress={onPress} />
          {/* ) : (
            <LoadingStartConversetionButton />
          )} */}
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

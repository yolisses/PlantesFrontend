import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {StartConversetionButton} from 'show/StartConversationButton';
import {useState} from 'react/cjs/react.development';
import {api} from 'api';
import {useChatReference} from 'chat/ChatReferenceContext';

export function ShowItemScreen({route}) {
  const {itemId} = route.params;
  const [item, setItem] = useState(null);

  const scrollRef = useRef();

  const scrollTo = pos => {
    scrollRef.current.scrollTo({y: pos, animated: true});
  };

  async function getItem() {
    try {
      const res = await api.get('/plants/' + itemId);
      setItem(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const {navigate} = useNavigation();
  const {setOneChatReference} = useChatReference();

  const onPress = () => {
    const {name, thumbnail} = item;
    setOneChatReference(item.owner.id, {
      type: 'plant',
      plantId: item.id,
      name,
      thumbnail,
    });
    navigate('Chat', {chatId: item.owner.id});
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView ref={scrollRef}>
        <ImagesSwiper images={item?.images || []} />
        <ItemInfo scrollTo={scrollTo} item={item} />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <AvailabilityInfo item={item} onModalConfirmPress={onPress} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <StartConversetionButton onPress={onPress} />
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

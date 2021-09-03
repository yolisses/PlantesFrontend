import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {StartConversetionButton} from 'show/StartConversationButton';
import {useState} from 'react/cjs/react.development';
import {api} from 'api';

export function ShowItemScreen({route}) {
  const {item} = route.params;
  const [data, setData] = useState(null);

  const scrollRef = useRef();

  const scrollTo = pos => {
    scrollRef.current.scrollTo({y: pos, animated: true});
  };

  async function getItem() {
    try {
      const res = await api.get('/plants/' + item.id);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView ref={scrollRef}>
        <ImagesSwiper images={data?.images || []} />
        <ItemInfo scrollTo={scrollTo} item={data} />
      </ScrollView>
      <View style={styles.bottomWrapper}>
        <AvailabilityInfo />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <StartConversetionButton item={data} />
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

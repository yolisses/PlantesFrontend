import React from 'react';

import {SquareImage} from '../common/SquareImage';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Card({item, fraction}) {
  const {navigate} = useNavigation();

  const onPress = () => {
    if (item) {
      navigate('ShowItem', {item, itemId: item.id});
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <SquareImage uri={item?.image} fraction={fraction || 2} offset={1} />
    </TouchableOpacity>
  );
}

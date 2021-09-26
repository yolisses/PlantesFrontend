import React from 'react';

import {SquareImage} from 'common/SquareImage';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Card({item, fraction, postComponent}) {
  const {navigate} = useNavigation();

  const onPress = () => {
    if (item) {
      navigate('ShowItem', {item: item, preImage: item?.card});
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <SquareImage uri={item?.card} fraction={fraction || 2} />
      {postComponent}
    </TouchableOpacity>
  );
}

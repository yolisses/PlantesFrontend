import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Plant} from 'types/Plant';

import {SquareImage} from 'common/SquareImage';

interface CardProps {
  item: Plant;
  fraction?: number;
  postComponent?: JSX.Element;
}

export function Card({item, fraction = 2, postComponent}: CardProps) {
  const {navigate} = useNavigation();

  const onPress = () => {
    if (item) {
      navigate('ShowItem', {item, preImage: item?.card});
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <SquareImage uri={item?.card} fraction={fraction} />
      {postComponent}
    </TouchableOpacity>
  );
}

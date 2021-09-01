import React from 'react';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import {PostButton} from './PostButton';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

export function CommentButton() {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('Comments');
  };

  return (
    <Pressable onPress={onPress}>
      <PostButton icon={faComment} text="Comentar" />
    </Pressable>
  );
}

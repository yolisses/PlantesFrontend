import React from 'react';
import {Pressable} from 'react-native';
import {CommentSmallText} from './CommentSmallText';

export function ReplyButton() {
  return (
    <Pressable>
      <CommentSmallText text={'Responder'} />
    </Pressable>
  );
}

import {faThumbsUp as faThumbsUpSolid} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp as faThumbsUpRegular} from '@fortawesome/free-regular-svg-icons';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {PostButton} from './PostButton';

export function LikeButton() {
  const [active, setActive] = useState(false);

  return (
    <Pressable onPress={() => setActive(!active)}>
      <PostButton
        icon={active ? faThumbsUpSolid : faThumbsUpRegular}
        color={active ? '#080' : false}
        text={'Curtir'}
      />
    </Pressable>
  );
}

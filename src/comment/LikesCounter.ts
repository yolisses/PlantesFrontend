import React from 'react';
import {CommentSmallText} from './CommentSmallText';

export function LikesCounter({count}) {
  if (!count) {
    return null;
  }

  const getString = () => {
    return count === 1 ? '1 curtida' : count + ' curtidas';
  };
  return <CommentSmallText text={getString()} />;
}

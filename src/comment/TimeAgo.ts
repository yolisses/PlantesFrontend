import React from 'react';
import {CommentSmallText} from './CommentSmallText';

export function TimeAgo({publicationTime}) {
  const getString = () => {
    return '2 d';
  };
  return <CommentSmallText text={getString()} />;
}
